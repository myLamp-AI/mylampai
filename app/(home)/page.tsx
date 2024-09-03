"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSection from "@/components/home/HeroSection";
import AboutWize from "@/components/home/AboutWize";
import WizeCamp from "@/components/home/WizeCamp";
import WhyWize from "@/components/home/WhyWize";
import BackedByBest from "@/components/home/BackedByBest";
import PowerOfWize from "@/components/home/PowerOfWize";
import RecentAdvances from "@/components/home/RecentAdvances";
import CommunitySection from "@/components/home/Community";
import HomeSlider from "@/components/home/HomeSlider";
import './home.css';

const SectionWrapper = ({ children }: {
  children: React.ReactNode;
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // This makes the animation trigger every time
    threshold: 0.1, // Adjust this to control when the animation triggers
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Page() {
  useEffect(() => {
    document.title = "MyLampAi - Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="home-page h-full bg-[#fff]">
        <SectionWrapper><HeroSection /></SectionWrapper>
        <SectionWrapper><AboutWize /></SectionWrapper>
        <SectionWrapper><WizeCamp /></SectionWrapper>
        <SectionWrapper><HomeSlider /></SectionWrapper>
        <WhyWize />
        <SectionWrapper><BackedByBest /></SectionWrapper>
        <SectionWrapper><PowerOfWize /></SectionWrapper>
        <SectionWrapper><RecentAdvances /></SectionWrapper>
        <SectionWrapper><CommunitySection /></SectionWrapper>
      </main>
    </>
  );
}
