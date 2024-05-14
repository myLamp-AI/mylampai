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
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/home.svg"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={100}
                height={24}
                priority
              />
            </a>

            <Link
              href="Explore"
              className="hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/explore.svg"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={107}
                height={24}
                priority
              />
            </Link>
            <a
              href="#"
              className=" flex  px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2 transition-colors "
            >
              <Image
                src="/learn.svg"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={104}
                height={24}
                priority
              />
            </a>
            <a
              href="#"
              className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/achieve.svg"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={110}
                height={24}
                priority
              />
            </a>
            <a
              href="#"
              className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/practice.svg"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={107}
                height={24}
                priority
              />
            </a>
            <a
              href="#"
              className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/projects.svg"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={110}
                height={24}
                priority
              />
            </a>
            <a
              href="#"
              className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/career.svg"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={115}
                height={25}
                priority
              />
            </a>
            <a
              href="#"
              className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/mentorship.svg"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={140}
                height={28}
                priority
              />
            </a>
            <a
              href="#"
              className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/blogs.svg"
                alt="Verceldcjncn Logo"
                className=""
                width={100}
                height={23}
                priority
              />
            </a>
            <a
              href="#"
              className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
            >
              <Image
                src="/community.svg"
                alt="Verceldcjncn Logo"
                className="mr-4"
                width={145}
                height={24}
                priority
              />
            </a>
          </nav>
        </div>

        <div className=" bg-purple-100 container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <div className="w-full">
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                  <div
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    title="Woman holding a mug"
                  >
                    <Image
                      src="/image.svg"
                      alt="Verceldcjncn Logo"
                      className="mr-4"
                      width={500}
                      height={24}
                      priority
                    />
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm text-gray-600 flex items-center"></p>
                      <div className="text-gray-900 font-bold text-xl mb-2 ">
                        Introduction to Machine Learning
                      </div>
                      <div className="flex ">
                        <p className="text-gray-700 text-sm bg-purple-100 mr-4 inline-block rounded-sm p-1">
                          3 Weeks
                        </p>
                        <p className="text-gray-700 text-sm bg-purple-100 inline-block rounded-sm p-1">
                          {" "}
                          6 Months
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="mt-2 text-gray-700 text-sm">
                          Module : Data Science
                        </p>
                        <p className="text-gray-700 text-sm">
                          Chapter : supervise Learning
                        </p>
                      </div>
                      <div className="flex">
                        <span className=" mt-6 text-sm mr-1 text-gray-700">
                          66%
                        </span>
                        <Image
                          src="/percentage bar.svg"
                          alt="Verceldcjncn Logo"
                          className="mt-6  mr-4"
                          width={500}
                          height={24}
                          priority
                        />
                      </div>
                    </div>
                    <div className="flex items-center mr-4">
                      <div className=" flex text-sm ">
                        <button className="mr-4 bg-purple-700 p-2 rounded-sm font-bold-md text-white">
                          view insights
                        </button>
                        <button className=" bg-purple-700 p-2 rounded-sm font-bold-md text-white">
                          resume learning
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" ml-6  bg-white full sm:w-1/3 border border-gray-300 rounded-md"></div>
            </div>
            {/* ---------------------------long-card-------------------------------------- */}
            <div className=" flex bg-white shadow rounded-t-md p-4 rouned-b-none mb-3">
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
              <div className="w-full sm:w-1/2 ">
                <h4 className="mb-2 underline text-purple-700 font-bold">
                  Module 1
                </h4>
                <h1 className=" mb-4 text-4xl font-bold">
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
            </div>
            <div className=" -mt-3 relative w-[400] overflow-hidden ">
              <input
                type="checkbox"
                className="
                peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="bg-white h-10 w-full pl-5 flex items-center ">
                {/* <h1 className="text-lg font-semi-bold text-white ">
                 
                    open
                  </h1> */}
              </div>
              <div className="absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
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
              <div className="bg-white flex space-between rounded-md overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-full ">
                {/* content------- */}
                <div className="p-4 text-white flex flex-row ">
                  <div className="w-80 h-full ">
                    <div className="w-50 h-14 flex hover:text-purple-700 justify-between mb-7 rounded-md hover:bg-white bg-purple-100">
                      <div className="text-black text-md ml-5 ">
                        <h5 className="text-gray-500 "> Chapter 1</h5>
                        <h3> Getting started with python</h3>
                      </div>
                      <div className="float:right mt-3 text-black mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-50 h-14 flex justify-between mb-7 rounded-md hover:bg-white bg-purple-100">
                      <div className="text-black text-md ml-5">
                        <h5 className="text-gray-500"> Chapter 1</h5>
                        <h3> Getting started with python</h3>
                      </div>
                      <div className="float:right mt-3 text-black mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-50 h-14 flex justify-between mb-7 rounded-md hover:bg-white bg-purple-100">
                      <div className="text-black text-md ml-5">
                        <h5 className="text-gray-500"> Chapter 1</h5>
                        <h3> Getting started with python</h3>
                      </div>
                      <div className="float:right mt-3 text-black mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-50 h-14 flex justify-between mb-7 rounded-md hover:bg-white bg-purple-100">
                      <div className="text-black text-md ml-5">
                        <h5 className="text-gray-500"> Chapter 1</h5>
                        <h3> Getting started with python</h3>
                      </div>
                      <div className="float:right mt-3 text-black mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-50 h-14 flex justify-between mb-7 rounded-md hover:bg-white hover:text-purple-700 bg-purple-100">
                      <div className="text-black text-md ml-5">
                        <h5 className="text-white-500 text-xs hover:text-purple-700">
                          {" "}
                          Chapter 1
                        </h5>
                        <h3> Getting started with python</h3>
                      </div>
                      <div className="float:right mt-3 text-black mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-8"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className=" ml-7 w-1/2">
                  <div className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="flex justify-between items-center">
    <h1 className="text-2xl font-bold">Lessons</h1>
    <span className="bg-blue-500 text-black px-2 py-1 rounded">Not started!</span>
  </div>
  <div className="mt-4">
    <h2 className="text-xl font-bold">Language of ML: Python</h2>
    <p>Supervised Learning: classNameification</p>
    <p>Assessment: Python</p>
    <p>Hands on: ML</p>
  </div>
  <div className="mt-4">
    <h2 className="text-xl font-bold">Revise</h2>
    <p>Completed</p>
  </div>
  <div className="mt-4">
    <h2 className="text-xl font-bold">ML: Interact with data</h2>
    <p>Not started!</p>
  </div>
