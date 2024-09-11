import "./../globals.css";
import { Open_Sans } from "next/font/google";
import HomeNavbar from "@/components/home/HomeNavbar";
import Footer from "@/components/home/Footer";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import AuthProvider from "@/components/auth/AuthProvider";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Explore, Learn and Achieve your Dream Career",
  description: "Get AI Powered personalized career guidance based on your interests, aptitudes and goals.",
  keywords: "wiZe, wize ai, MyLamp AI, MyLampAI, mylamp, mylampai, mylamp.ai, mylamp-ai, mylamp_ai, mylampai.com, mylampai.in, mylampai.co, ai cv reviewer, cv reviewer, resume reviewer, resume parser, cv parser, resume scanner, cv scanner, resume checker, cv checker, resume grader, cv grader, resume evaluator, cv evaluator, resume analyzer, cv, ai mock interviewer, ai interviewer, mock interviewer, interview, interview practice, interview preparation, interview simulator, interview questions, interview answers, interview tips, interview techniques, interview strategies, interview skills, interview feedback, interview coaching, interview training, interview guide, interview help, interview support, interview mentor, career guidance, personalised career guidance, explore career, explore career options, personalised learning, smart community, ai powered smart community, coding community, product community, community"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className={`${openSans.className}`}>
        <GoogleAnalytics gaId="G-3TPKSH7MPS" />
        <AuthProvider>
          <HomeNavbar />
          <div className="flex flex-col min-h-screen bg-cover transition-all duration-300">
            {children}
            <Footer />
          </div>
        </AuthProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
