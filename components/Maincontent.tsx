import React from 'react'
import Image from 'next/image'
const Maincontent = () => {
  return (
   <>
    <div className=" top-0 z-0 bg-purple-100 container relative flex flex-col justify-between h-full w-80 px-10 mx-auto xl:px-0 mt-5">
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
                      <div className="text-gray-900 font-bold text-xl mb-2 sm:text-pink-700">
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

              <div className="w-full sm:w-1/2 ml-5">
                <div className="  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>

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
                      {/* <div className="w-40 h-full">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quis reiciendis veniam sunt, nemo numquam fugiat
                        similique veritatis non voluptatibus provident!
                      </div> */}
                    </div>
                  </div>
                </div>
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
              <div className="mt-4 ">
                <div className="bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 rounded-full h-2"></div>
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
                      {/* <div className="w-40 h-full">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quis reiciendis veniam sunt, nemo numquam fugiat
                        similique veritatis non voluptatibus provident!
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      
   </>
  )
}

export default Maincontent