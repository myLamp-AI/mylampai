"use client"
import React from "react";
import {useState} from "react";
import Image from 'next/image'
import arrow1 from '../../../public/arrow1.png'
import invarrow from '../../../public/arrow1.png'
import bot from '../../../Images/bot.png'
import play from '../../../Images/play.png'
import data from '../../../Images/data-analyst.jpg'


const VideoPage = () =>{
    const [page,setPage] = useState(1);
    function pageIncHandler (){
        if (page < 24){
            setPage(page+1)
        }
    }
    function pageDecHandler(){
        if (page > 1){
            setPage(page-1);
        }
    }
    
    return (
        <>
            <div className="h-screen w-screen bg-[#E8E2F4] flex flex-col">
            <nav className="bg-white rounded-y-xl border-2 border-gray-300 text-white">
                <div className=" mx-auto px-4">
                    <div className="flex justify-between items-center h-16">

                        <div className="  flex-shrink-0">

                            <a href="#" className="flex float-left text-purple-700 text-xl font-semibold">
                                <Image
                                    src="/logo.jpeg"
                                    alt="Verceldcjncn Logo"
                                    className="mr-2"
                                    width={30}
                                    height={20}
                                    priority
                                />mylamp.AI</a>
                        </div>

                        <div className="hidden md:flex items-center">

                            <a href="/" className="flex items-center text-black  border-2 border-purple-700 bg-white hover:bg-purple-100 hover:text-gray-700 hover:text-md px-3 py-2 mr-2 rounded-3xl">
                                <Image
                                    src="/Group.png"
                                    alt="Verceldcjncn Logo"
                                    className="mr-2"
                                    width={25}
                                    height={20}
                                    priority
                                /> Account
                            </a>

                            <a href="#" className="border-2 border-purple-700  flex text-black bg-white hover:bg-purple-100 hover:text-gray-700 px-3 py-2 rounded-3xl">
                                <Image
                                    src="/menu header.png"
                                    alt="Verceldcjncn Logo"
                                    className="mr-2"
                                    width={20}
                                    height={20}
                                    priority
                                />Menu</a>
                        </div>


                        <div className="flex md:hidden">
                            <button className="mobile-menu-button text-white p-2 focus:outline-none">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="md:hidden mobile-menu hidden bg-gray-800">
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">Home</a>
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">About</a>
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">Services</a>
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">Contact</a>
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">Login</a>
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">Account</a>
                </div>
            </nav>

                <div>
                    <div className="flex flex-row gap-16 justify-center h-14 w-screen items-center">
                        <div className="flex flex-row gap-4">
                            <div className="w-6 h-1 bg-[#000000] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#000000] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="w-6 h-1 bg-[#8C52FF] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#8C52FF] rounded-lg"></div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="w-6 h-1 bg-[#8C52FF] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#8C52FF] rounded-lg"></div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="w-6 h-1 bg-[#8C52FF] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#8C52FF] rounded-lg"></div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#ffffff] rounded-lg"></div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="w-6 h-1 bg-[#8C52FF] rounded-lg"></div>
                            <div className="w-6 h-1 bg-[#8C52FF] rounded-lg"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-grow items-center">
                    <div className="h-1/2 w-screen flex flex-row justify-between items-center">
                        <Image src={arrow1} alt="arrow" className="h-9 w-5 ml-14" onClick={pageDecHandler}/> 
                        <Image src={data} alt="arrow" className="w-1/3" onClick={pageDecHandler}/> 
                        <Image src={invarrow} alt="invarrow" className="h-9 w-5 mr-14" onClick={pageIncHandler}/>
                    </div>
                </div>
                <div className="flex items-end">
                    <div className="h-48 w-screen flex flex-row items-center justify-between">
                        <div className="flex flex-row">
                            <div className="ml-10 flex flex-row gap-4">
                                <div><Image src={play} alt="play" className="h-24 w-24"/></div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-3xl leading-9font-medium text-[#000000]">Data Analytics</span>
                                    <span className="text-xl leading-6 font-medium text-[#737373]">BYTE {page}/24</span>
                                </div>
                            </div>
                        </div>
                        <div className="mr-10"><div className="w-24 h-24 rounded-full bg-[#ffffff] flex justify-center items-center"><Image src={bot} alt="bot" className="h-14 w-12"/></div></div>
                        
                    </div>
                </div>
            </div>
        </>
    );

}

export default VideoPage;