</div>
</div>
                   
                      
                       
                      
                      
                 
                </div>
              </div>
            </div>
            {/* ---------------------------------------------------------------- */}

            <div className=" flex rounded- bg-white shadow rounded-lg p-4 mt-3 mb-3">
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
              <div className="w-full sm:w-1/2 ">
                <h4 className="mb-2 underline text-purple-700 font-bold">
                  Module 1
                </h4>
                <h1 className=" mb-4 text-4xl font-bold">
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

                <p className="text-gray-600 text-sm mt-2">Progress: 66%</p>

                <div className="relative w-[400] overflow-hidden ">
                  <input
                    type="checkbox"
                    className="
                peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className="bg-white h-10 w-full pl-5 flex items-center rounded-md">
                    {/* <h1 className="text-lg font-semi-bold text-white ">
                 
                    open
                  </h1> */}
                  </div>
                  <div className="absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
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
                  <div className="bg-blue-500 rounded-md overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-full ">
                    {/* content------- */}
                  </div>
                </div>
              </div>
            </div>
            <div className=" -mt-3 relative w-[400] overflow-hidden ">
              <input
                type="checkbox"
                className="
                peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
              />
              <div className="bg-white h-10 w-full pl-5 flex items-center ">
                {/* <h1 className="text-lg font-semi-bold text-white ">
                 
                    open
                  </h1> */}
              </div>
              <div className="absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180">
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
              <div className="bg-blue-500 rounded-md overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-full ">
                {/* content------- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
