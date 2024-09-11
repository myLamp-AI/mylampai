import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/global/Navbar";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import AuthProvider from "@/components/auth/AuthProvider";
import Flexsidebar from "@/components/misc/Flexsidebar";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "wiZe - MyLampAi",
  description: "wiZe - MyLampAi",
};

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    redirect("/login");
  }
  try {
    if (token && token.value)
      jwt.verify(token?.value as string, process.env.JWT_SECRET as string);
  } catch (error) {
    redirect("/login");
  }

  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
    <Head>
      <meta
        name="description"
        content="Welcome to wiZe by MyLamp AI, where we offer innovative solutions."
      />
      <meta name="keywords" content="wiZe, MyLamp AI, AI solutions, tech" />
      <meta name="author" content="MyLamp AI" />
      <meta property="og:title" content="wiZe - MyLamp AI" />
      <meta
        property="og:description"
        content="Discover innovative solutions by MyLamp AI."
      />
      <meta name="twitter:title" content="wiZe - MyLamp AI" />
      <meta
        name="twitter:description"
        content="Welcome to wiZe by MyLamp AI."
      />
    </Head>
      <body className={`${openSans.className} bg-primary-foreground`}>
        <GoogleAnalytics gaId="G-3TPKSH7MPS" />
        <AuthProvider>
          <Navbar />
          <div className="flex w-full h-full transition-all duration-300">
            <Flexsidebar />
            {children}
          </div>
          <Toaster position="top-center" />
        </AuthProvider>
      </body>
    </html>
  );
}
