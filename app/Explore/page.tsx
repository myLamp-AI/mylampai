"use client"
import React,{useState,FC} from "react";
import Image from 'next/image'
import expic from '../../public/expic.png'
import domain from '../../public/domain.png'
import venue from '../../public/venue.png'
import time from '../../public/time.png'
import compass from '../../public/compass.png'
import mlimage from '../../public/mlimage.png'
import Link from "next/link";
import data from '../data/data.json'

const Explore1 =  () => {

    const[value,setValue] = useState([...data])
    const [number,setNumber] = useState(0);
    const renderData = Array(8).fill(value);

    return (
        <>
            <div className="relative">
                    
                    <div className="absolute w-screen h-content md:w-10/12 md:left-56 top-16 bg-[#e8e2f4] flex flex-col"> 
                        <div className="h-1/2 w-full flex flex-row m-2 md:m-5 gap-6">
                            <div className=" md:w-11/12 lg:w-2/3 h-full bg-white border rounded-xl flex flex-row">
                                <div className="sm:w-2/3"> 
                                    <div className="text-2xl leading-6 font-medium font-sans mt-4 ml-4">Journey through GenAI and LLMS</div>
                                    <div className="mt-4 flex justify-center md:hidden"><Image src={expic} alt="person"/></div>
                                    <div className="h-7 w-full gap-x-4 flex flex-row mt-5 ">
                                        <div className="h-7 w-28 ml-2.5 border bg-[#e8e2f4] flex justify-center items-center text-[#0166C8] rounded-md text-md leading-4">3 Weeks</div>
                                        <div className="h-7 w-28 bg-[#e8e2f4] border rounded-md flex justify-center items-center text-[#0166C8] text-md leading-4">Online</div>
                                    </div> 
                                    <div className="h-7 gap-x-4 flex flex-row flex-wrap items-center mt-5 ml-6 text-md leading-4 font-semibold text-[#737373]">
                                        <div className="flex flex-row items-center gap-x-2.5"><Image src={domain} alt="domain" /><span >Domain</span></div>
                                        <div>Bootcamp: Data Science</div>
                                    </div>
                                    <div className="h-7 gap-x-4 flex flex-row mt-7 ml-6 text-md leading-4 font-semibold text-[#737373]">
                                        <div className="flex flex-row gap-x-2.5"><Image src={venue} alt="domain" /><span>Venue</span></div>
                                        <div>Online, Zoom</div>
                                    </div>
                                    <div className="h-11 gap-x-4 flex flex-row mt-6 text-md leading-4 text-[#737373]">
                                        <div className="flex flex-row items-center bg-[#e8e2f4] border rounded-3xl gap-x-4 ml-2 w-56"><Image src={time} alt="domain" /><span>3-5 June, 2024 5.00PM</span></div>
                                        <div className="flex items-center">7 days to go</div>
                                    </div>
                                    <div className="h-11 gap-x-4 flex flex-row mt-5 ml-6 text-base leading-5">
                                        <button className="h-11 w-40 border-2 border-purple-700 rounded-xl bg-white">Past Workshops</button>
                                        <button className="h-11 w-40 rounded-xl bg-purple-700 text-white" >Join Workshop</button>
                                    </div>
                                </div>
                                <div className="hidden xl:flex w-1/3 h-full mb-2">
                                    <Image src={expic} alt="person" placeholder="blur"/>
                                </div>
                            </div>
                            <div className="w-80 h-80 border rounded-xl hidden lg:flex justify-center items-center xl:bg-[#ffffff] ">
                                <Image src={expic} alt="person" placeholder="blur" className="hidden lg:block lg:mt-2 xl:hidden"/>
                                <Image src={compass} alt="compass" placeholder="blur" className="hidden xl:flex"/>
                            </div>
                        </div>
                        <div className="h-1/2 w-full flex flex-col overflow-clip relative">
                            <div className="h-20 w-full relative left-0 flex flex-row">
                                <div className="w-1/12 flex flex-col justify-end items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-[#8C52FF]"></div>
                                    <div className="h-10 w-1 bg-[#000000]"></div>            
                                </div>
                                <div className="w-11/12 flex items-center">
                                    <div className=" text-[#8C52FF]">Block 1: Exploring Careers</div>      
                                </div>
                            </div>
                            {
                                renderData.map((item,index)=>{
                                    return (
                                        <div key={index}>
                                            <div className="h-32 group relative left-0 flex flex-row hover:h-40 transition duration-300 ease-in-out ">
                                                <div className="w-1/12 flex flex-col items-center">
                                                    <div className="h-16 w-1 bg-[#000000] group-hover:h-20"></div>     
                                                    <div className="h-5 w-5 rounded-full border-4 border-[#000000] group-hover:border-[#8C52FF]"></div>
                                                    <div className="h-14 w-1 bg-[#000000] group-hover:h-16"></div>            
                                                </div>  
                                                <div className=" w-10/12 bg-[#FFFFFF] rounded-lg mb-4 flex flex-col h-132 ">
                                                    <div className="flex flex-row mt-2.5 ml-2.5">
                                                        <div><Image src={mlimage} alt="mlimage"/></div>
                                                        <div className="ml-11 mt-3" > 
                                                            <div>
                                                                <span className="text-base leading-5 font-semibold">{item[0].name}</span> 
                                                                <div className="flex gap-4">
                                                                    <span>{item[1].time}</span>
                                                                    <span>|</span>
                                                                    <span>{item[2].byte}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ml-2 mr-3 child opacity-0 group-hover:opacity-100 transition-opacity duration-300 "><Link href="/Explore/VideoPage"><button  className="bg-[#8C52FF] h-8 w-full ml-1 mt-2 rounded-xl">start exploring</button></Link></div> 
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div> 
                    </div>  
            </div>
        </>
    );
}   

export default Explore1