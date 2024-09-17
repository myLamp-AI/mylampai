"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import Input from "./Input";
import CountrySelector from "../misc/CountryFlag";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { setCookie } from "@/utils/cookieUtils";
import { useUserStore } from "@/utils/userStore";

const AuthForm: React.FC = () => {
  const { data: session } = useSession();
  const { userData, setUserData, clearUser } = useUserStore();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isOTPVerifing, setIsOTPVerifing] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "user",
  });

  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isOtpLogin, setIsOtpLogin] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value.trim(),
    }));
  };

  const handleCredentialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };

  const sendOTP = async () => {
    if (
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.phone ||
      !user.password
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!validateEmail(user.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!validatePhone(user.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsOTPVerifing(true);

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      });

      if (res.ok) {
        setOtpSent(true);
        toast.success("OTP sent!");
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to send OTP");
      }
    } catch (error) {
      toast.error("An error occurred while sending OTP");
    }
    setIsOTPVerifing(false);
  };

  const verifyOTP = async () => {
    if (!otp) {
      toast.error("Please enter OTP.");
      return;
    }

    setIsOTPVerifing(true);

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, otp }),
      });

      if (res.ok) {
        toast.success("OTP verified!");
        setOtpVerified(true);
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || "OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("An error occurred while verifying OTP");
    }
    setIsOTPVerifing(false);
  };
  ``
  const handleSubmitSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.phone ||
      !user.password
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!validateEmail(user.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!validatePhone(user.phone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!otpVerified) {
      toast.error("Please verify OTP first.");
      return;
    }
    if (!agreeToTerms) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }
    
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          first_name: user.firstName,
          last_name: user.lastName,
          name: `${user.firstName} ${user.lastName}`,
          phone: user.phone,
          password: user.password,
          role: "user",
        }),
      });

      if (res.ok) {
        const userData = await res.json();
        setCookie("token", userData.token, 7); // Set cookie for 7 days
        setCookie("user", JSON.stringify(userData.user), 7); // Set cookie for 7 days
        toast.success("Registration successful!");
        setUserData(userData.user, userData.token);
        router.push("/achieve");
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || "Registration failed");
      }
    } catch (error) {
      console.error("Register error:", error);
      toast.error("An error occurred during registration");
    }
  };

  const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("LoginviaPassword");
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      toast.error("Please enter both email and password.");
      return;
    }

    if (!validateEmail(credentials.email)) {
      toast.error("Please enter a valid Gmail address.");
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();

        // Store user data and token in cookies
        setCookie("token", data.token, 7); 
        setCookie("user", JSON.stringify(data.user), 7); // Set cookie for 7 days

        toast.success("Login successful!");

        setUserData(data.user, data.token);

        router.push("/achieve");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn("google");
      if (result?.ok) router.push("/");
      if (result?.error) {
        console.error("Google sign-in error:", result.error);
        toast.error("Google sign-in failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      toast.error("An error occurred during Google sign-in");
    }
  };

  useEffect(() => {
    if (session?.user) {
      router.push("/");
    } else if (userData) {
      router.push("/achieve")
    } else {
      clearUser();
    }
  }, [session, userData]);

  const sendOTPforlogin = useCallback( async () => {
    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credentials.email }),
      });

      if (response.ok) {
        setOtpSent(true);
        toast.success("OTP sent successfully!");
      } else {
        
      }
    } catch (error) {
      toast.error("Failed to send OTP");
      console.error("Error sending OTP:", error);
    }
  }, [credentials.email]);

  const verifyOTPforlogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/loginWithOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          otp: otp,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful OTP verification (e.g., log the user in, redirect, etc.)
        console.log("OTP verified successfully:", data);
        setCookie("token", data.token, 7); // Set cookie for 7 days
        setCookie("user", JSON.stringify(data.user), 7); // Set cookie for 7 days
        console.log(data.user);
        toast.success("Login successful!");

        setUserData(data.user, data.token);
        router.push("/profile");
      } else {
        // Handle error (e.g., show an error message to the user)
        console.error("Error verifying OTP:", data.error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await fetch("/api/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: credentials.email, }),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("Failed to send password reset request");
      console.error("Error sending password reset request:", error);
    }
  };


  return (
    <div className="bg-primary-foreground flex flex-col items-center justify-center md:h-screen relative p-4 md:p-0 h-screen">
      <div className="absolute top-2 left-0 max-w-[220px]">
        <Link href="/">
        <Image
          src={"/home/logo.svg"}
          width={180}
          height={100}
          alt="logo"
          className="w-full h-auto drop-shadow-md"
        />
        </Link>
      </div>
      <div className="bg-[#fcfcfc] rounded-lg md:rounded-tr-5xl md:rounded-bl-5xl p-3 gap-2 w-full max-w-5xl flex flex-col md:flex-row md:min-h-[50vh] 3xl:min-h-[750px] 3xl:max-w-[1300px] shadow-md items-center xl:h-[46vw] lg:h-[50vw] 2xl:h-[35vw] lg:min-h-[612px]">
        <div className="hidden md:block w-full md:max-w-[350px] bg-purple-500 rounded-lg md:rounded-tr-5xl md:rounded-bl-5xl p-4 mb-4 md:mb-0 relative h-full">
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            showArrows={false}
            showIndicators={false}
            className="w-full  md:h-full flex flex-col pt-4 justify-between"
          >
            <div className="flex justify-center p-4 items-center h-full">
              <Image
                src={"/images/Globe.svg"}
                alt="Carousel Image 1"
                className="w-4/5"
                width={100}
                height={100}
              />
            </div>
            <div className="flex justify-center p-4 items-center h-full">
              <Image
                src={"/images/Globe.svg"}
                alt="Carousel Image 1"
                className="w-4/5"
                width={100}
                height={100}
              />
            </div>
          </Carousel>
        </div>

        <div className="w-full  md:h-full md:min-h-[80vh] p-4 md:p-6 flex flex-col justify-center">
          {isSignUp ? (
            <>
              <div className="text-popover-foreground  flex flex-col mt-5">
                <div className="text-[#666] font-medium text-sm mb-1">
                  Hey Champ!
                </div>
                <div className="font-semibold text-[#444] text-2xl mb-4 ">
                  Create your wiZe Account
                  <div className="h-[2px] my-2 bg-gradient-to-r from-white to-gray-400 max-w-[300px] rounded-full mt-3 "></div>
                </div>
              </div>

              <form
                onSubmit={handleSubmitSignUp}
                className="flex flex-col gap-y-2"
              >
                <div className="flex flex-col md:flex-row gap-2 ">
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    value={user.firstName}
                    onChange={handleChange}
                  />
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    value={user.lastName}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                />

                <div className="flex flex-col md:flex-row md:space-x-2 ">
                  <div className="flex items-center justify-evenly w-full max-w-[150px] border-2 rounded-md mb-4 md:mb-0">
                    <CountrySelector />
                  </div>

                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    type="phone"
                    value={user.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col md:flex-row md:space-x-2 items-center">
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <div className="relative w-full md:mt-0">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-4 py-3 border-1 bg-white outline-none rounded-md text-[#222] placeholder:text-gray-400 placeholder:font-semibold  focus:border-primary-foreground font-medium hover:border-primary-foreground transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={otpSent ? verifyOTP : sendOTP}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white py-1 px-3 rounded-md text-sm font-medium transition-all duration-200"
                    >
                      {otpSent
                        ? isOTPVerifing
                          ? "Verifing"
                          : "Verify OTP"
                        : isOTPVerifing
                          ? "Sending"
                          : "Send OTP"}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-3">
                  <input
                    type="checkbox"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="form-checkbox h-8 w-8 accent-primary transition duration-150 ease-in-out "
                  />
                  <span className="text-gray-800 text-xs font-medium">
                    All your information is collected, stored, and processed as
                    per our data processing guidelines. By signing up on wiZe,
                    you agree to our{" "}
                    <Link
                      href="/privacypolicy"
                      className="text-purple-500 hover:text-purple-700 transition-colors duration-300"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/termsandconditions"
                      className="text-purple-500 hover:text-purple-700 transition-colors duration-300"
                    >
                      Terms of Use
                    </Link>
                    .
                  </span>
                </div>

                <div className="flex justify-between items-center mt-16 ">
                  <div className="text-gray-500 font-semibold">
                    <span className="text-sm">Already have an account? </span>{" "}
                    <div
                      onClick={() => setIsSignUp(false)}
                      className="text-primary font-semibold"
                    >
                      Sign In
                    </div>
                  </div>
                  <div className="flex space-x-6 mb-1">
                    <button
                      type="submit"
                      className="bg-primary text-white px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:scale-105 duration-200 md:text-xl h-1/2  "
                    >
                      <span>Sign Up</span>
                      <Image
                        src={"/images/Arrow.png"}
                        alt="Sign Up Icon"
                        className="w-6 h-6"
                        width={100}
                        height={100}
                      />
                    </button>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="text-popover-foreground flex flex-col">
                <div className="text-[#666] font-medium text-sm mb-1 mt-3">
                  Hey Champ!
                </div>
                <div className="font-semibold text-[#444] text-2xl mb-4 ">
                  Welcome Back to wiZe!
                  <div className="h-[2px] my-2 bg-gradient-to-r from-white to-gray-400 max-w-[300px] rounded-full mt-3 "></div>
                </div>
              </div>

              <button
                type="button"
                className="flex items-center justify-center w-full bg-white text-gray-500 md:shadow p-3 border-1 rounded-l space-x-2  font-semibold transition-all duration-300 hover:shadow-sm hover:transform hover:scale-[1.02] text-lg"
                onClick={handleGoogleSignIn}
              >
                <Image
                  src={"/images/Google_Icons-09-512.png"}
                  alt="Google"
                  width={100}
                  height={100}
                  className="w-6 h-6"
                />
                <span className="text-gray-600 font-bold">
                  Login with Google
                </span>
              </button>

              <div className="flex items-center justify-center my-4">
                <div className="w-1/3 border-b border-gray-300 mr-4"></div>
                <span className="text-gray-400 font-semibold text-center text-sm">
                  Or login with email
                </span>
                <div className="w-1/3 border-b border-gray-300 ml-4 "></div>
              </div>

              <form
                onSubmit={isOtpLogin ? verifyOTPforlogin : handleSubmitLogin}
                className="flex flex-col justify-between gap-4 lg:h-[60%] xl:h-1/2"
              >
                <div className="flex flex-col gap-1">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleCredentialsChange}
                  />

                  <div
                    onClick={() => setIsOtpLogin(!isOtpLogin)}
                    className="text-primary text-left font-semibold px-4"
                  >
                    {isOtpLogin ? "Login with Password" : "Login via OTP"}
                  </div>
                </div>

                {isOtpLogin ? (
                  <div className="relative w-full flex flex-col gap-1">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      autoComplete="off"
                      className="w-full px-2 py-3 border-1 bg-white outline-none rounded-md text-black placeholder:text-gray-400 placeholder:font-semibold placeholder:text-l focus:border-primary-foreground focus:font-semibold  hover:border-primary-foreground transition-all duration-300"
                    />
                    <button className="font-semibold text-left text-primary px-4 absolute bottom-0 translate-y-full ">
                      Didn&apos;t Receive OTP yet?
                    </button>
                    <button
                      type="button"
                      onClick={sendOTPforlogin}
                      className="absolute font-semibold right-2 top-[30%] transform -translate-y-1/2 bg-purple-500 text-white p-2 rounded-sm text-xs transition-all duration-300 hover:shadow-lg hover:bg-purple-600"
                    >
                      {otpSent ? "Resend OTP" : "Send OTP"}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={credentials.password}
                      onChange={handleCredentialsChange}
                    />
                      <div
                        onClick={handleForgotPassword}
                        className="font-semibold text-primary text-left px-4 "
                      >

                        Forgot Password
                      </div>
                    </div>
                )}
                <div className="flex justify-between items-center mt-12 mb-4">
                  <div className="text-gray-500 font-semibold">
                    <span className="text-sm">
                      Don&apos;t have an account? &nbsp;
                    </span>{" "}
                    <div
                      onClick={() => setIsSignUp(true)}
                      className="text-primary font-semibold"
                    >
                      Register
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 duration-200 md:text-xl "
                  >
                    <span>Sign In</span>
                    <Image
                      src={"/images/Arrow.png"}
                      alt="Sign Up Icon"
                      className="w-8 h-8"
                      width={100}
                      height={100}
                    />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
