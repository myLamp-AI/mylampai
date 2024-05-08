import React from "react";
import { Progress } from "@material-tailwind/react";
import "animate.css";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <div className="flex bg-purple-100 ">
        <div className="bg-white   text-black w-64 flex-shrink-0 hidden md:block">
          <nav className="mt-4">
            <a
              href="#"
              className=" flex hover:text-xl font-bold  px-4 py-2 text-lg items-center hover:bg-white hover:text-purple-700 mb-2"
            >
              {" "}
              <Image
                src="/home.png"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={25}
                height={20}
                priority
              />
              Home
            </a>

            <Link
              href="Explore"
              className="hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/explore.png"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={25}
                height={20}
                priority
              />
              Explore
            </Link>
            <a
              href="#"
              className=" flex  px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2 transition-colors "
            >
              <Image
                src="/learn3.png"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={25}
                height={20}
                priority
              />
              Learn
            </a>
            <a
              href="#"
              className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/learn.png"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={25}
                height={20}
                priority
              />
              Achieve
            </a>
            <a
              href="#"
              className="flex  px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/Learnn.png"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={25}
                height={20}
                priority
              />
              Practice
            </a>
            <a
              href="#"
              className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/porject.png"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={25}
                height={20}
                priority
              />
              Projects
            </a>
            <a
              href="#"
              className="flex px-4 py-2 text-lg font-bold hover:text-xl  hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/career.png"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={25}
                height={20}
                priority
              />
              Career
            </a>
            <a
              href="#"
              className="flex px-4 py-2 text-lg font-bold hover:text-xl hover:bg-white hover:text-purple-700 mb-2  transition-colors duration-300"
            >
              <Image
                src="/mentorship.png"
                alt="broken img"
                className="mr-4 hover:text-purple-700"
                width={25}
                height={20}
                priority
              />
              Mentorship
            </a>
          </nav>
        </div>

        <div className=" bg-purple-100 container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <div className="w-full">
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
                  <div className="relative  h-full p-5 bg-white  rounded-xl">
                    <div className="flex items-center -mt-1">
                      <div className="">
                        <Image
                          src="/ml3.webp"
                          alt="Verceldcjncn Logo"
                          className="mr-4 rounded-xl"
                          width={80}
                          height={100}
                          priority
                        />
                      </div>
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Introduction To Machine Learning
                      </h3>
                    </div>
                    <p className="font-bold mt-3 mb-1 text-md text-black uppercase">
                      100%
                    </p>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-blue-600 h-2.5 rounded-full"></div>
                    </div>

                    <p className="mb-2 text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quo, eaque dolores? Ipsam saepe illum asperiores, sint
                      pariatur hic eligendi recusandae.
                    </p>
                    <button className="bg-purple-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Click Me
                    </button>
                  </div>
                </div>
              </div>
              <div className="max-w-md bg-white rounded-lg shadow-md p-4">
  <h5 className="text-lg font-bold mb-2">A ODH Introduction to Machine Learning</h5>
  <p className="text-gray-600">Duration: 3 Weeks</p>
  <p className="text-gray-600">Module: Data Science</p>
  <p className="text-gray-600">Chapter: Supervise learning and applications</p>
  <div className="flex items-center">
    <p className="text-gray-600">Progress: 66%</p>
    <div className="bg-orange-500 h-2 w-2/3 rounded-full"></div>
  </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Insights</button>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Resume Learning</button>
</div>
              <div className="w-full sm:w-1/2">
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg"></span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4  mb-3">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-purple-800 underline">
                    Module 1
                  </h2>
                  <p className="text-black text-2xl font-bold">
                    Tech 102: Starting in Tech
                  </p>
                </div>
                <div className="flex">
                  <p className="text-gray-600 mr-3 font-bold"> 7 Lessons </p>
                  <p className="text-gray-600 mr-3 font-bold"> | 7 weeks</p>
                  <p className="text-gray-600 font-bold "> | 7 credits</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2"></div>
                </div>
                <p className="text-gray-600 text-sm mt-2">Progress: 66%</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4  ">
              <div className=" justify-between items-center ">
                <div className="">
                  <h2 className="text-xl font-bold text-purple-800 underline mr-3">
                    Module 1
                  </h2>
                  <p className="text-black text-2xl font-bold ">
                    Tech 101: Starting in Tech
                  </p>
                </div>
                <div className=" flex">
                  <p className="text-gray-600 mr-3 font-bold"> 7 Lessons </p>
                  <p className="text-gray-600 mr-3 font-bold"> | 7 weeks</p>
                  <p className="text-gray-600 font-bold "> | 7 credits</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2"></div>
                </div>
                <p className="text-gray-600 text-sm mt-2">Progress: 66%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Sidebar;
