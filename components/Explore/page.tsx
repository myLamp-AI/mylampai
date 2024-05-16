"use client"
import React from "react";
import Image from 'next/image'
import expic from '../../public/expic.png'
import domain from '../../Images/domain.png'
import venue from '../../Images/venue.png'
import time from '../../Images/time.png'
import compass from '../../Images/compass.png'
import mlimage from '../../Images/mlimage.png'
import Link from "next/link";




const Explore = () =>{
    
    return(
        <>
                <div className="absolute w-4/5 left-64 top-16 bg-[#e8e2f4] flex flex-col"> 
                    <div className="h-1/2 w-full flex flex-row m-5 gap-6">
                        <div className="w-2/3 bg-white border rounded-xl flex flex-row">
                            <div className="w-2/3"> 
                                <div className="text-2xl leading-6 font-medium font-sans mt-[15px] ml-4">Journey through GenAI and LLMS</div>
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
                            <div className="w-1/3 mt-2 mb-2 flex items-center">
                                <Image src={expic} alt="person" placeholder="blur"/>
                            </div>
                        </div>
                        <div className="w-80 border rounded-xl flex justify-center items-center bg-white">
                            <Image src={compass} alt="compass" placeholder="blur" />
                        </div>
                    </div>
                    <div className="h-1/2 w-full flex flex-col items-end  overflow-x-clip overflow-y-clip">
                        <div className="h-20 w-full relative left-16 flex flex-row">
                            <div className="w-1/12 flex flex-col justify-end items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-[#8C52FF]"></div>
                                <div className="h-10 w-1 bg-[#000000]"></div>            
                            </div>
                            <div className="w-11/12 flex items-center">
                                <div className=" text-[#8C52FF]">Block 1: Exploring Careers</div>      
                            </div>
                        </div>
                        <div className="h-32 group w-full relative left-16 flex flex-row hover:h-40 transition duration-300 ease-in-out ">
                            <div className=" w-1/12 flex flex-col justify-end items-center">
                                <div className="h-16 w-1 bg-[#000000] group-hover:h-20"></div>     
                                <div className="h-5 w-5 rounded-full border-4 border-[#000000] group-hover:border-[#8C52FF]"></div>
                                <div className="h-14 w-1 bg-[#000000] group-hover:h-16"></div>            
                            </div>          
                            <div className=" w-10/12 bg-[#FFFFFF] rounded-lg mb-4 flex flex-col h-132">
                                <div className="flex flex-row mt-2.5 ml-2.5">
                                    <div><Image src={mlimage} alt="mlimage"/></div>
                                    <div className="flex flex-col ml-11 justify-center" >
                                        <span className="text-base leading-5 font-semibold">Introduction to Machine Learning</span>
                                        <span className="text-sm leading-4 font-semibold text-[#737373]">14 min | 24 bytes</span>
                                    </div>
                                </div>
                                <div className="ml-2 mr-3 child opacity-0 group-hover:opacity-100 transition-opacity duration-300 "><Link href="/Explore/VideoPage"><button className="bg-[#8C52FF] h-8 w-full ml-1 mt-2 rounded-xl">start exploring</button></Link></div> 
                            </div>  
                        </div>
                        <div className="h-32 group w-full relative left-16 flex flex-row hover:h-40 transition duration-300 ease-in-out ">
                            <div className=" w-1/12 flex flex-col justify-end items-center">
                                <div className="h-16 w-1 bg-[#000000] group-hover:h-20"></div>     
                                <div className="h-5 w-5 rounded-full border-4 border-[#000000] group-hover:border-[#8C52FF]"></div>
                                <div className="h-14 w-1 bg-[#000000] group-hover:h-16"></div>            
                            </div>          
                            <div className=" w-10/12 bg-[#FFFFFF] rounded-lg mb-4 flex flex-col h-132">
                                <div className="flex flex-row mt-2.5 ml-2.5">
                                    <div><Image src={mlimage} alt="mlimage"/></div>
                                    <div className="flex flex-col ml-11 justify-center" >
                                        <span className="text-base leading-5 font-semibold">Introduction to Machine Learning</span>
                                        <span className="text-sm leading-4 font-semibold text-[#737373]">14 min | 24 bytes</span>
                                    </div>
                                </div>
                                <div className="ml-2 mr-3 child opacity-0 group-hover:opacity-100 transition-opacity duration-300 "><Link href="/Explore/VideoPage"><button className="bg-[#8C52FF] h-8 w-full ml-1 mt-2 rounded-xl">start exploring</button></Link></div> 
                            </div>  
                        </div>
                        <div className="h-32 group w-full relative left-16 flex flex-row hover:h-40 transition duration-300 ease-in-out ">
                            <div className=" w-1/12 flex flex-col justify-end items-center">
                                <div className="h-16 w-1 bg-[#000000] group-hover:h-20"></div>     
                                <div className="h-5 w-5 rounded-full border-4 border-[#000000] group-hover:border-[#8C52FF]"></div>
                                <div className="h-14 w-1 bg-[#000000] group-hover:h-16"></div>            
                            </div>          
                            <div className=" w-10/12 bg-[#FFFFFF] rounded-lg mb-4 flex flex-col h-132">
                                <div className="flex flex-row mt-2.5 ml-2.5">
                                    <div><Image src={mlimage} alt="mlimage"/></div>
                                    <div className="flex flex-col ml-11 justify-center" >
                                        <span className="text-base leading-5 font-semibold">Introduction to Machine Learning</span>
                                        <span className="text-sm leading-4 font-semibold text-[#737373]">14 min | 24 bytes</span>
                                    </div>
                                </div>
                                <div className="ml-2 mr-3 child opacity-0 group-hover:opacity-100 transition-opacity duration-300 "><Link href="/Explore/VideoPage"><button className="bg-[#8C52FF] h-8 w-full ml-1 mt-2 rounded-xl">start exploring</button></Link></div> 
                            </div>  
                        </div>
                        <div className="h-32 group w-full relative left-16 flex flex-row hover:h-40 transition duration-300 ease-in-out ">
                            <div className=" w-1/12 flex flex-col justify-end items-center">
                                <div className="h-16 w-1 bg-[#000000] group-hover:h-20"></div>     
                                <div className="h-5 w-5 rounded-full border-4 border-[#000000] group-hover:border-[#8C52FF]"></div>
                                <div className="h-14 w-1 bg-[#000000] group-hover:h-16"></div>            
                            </div>          
                            <div className=" w-10/12 bg-[#FFFFFF] rounded-lg mb-4 flex flex-col h-132">
                                <div className="flex flex-row mt-2.5 ml-2.5">
                                    <div><Image src={mlimage} alt="mlimage"/></div>
                                    <div className="flex flex-col ml-11 justify-center" >
                                        <span className="text-base leading-5 font-semibold">Introduction to Machine Learning</span>
                                        <span className="text-sm leading-4 font-semibold text-[#737373]">14 min | 24 bytes</span>
                                    </div>
                                </div>
                                <div className="ml-2 mr-3 child opacity-0 group-hover:opacity-100 transition-opacity duration-300 "><Link href="/Explore/VideoPage"><button className="bg-[#8C52FF] h-8 w-full ml-1 mt-2 rounded-xl">start exploring</button></Link></div> 
                            </div>  
                        </div>
                        <div className="h-32 group w-full relative left-16 flex flex-row hover:h-40 transition duration-300 ease-in-out ">
                            <div className=" w-1/12 flex flex-col justify-end items-center">
                                <div className="h-16 w-1 bg-[#000000] group-hover:h-20"></div>     
                                <div className="h-5 w-5 rounded-full border-4 border-[#000000] group-hover:border-[#8C52FF]"></div>
                                <div className="h-14 w-1 bg-[#000000] group-hover:h-16"></div>            
                            </div>          
                            <div className=" w-10/12 bg-[#FFFFFF] rounded-lg mb-4 flex flex-col h-132">
                                <div className="flex flex-row mt-2.5 ml-2.5">
                                    <div><Image src={mlimage} alt="mlimage"/></div>
                                    <div className="flex flex-col ml-11 justify-center" >
                                        <span className="text-base leading-5 font-semibold">Introduction to Machine Learning</span>
                                        <span className="text-sm leading-4 font-semibold text-[#737373]">14 min | 24 bytes</span>
                                    </div>
                                </div>
                                <div className="ml-2 mr-3 child opacity-0 group-hover:opacity-100 transition-opacity duration-300 "><Link href="/Explore/VideoPage"><button className="bg-[#8C52FF] h-8 w-full ml-1 mt-2 rounded-xl">start exploring</button></Link></div> 
                            </div>  
                        </div>
                        <div className="h-32 group w-full relative left-16 flex flex-row hover:h-40 transition duration-300 ease-in-out ">
                            <div className=" w-1/12 flex flex-col justify-end items-center">
                                <div className="h-16 w-1 bg-[#000000] group-hover:h-20"></div>     
                                <div className="h-5 w-5 rounded-full border-4 border-[#000000] group-hover:border-[#8C52FF]"></div>
                                <div className="h-14 w-1 bg-[#000000] group-hover:h-16"></div>            
                            </div>          
                            <div className=" w-10/12 bg-[#FFFFFF] rounded-lg mb-4 flex flex-col h-132">
                                <div className="flex flex-row mt-2.5 ml-2.5">
                                    <div><Image src={mlimage} alt="mlimage"/></div>
                                    <div className="flex flex-col ml-11 justify-center" >
                                        <span className="text-base leading-5 font-semibold">Introduction to Machine Learning</span>
                                        <span className="text-sm leading-4 font-semibold text-[#737373]">14 min | 24 bytes</span>
                                    </div>
                                </div>
                                <div className="ml-2 mr-3 child opacity-0 group-hover:opacity-100 transition-opacity duration-300 "><Link href="/Explore/VideoPage"><button className="bg-[#8C52FF] h-8 w-full ml-1 mt-2 rounded-xl">start exploring</button></Link></div> 
                            </div>  
                        </div>
                        <div className="h-32 group w-full relative left-16 flex flex-row hover:h-40 transition duration-300 ease-in-out ">
                            <div className=" w-1/12 flex flex-col justify-end items-center">
                                <div className="h-16 w-1 bg-[#000000] group-hover:h-20"></div>     
                                <div className="h-5 w-5 rounded-full border-4 bborder-[#000000] group-hover:border-[#8C52FF]"></div>
                                <div className="h-14 w-1 bg-[#000000] group-hover:h-16"></div>            
                            </div>          
                            <div className=" w-10/12 bg-[#FFFFFF] rounded-lg mb-4 flex flex-col h-132">
                                <div className="flex flex-row mt-2.5 ml-2.5">
                                    <div><Image src={mlimage} alt="mlimage"/></div>
                                    <div className="flex flex-col ml-11 justify-center" >
                                        <span className="text-base leading-5 font-semibold">Introduction to Machine Learning</span>
                                        <span className="text-sm leading-4 font-semibold text-[#737373]">14 min | 24 bytes</span>
                                    </div>
                                </div>
                                <div className="ml-2 mr-3 child opacity-0 group-hover:opacity-100 transition-opacity duration-300 "><Link href="/Explore/VideoPage"><button className="bg-[#8C52FF] h-8 w-full ml-1 mt-2 rounded-xl">start exploring</button></Link></div> 
                            </div>  
                        </div>
                        <div className="h-32 group w-full relative left-16 flex flex-row hover:h-40 transition duration-300 ease-in-out ">
                            <div className=" w-1/12 flex flex-col justify-end items-center">
                                <div className="h-16 w-1 bg-[#000000] group-hover:h-20"></div>     
                                <div className="h-5 w-5 rounded-full border-4 border-[#000000] group-hover:border-[#8C52FF]"></div>
                                <div className="h-14 w-1 bg-[#000000] group-hover:h-16"></div>            
                            </div>          
                            <div className=" w-10/12 bg-[#FFFFFF] rounded-lg mb-4 flex flex-col h-132">
                                <div className="flex flex-row mt-2.5 ml-2.5">
                                    <div><Image src={mlimage} alt="mlimage"/></div>
                                    <div className="flex flex-col ml-11 justify-center" >
                                        <span className="text-base leading-5 font-semibold">Introduction to Machine Learning</span>
                                        <span className="text-sm leading-4 font-semibold text-[#737373]">14 min | 24 bytes</span>
                                    </div>
                                </div>
                                <div className="ml-2 mr-3 child opacity-0 group-hover:opacity-100 transition-opacity duration-300 "><Link href="/Explore/VideoPage"><button className="bg-[#8C52FF] h-8 w-full ml-1 mt-2 rounded-xl">start exploring</button></Link></div> 
                            </div>  
                        </div>
                    </div> 
                </div>


            
            
        </>
    );
}


export default Explore

