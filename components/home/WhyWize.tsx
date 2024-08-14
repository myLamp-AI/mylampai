"use client";
import ExperiencedCounsellors from "./ExperiencedCounsellors";
import PracticeCoding from "./PractiseCoding";
// import Image from "next/image"
import WizeCampLink from "./WizeCampLink";
import { useState } from "react";
import Image from "next/image";

interface Data {
  id: string;
  text: string;
}

const whyWizeLinks = [
  {
    id: "allroundassistance",
    text: "All round assistance",
  },
  {
    id: "practice",
    text: "Practice",
  },
  {
    id: "smartestplatform",
    text: "Smartest Platform",
  },
  {
    id: "experiencedcounsellors",
    text: "Experienced Counsellors",
  },
  {
    id: "ourwinningrecord",
    text: "Our Winning Record",
  },
];

export default function WhyWize() {
  const [active, setActive] = useState("allroundassistance");

  return (
    <>
      <div className="flex flex-col items-center mb-4">
        <div className="max-w-[1300px] h-[100px] flex justify-center items-center w-full gap-4 mb-8">
          <div className="h-1 bg-black w-full max-w-[150px] sm:max-w-[200px] md:max-w-[33%] bg-gradient-to-r from-white to-primary"></div>
          <div className="w-full text-3xl md:text-4xl font-medium text-center">
            Why Choose&nbsp;<span className="text-[#8C52FF]">wiZ</span>e{" "}
          </div>
          <div className="h-1 bg-black w-full max-w-[150px] sm:max-w-[200px] md:max-w-[33%] bg-gradient-to-r from-primary to-white"></div>
        </div>
        <div className="flex w-full max-w-[1350px] relative">
          <div className="hidden md:flex flex-col w-full max-w-[300px] pt-[100px] sticky top-0 h-screen text-[#000000BB] px-8 text-lg font-semibold tracking-wide gap-3 ">
            {whyWizeLinks.map((item: Data, index) => {
              return (
                <WizeCampLink
                  key={index}
                  active={active}
                  setActive={setActive}
                  id={item.id}
                  text={item.text}
                />
              );
            })}
          </div>
          <div className="md:border-l-4 md:border-[#baa1eb] px-6 lg:px-[60px] xl:px-[100px] relative">
            <div
              id="allroundassistance"
              className="pb-[50px] sm:pb-[100px] focus:text-[#8C52FF] sm:min-h-[700px]"
            >
              <h4 className="pt-4 font-semibold text-[#8C52FF]">
                ALL ROUND ASSISTANCE
                <div className="bg-[#8C52FF] w-6 h-6 blur-sm rounded-full absolute left-0 md:top-0 translate-x-[-14px] translate-y-[-100%] md:translate-y-[-50%]"></div>
              </h4>
              <div className="text-2xl sm:text-3xl font-medium mt-8 mb-4">
                To make it happen for you
              </div>
              <p className="text-sm sm:text-base text-[#000000BB] font-medium my-4">
                Everything you need, we got it! Shortlisting - yup, documents
                editing - yes, application support - yeah, scholarships - yus,
                loan & visa - in-house!
              </p>
              <div className="bg-[#3a3a3a] min-h-[400px] w-full my-8 rounded-2xl"></div>
            </div>

            <PracticeCoding />

            <div
              id="smartestplatform"
              className="pb-[50px] sm:pb-[100px] sm:min-h-[700px]"
            >
              <h4 className="pt-4 font-semibold text-[#8C52FF]">
                SMARTEST PLATFORM
                <div className="bg-[#8C52FF] w-6 h-6 blur-sm rounded-full absolute left-0 translate-x-[-14px] translate-y-[-100%] "></div>
              </h4>
              <div className="text-2xl sm:text-3xl font-medium mt-8 mb-4">
                100% online for your comfort
              </div>
              <p className="text-sm sm:text-base text-[#000000BB] font-medium my-4">
                Reach your counsellor with just a text or a call, track your
                entire process in one place, and never miss an update! Our
                platform will take care of you!
              </p>
              <div className="bg-[#3a3a3a] min-h-[400px] w-full my-8 rounded-2xl"></div>
            </div>

            <ExperiencedCounsellors />

            <div id="ourwinningrecord" className=" sm:min-h-[700px]">
              <h4 className="pt-4 font-semibold text-[#8C52FF]">
                OUR WINNING RECORD
                <div className="bg-[#8C52FF] w-6 h-6 blur-sm rounded-full absolute left-0 translate-x-[-14px] translate-y-[-100%] "></div>
              </h4>
              <div className="text-2xl sm:text-3xl font-medium mt-8 mb-4">
                Because you deserve only the Best!
              </div>
              <p className="text-sm sm:text-base text-[#000000BB] font-medium my-4">
                ESome advices can come only from experience. And we have a lot
                of that! Check out our numbers and see for yourselves...
              </p>
              <div className="flex flex-wrap justify-center gap-4 min-h-[400px] w-full my-8 rounded-2xl">
                <div className="bg-white w-full max-w-[300px] lg:max-w-[380px] xl:max-w-[400px] overflow-hidden rounded-2xl shadow-lg shadow-[#8C52FF30] min-h-[200px]">
                  <Image src="./home/whywize/4.svg" alt="winningrecord" width={100} height={100} className="w-full"></Image>
                </div>
                <div className="bg-white w-full max-w-[300px] lg:max-w-[380px] xl:max-w-[400px] overflow-hidden rounded-2xl shadow-lg shadow-[#8C52FF30] min-h-[200px]">
                  <Image src="./home/whywize/2.svg" alt="winningrecord" width={100} height={100} className="w-full"></Image>
                </div>
                <div className="bg-white w-full max-w-[300px] lg:max-w-[380px] xl:max-w-[400px] overflow-hidden rounded-2xl shadow-lg shadow-[#8C52FF30] min-h-[200px]">
                  <Image src="./home/whywize/3.svg" alt="winningrecord" width={100} height={100} className="w-full"></Image>
                </div>
                <div className="bg-white w-full max-w-[300px] lg:max-w-[380px] xl:max-w-[400px] overflow-hidden rounded-2xl shadow-lg shadow-[#8C52FF30] min-h-[200px]">
                  <Image src="./home/whywize/1.svg" alt="winningrecord" width={100} height={100} className="w-full"></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
