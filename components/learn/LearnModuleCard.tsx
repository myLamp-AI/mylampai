"use client"
import Image from "next/image";
import LearnCollapseCard from "./LearnCollapseCard";
import { useState } from "react";

export default function LearnModuleCard() {
    const [showCollapse, setShowCollapse] = useState(false);
   



    return (
        <>
            <div  className="bg-white my-3 rounded-lg">
                <div className=" flex shadow rounded-t-md p-2 rouned-b-none mb-3">
                    <div className="w-full md:w-1/6 ">
                        <Image
                            src="/ai.svg"
                            alt="Verceldcjncn Logo"
                            className="mt-6 mb-5 border-rad mr-4"
                            width={90}
                            height={90}
                            priority
                        />
                    </div>
                    <div  className="w-full sm:w-1/2 ">
                        <h4   className="mb-2 mt-3 underline text-purple-700 font-bold">
                            Module 1
                        </h4>
                        <h1 className=" mb-4 mt-2 text-4xl font-bold">
                            {" "}
                            Tech 101: Starting in Tech
                        </h1>
                        <p className="font-bold text-gray-500">
                            {" "}
                            7 Lessons 7 weeks 7 credits
                        </p>
                    </div>
                    <div className=" mt-6 w-40">
                        <h1 className="font-bold text-gray-600">Grade</h1>
                        <span className="text-sm">66%</span>
                    </div>

                    <div className="flex">
                        <Image
                            src="/Line 1.svg"
                            alt="Verceldcjncn Logo"
                            className="mt-6 mb-5 border-rad mr-4"
                            width={4}
                            height={8}
                            priority
                        />
                    </div>

                    <div className="mt-4">
                        <div className="bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 mt-7 rounded-full h-2"></div>
                        </div>

                        <div>
                            <p className="text-gray-600 text-sm mt-2">Progress: 66%</p>
                        </div>
                    </div>
                    <div  className="ml-5 mt-10" onClick={() => setShowCollapse(!showCollapse)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>

                    
                </div>
                {
                    showCollapse && (
                        <>
                            <LearnCollapseCard />
                            

                        </>
                    )
                }
            </div>
        </>
    )
}