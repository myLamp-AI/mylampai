"use client"
import React,{useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import arrow1 from '../../../public/arrow1.png'
import invarrow from '../../../public/invarrow.png'
import bot from '../../../public/bot.png'
import play from '../../../public/play.png'

const VideoPage = () =>{
    const router = useRouter();
    const Images = [
        "https://www.springboard.com/library/static/d2414c8bcdef19e1cc153a9c1df93f76/857b3/shutterstock_1187539687.jpg",
        
    ];
    const [page,setPage] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const renderDiv = Array(24).fill(null);
    const newImages = Array(24).fill(Images)
   
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? Images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        if (page > 1){
            setPage(page-1);
        }
      };
    const nextSlide = () => {
        const isLastSlide = currentIndex === Images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        if (page < 24){
            setPage(page+1)
        }
    };
    return (
        <div className="h-screen w-full flex flex-col bg-[#E8E2F4]">
            {/* <nav className="bg-white w-screen rounded-y-xl border-2 border-gray-300 text-white">
                <div className="mx-auto px-4">
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
            </nav> */}
            <div className="h-full flex flex-col ">
                <div className="hidden xl:flex flex-row gap-8 justify-center h-14 w-screen items-center">
                    {
                        renderDiv.map((item,index) =>{
                            return (
                                <div key={index}>
                                    <div className={`w-6 h-1 rounded-lg ${index < page ? 'bg-[#000000]' : 'bg-[#8C52FF]'}`}></div> 
                                </div>
                            );
                        })
                    }
                </div>
                <div className="h-2/3 flex">
                    <div className="hidden md:flex items-center"><Image src={arrow1} alt="arrow" onClick={prevSlide} className="h-9 w-5 ml-14 "/></div>
                    <div className="relative w-full max-w-lg mx-auto flex flex-row overflow-hidden place-content-center">
                        {newImages.map((image, index) => (
                            <div key={index} className={`absolute top-14 left-0 w-full h-64 transition-transform transform ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}>
                                <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center"><Image src={invarrow} alt="invarrow" className="h-9 w-5 mr-14" onClick={nextSlide}/></div>
                </div>
                <div className="flex items-end h-1/5">
                        <div className="h-3/12 w-screen flex flex-row items-center justify-between">
                            <div className="flex flex-row">
                                <div className="ml-10 flex flex-row gap-4">
                                    <div className="w-24 h-24 relative ">
                                        <div><Image src={play} alt="play" className="h-24 w-24"/></div>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-3xl leading-9 font-medium text-[#000000]">Data Analytics</span>
                                        <span className="text-xl leading-6 font-medium text-[#737373]">BYTE {page}/24</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block mr-10">
                                <div className="w-24 h-24 rounded-full bg-[#ffffff] flex justify-center items-center"><Image src={bot} alt="bot" className="h-14 w-12"/></div></div>
                            
                        </div>
                </div>
            </div>
        </div>

    );
}



export default  VideoPage