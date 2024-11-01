"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import * as pdfJSLib from "pdfjs-dist";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FiX } from "react-icons/fi";
import { IoDocumentAttach, IoCloudUploadOutline } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useWebSocketContext } from "@/hooks/interviewersocket/webSocketContext";
import InterviewPage from "./InterviewPage";
import { useRouterStore } from "@/utils/useRouteStore";
import { useRouter } from "next/navigation";

pdfJSLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfJSLib.version}/pdf.worker.min.js`;

const InterviewComponent = () => {
  const { ws } = useWebSocketContext();
  const { changeRoute } = useRouterStore();
  const [step, setStep] = useState(1);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [jdFile, setJDFile] = useState<File | null>(null);
  const [deviceList, setDeviceList] = useState<MediaDeviceInfo[]>([]);

  const router = useRouter();

  console.log(deviceList);

  const [isNextEnabled, setIsNextEnabled] = useState(false);

  const [selectedJobProfile, setSelectedJobProfile] = useState("");
  const [jobProfile, setJobProfile] = useState("");
  const [cvText, setCvText] = useState("");
  const [JD, setJD] = useState("");

  const [isInterviewStarted, setIsInterviewStarted] = useState(false);

  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const jobProfiles = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "UI/UX Designer",
    "Business Analyst",
    "DevOps Engineer",
    "System Administrator",
  ];

  const updateDeviceList = useCallback(() => {
    try {
      if (!navigator.mediaDevices?.enumerateDevices) {
        console.log("enumerateDevices() not supported.");
        return;
      }

      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          const audioInputDevices = devices.filter(
            (device) => device.kind === "audioinput"
          );
          const videoInputDevices = devices.filter(
            (device) => device.kind === "videoinput"
          );

          setDeviceList([...audioInputDevices, ...videoInputDevices]);
        })
        .catch((err) => {
          console.error(`${err.name}: ${err.message}`);
        });
        
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "NotAllowedError") {
          toast.error("Camera and/or microphone access denied.");
        } else if (error.name === "NotFoundError") {
          toast.error("No media devices found.");
        } else {
          toast.error("Error accessing media devices:");
          console.log("Error accessing media devices: ", error);
        }
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  }, []);

  useEffect(() => {
    updateDeviceList();
  }, [updateDeviceList]);

  useEffect(() => {
    if (ws) {
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);

        switch (data.type) {
          case "cv_uploaded":
            setIsUploading(false);
            toast.success("Resume uploaded successfully");
            setCvText(data.cv_text);
            break;

          case "interview_started":
            console.log("hello in interviewer");
            setIsInterviewStarted(true);
            break;

          case "jd_analyzed":
            setJD(data.job_description);
            setIsNextEnabled(true);
            break;

          default:
            break;
        }
      };
    }
  }, [ws]);

  const handleResumeAnalysis = (file: File) => {
    setIsUploading(true);
    setResumeFile(file);

    const reader = new FileReader();

    reader.onload = async (e) => {
      const binaryData = e.target?.result as ArrayBuffer;

      if (binaryData && ws) {
        try {
          ws?.send(
            JSON.stringify({
              type: "upload_cv",
              cv_data: Array.from(new Uint8Array(binaryData)),
            })
          );
        } catch (error) {
          setIsUploading(false);
          setResumeFile(null);
          console.log("Socket is not initialised");
        }
      } else {
        setIsUploading(false);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    console.log("resume upload started");
    const file = event.target.files?.[0];

    if (!file || file.type !== "application/pdf") {
      toast.error("Upload PDF file");
      return;
    }

    handleResumeAnalysis(file);
  };

  const handleResumeDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];

    if (!file || file.type !== "application/pdf") {
      toast.error("Upload PDF file");
      return;
    }

    handleResumeAnalysis(file);
  };

  const extractTextFromPDF = (file: File): Promise<string> => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = async function (event) {
        const typedArray = new Uint8Array(event.target?.result as ArrayBuffer);

        if (typeof window !== "undefined") {
          const pdf = await pdfJSLib.getDocument(typedArray).promise;
          let text = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
              .map((item: any) => item.str)
              .join(" ");
            text += ` ${pageText}`;
          }
          resolve(text.trim());
        } else {
          reject(
            new Error("pdfjs-dist is not available in the server environment")
          );
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const handleJDAnalysis = async (file: File) => {
    setJDFile(file);

    let extractedText = "";

    if (file.type === "application/pdf")
      extractedText = await extractTextFromPDF(file);
    else extractedText = await file.text();

    if (extractedText && ws) {
      ws.send(
        JSON.stringify({ type: "analyze_jd", job_description: extractedText })
      );
    } else {
      console.error("websocket is not initialised or no extracted text");
    }
  };

  const handleJDUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];

    if (file) await handleJDAnalysis(file);
  };

  const handleJDDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file) await handleJDAnalysis(file);
  };

  const handleProfileChange = (profile: string) => {
    setSelectedJobProfile(profile);

    if (profile === "Other") {
      setJD("");
      return;
    }

    ws?.send(
      JSON.stringify({
        type: "analyze_jd",
        job_description: profile,
      })
    );
  };

  const handleJDSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!jobProfile) {
      return;
    }

    ws?.send(
      JSON.stringify({
        type: "analyze_jd",
        job_description: jobProfile,
      })
    );
  };

  const startInterview = () => {
    if (!cvText || !JD) {
      toast.error("Upload CV and Job Description");
      return;
    }

    ws?.send(
      JSON.stringify({
        type: "start_interview",
        pdf_text: cvText,
        job_description: JD,
      })
    );
  };

  const handleNextClick = () => {
    if (step === 1) {
      setStep(2);
      return;
    }

    changeRoute(false);
    React;
    startInterview();
  };

  const handleBackClick = () => {
    if (step == 2) {
      setStep(1);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (isInterviewStarted) {
    return <InterviewPage />;
  }

  return (
    <>
      <div className="h-custom bg-primary-foreground flex items-center md:justify-center justify-top w-full">
        <div className="max-w-[1200px] gap-4 w-full flex flex-col items-center md:flex-row justify-between">
          <div className="max-w-[450px] w-[90vw] md:mt-[8vh] md:w-[50vw] flex flex-col items-center justify-end bg-primary shadow-lg mt-[16vh] h-[62vh] md:h-auto ml-[5vw] mr-[5vw] md:m-10 text-white rounded-3xl p-10 relative">
            <Image
              src={"/images/Globe.svg"}
              className="w-full h-auto"
              alt="image"
              width={100}
              height={100}
            />
            <div className="relative flex flex-col items-center mt-auto">
              <h2 className="text-xl font-bold text-center leading-snug">
                Take the wiZe AI mock Interview
              </h2>
              <p className="mt-2 text-center text-sm leading-relaxed">
                You&apos;ll be taking a 20-minute interview to have your skills
                evaluated. Just relax and take the interview.{" "}
                <span className="font-semibold"> All the best!</span>
              </p>
            </div>
          </div>

          <div className="w-full md:max-w-[500px] max-h-[90vh] scrollbar-hide overflow-hidden lg:max-w-[700px] overflow-x-hidden flex flex-col items-center justify-center bg-primary-foreground p-10 md:mr-8 lg:mr-0">
            <div className="text-2xl font-semibold mb-2 text-primary">
              Get Started!
            </div>
            {step === 1 ? (
              <>
                <div className="flex mx-auto items-center max-w-[450px] justify-center w-full">
                  <div className="relative flex-1">
                    <div
                      className={`w-8 h-8 ${
                        !!resumeFile ? "bg-purple-500" : "bg-gray-400"
                      } rounded-full flex items-center justify-center`}
                    >
                      {!!resumeFile ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div
                      className={`absolute top-1/2 left-8 h-0.5 transition-all duration-500 ease-in-out ${
                        resumeFile ? "bg-primary w-full" : "bg-gray-400 w-full"
                      } z-0`}
                    ></div>
                  </div>

                  <div className="relative flex-1">
                    <div
                      className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center`}
                    >
                      {resumeFile ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div
                      className={`absolute top-1/2 left-8 h-0.5 transition-all duration-500 ease-in-out bg-gray-400 w-full z-0`}
                    ></div>
                  </div>

                  <div className="relative flex items-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="text-center my-4 w-full text-xl font-semibold">
                  Upload your latest CV/Resume
                </div>

                <div className="bg-white py-4 px-8 rounded-3xl w-full md:max-w-[350px] lg:max-w-[400px] lg:max-h-[260px] shadow-lg text-center">
                  <div className="flex items-center justify-center text-primary mb-5 relative top-0 text-3xl">
                    <IoDocumentAttach />
                  </div>

                  {cvText ? (
                    <div className="text-center text-gray-600 font-semibold relative h-[135px] flex items-center justify-center">
                      Resume Uploaded: {resumeFile?.name}
                      <button
                        className="absolute top-0 right-4 text-gray-600 hover:text-red-600 focus:outline-none"
                        onClick={() => setCvText("")}
                      >
                        <FiX className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    <div
                      className="border-dashed border-2 border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center bg-white h-[150px] lg:h-[135px]"
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleResumeDrop(e)}
                    >
                      <p className="text-gray-500 mt-2 text-sm lg:text-xs">
                        Drag & Drop or
                      </p>
                      <label
                        htmlFor="resumeUpload"
                        className="text-gray-500 cursor-pointer text-sm lg:text-xs"
                      >
                        Click to{" "}
                        <span className="font-semibold text-gray-700">
                          Upload Resume
                        </span>
                      </label>
                      <input
                        id="resumeUpload"
                        type="file"
                        name="resumeUpload"
                        accept=".pdf, application/pdf"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleResumeUpload}
                      />

                      <div className="text-4xl mt-3 text-gray-300">
                        <IoCloudUploadOutline />
                      </div>

                      <p className="text-gray-400 text-sm mt-3 lg:text-xs">
                        Supported file formats: DOC, DOCX, PDF. File size limit
                        10 MB.
                      </p>
                    </div>
                  )}

                  <button
                    className={`flex justify-center items-center mt-2 mx-auto bg-primary text-lg md:w-full relative text-white font-bold py-3 px-3 rounded-xl lg:max-h-[40px]   ${
                      !!cvText
                        ? "cursor-not-allowed bg-gray-400"
                        : "hover:bg-primary focus:ring-4 focus:ring-primary-foreground transition"
                    }`}
                    onClick={handleUploadClick}
                    disabled={cvText !== ""}
                  >
                    {isUploading
                      ? "Uploading..."
                      : cvText !== ""
                      ? "Resume Uploaded"
                      : "Upload Resume"}
                  </button>
                </div>

                <div className="mt-8 w-full px-4 flex flex-col items-center">
                  <button
                    className={`w-[40vw] xl:w-[32vw] md:max-w-[700px] lg:max-h-[70px] flex justify-center items-center h-full text-lg font-bold py-6 rounded-lg focus:ring-4 focus:ring-gray-200 transition ${
                      resumeFile
                        ? "bg-gray-600 text-white hover:bg-gray-800"
                        : "bg-gray-300 text-gray-800 cursor-not-allowed"
                    }`}
                    disabled={cvText === ""}
                    onClick={handleNextClick}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex mx-auto items-center max-w-[450px] justify-center mb-2 w-full">
                  <div className="relative flex-1">
                    <div
                      className={`w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div
                      className={`absolute top-1/2 left-8 h-0.5 transition-all duration-500 ease-in-out bg-primary w-full z-0`}
                    ></div>
                  </div>
                  {/* Step 2 */}
                  <div className="relative flex-1">
                    <div
                      className={`w-8 h-8 ${
                        isNextEnabled ? "bg-primary" : "bg-gray-400"
                      } rounded-full flex items-center justify-center`}
                    >
                      {isNextEnabled ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div
                      className={`absolute top-1/2 left-8 h-0.5 transition-all duration-500 ease-in-out ${
                        isNextEnabled
                          ? "bg-primary w-full"
                          : "bg-gray-400 w-full"
                      } z-0`}
                    ></div>
                  </div>
                  <div className="relative flex items-center">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <h3 className="text-sm xl:text-2xl mb-6 font-bold text-gray-800">
                  Choose your Interview Profile
                </h3>

                <div className="bg-white py-4 px-8 rounded-3xl w-full md:max-w-[450px] lg:max-w-[450px] shadow-lg text-center flex flex-col items-center">
                  <Tabs defaultValue="profile" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-2 bg-primary-foreground py-2 h-auto">
                      <TabsTrigger value="profile">Choose Profile</TabsTrigger>
                      <TabsTrigger value="jd">Upload JD</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                      <select
                        id="jobProfileDropdown"
                        className="w-full transition p-4 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={selectedJobProfile}
                        onChange={(e) => handleProfileChange(e.target.value)}
                      >
                        <option value="" disabled={!!selectedJobProfile}>
                          Select a profile
                        </option>
                        {jobProfiles.map((profile) => (
                          <option key={profile} value={profile}>
                            {profile}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                      {selectedJobProfile === "Other" && (
                        <form onSubmit={handleJDSubmit}>
                          <input
                            value={jobProfile}
                            onChange={(e) => {
                              setJobProfile(e.target.value);
                            }}
                            className="mt-4 p-4 border text-center flex items-center justify-center border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full transition"
                            placeholder="Enter profile name"
                          />
                          <Button type="submit">Submit</Button>
                        </form>
                      )}
                    </TabsContent>
                    <TabsContent value="jd">
                      <div className="border-dashed border-2 border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center bg-white h-[160px] mt-4">
                        {JD !== "" ? (
                          <div className="text-center text-gray-600 font-semibold relative h-[150px] flex items-center justify-center">
                            Job Description Uploaded: {jdFile?.name}
                            <button
                              className="absolute top-[44%] right-6 text-gray-600 hover:text-red-600 focus:outline-none"
                              onClick={() => setJD("")}
                            >
                              <FiX className="w-5 h-5" />
                            </button>
                          </div>
                        ) : (
                          <div
                            onDragOver={handleDragOver}
                            onDrop={handleJDDrop}
                          >
                            <p className="text-gray-500 mt-2 text-sm">
                              Drag & Drop or
                            </p>
                            <label
                              htmlFor="jdUpload"
                              className="text-gray-500 cursor-pointer text-sm"
                            >
                              Click to{" "}
                              <span className="font-semibold text-gray-700">
                                Upload Job Description
                              </span>
                            </label>
                            <input
                              id="jdUpload"
                              type="file"
                              accept=".doc,.docx,.pdf"
                              className="hidden"
                              onChange={handleJDUpload}
                            />

                            <div className="text-4xl mt-3 flex justify-center text-gray-300">
                              <IoCloudUploadOutline />
                            </div>

                            <p className="text-gray-400 text-sm mt-3">
                              Supported file formats: DOC, DOCX, PDF. File size
                              limit 10 MB.
                            </p>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="flex flex-col justify-center items-center mt-6 w-full">
                  <button
                    onClick={handleNextClick}
                    disabled={JD === ""}
                    className={`w-[40vw] xl:w-[32vw] md:max-w-[700px] lg:max-h-[70px] flex justify-center items-center h-full text-lg font-bold py-6 rounded-lg focus:ring-4 focus:ring-gray-200 transition ${
                      JD !== ""
                        ? "bg-gray-600 text-white hover:bg-gray-800"
                        : "bg-gray-300 text-gray-800 cursor-not-allowed"
                    } rounded-full px-4 py-2`}
                  >
                    Next
                  </button>

                  <button
                    onClick={handleBackClick}
                    className="bg-transparent text-gray-700 w-full font-semibold py-3 mt-2 rounded-lg hover:text-gray-900 focus:ring-4 focus:ring-gray-200 transition"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewComponent;