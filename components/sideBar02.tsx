"use client"
import React from "react"
import Image from "next/image";
import { useState } from "react";
import ComponentB from "./Assessment";



export default function SideBar(){
     const [isOpen1, setIsOpen1] = useState(false);
     const toggleDropdown1 = () => {
     setIsOpen1(!isOpen1);
     };
     const [isOpen2, setIsOpen2] = useState(false);
     const toggleDropdown2 = () => {
     setIsOpen2(!isOpen2);
     };
     const [isOpen3, setIsOpen3] = useState(false);
     const toggleDropdown3 = () => {
     setIsOpen3(!isOpen3);
     };
     const [showComponentB, setShowComponentB] = useState(false);

     const toggleComponentB = () => {
     setShowComponentB(!showComponentB);
     };

    return (
    <>
     <div className=" h-screen flex ...">
     <div className=" relative grid grid-row-7 gap-6 bg-[#E8E2F4] border border-r-slate-300 w-1/4 ...">  
     <div className="flex absolute inset-x-0 h-24 mt-2 mr-3 ml-2 mb-0 rounded-lg bottom-0 bg-white ...">
        <div className="bg-[#8C52FF] w-1/3 rounded-lg ... ">
        <div className="rounded-full h-16 w-16 flex items-center justify-center bg-white mt-4 ml-5"><Image
          src="/Vector-2.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={45}
           height={45}
            />
            </div>
            
        </div>
        <div className="w-2/5 bg-white rounded-lg ..."> <div className="h-fit absolute  right-50 top-6 ">
      <div>
        <span className="text-left  text-black font-bold text-decoration-line: underline font-size: 0.75rem ...">Capstone Project</span>
        </div>
        </div></div>
     </div>  
     <div className="h-24 mt-2 mr-3 ml-2 mb-0 h-30 bg-[#8C52FF] rounded-lg ...">
     <div className="h-fit absolute  right-14 top-6 ">
      <div>
        <span className="text-left  text-white font-bold text-decoration-line: underline font-size: 0.75rem ...">module 03</span>
        </div>
        <div>
        <span className=" text-left text-white font-bold">Tech 101: Starting in Tech</span>
        </div>
        <div>
        <span className=" text-left text-white text-[10px]"> 7 lesson   7 lesson    7 lesson    </span>
        </div>
        </div>
     <div className="rounded-full h-14 w-14 flex items-center justify-center bg-white mt-4 ml-2"><Image
          src="/ai.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={35}
           height={35}
            />
            </div>
           
            <div className="rounded-full h-3 w-3  flex items-center justify-center bg-white mr-3 -mt-7 ml-80"><Image
          src="/arrow.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={9}
           height={9}
            />
            </div>
     
     </div>
     <div className="absolute inset-x-0 top-28 h-24 mt-2 mr-3 ml-2 mb-0 h-30 bg-[#f1f0f4] rounded-lg ...">
       <div className="h-fit absolute right-32 top-6 ">
          <div>
        <span className="text-left font-bold font-size: 0.75rem ...">Grade 47%</span>
        </div>
        <div>
        <span className=" text-left font-bold">Credit 4/12</span>
        </div>
        </div>
     <div className="rounded-full h-14 w-14 flex items-center justify-center  mt-6 ml-2"><Image
          src="/robot.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={55}
           height={55}
            />
            </div>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-white mr-25 -mt-14 ml-64"><Image
          src="/calendar.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={35}
           height={35}
            />
            </div>
     </div>
     <div className="flex justify-between absolute inset-x-0 top-56 h-12 mt-2 mr-3 ml-2 mb-0 h-30 rounded-lg ...">
        <div className="bg-white text-[15px] mt-2 mr-4 h-8 w-24 inset-y-0 text-centerw-16 rounded-lg ...">
          <div className="flex relative">
            <div>
             <Image
             src="/insights.svg"
             alt="Verceldcjncn Logo"
             className="dark:invert"
             width={30}
             height={30}
            />
            </div>
            <div>
            <span className="text-[13px] absolute top-1.5">insights</span>
            </div>
            </div>
            </div>
        <div className="bg-white text-[15px] mt-2 mr-4 h-8 w-24 inset-y-0 text-centerw-16 rounded-lg ...">
        <div className="flex relative">
            <div>
             <Image
             src="/roadmap.svg"
             alt="Verceldcjncn Logo"
             className="dark:invert"
             width={30}
             height={30}
            />
            </div>
            <div>
            <span className="text-[13px] absolute top-1.5">Roadmap</span>
            </div>
            </div>
            </div>
            <div className="bg-[#E8E2F4] mt-2  h-8 inset-y-0 left-0 w-16 text-sm  ...">
            <Image
             src="/plus.svg"
             alt="Verceldcjncn Logo"
             className="dark:invert"
             width={25}
             height={25}
            />

            </div>
     </div>
      
            <div className="h-96 mt-2 mr-0 ml-0 mb-0 h-30 rounded-lg ... ">
            <div  className="h-28 mt-2 mr-3 ml-2  mb-0 h-30 relative bg-[#8C52FF] rounded-lg ...">
            {isOpen1 && (
            <div className="float absolute bg-white h-fit border mt-16 border-gray-300 w-full  ml-30 rounded-md shadow-lg z-10 -right-0">
         
            <div className="bg-[#E8E2F4] w-80 ml-2 relative h-10 mt-3 border-solid border-2 border-[#8C52FF] flex justify-center items-center rounded-full ..."> 
          
          <div className="h-fit absolute left-3"  ><Image
          src="/play.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={25}
           height={25}
            />
            </div>
            <div className="absolute left-12">
            Language of ML: <span className=" text-[14px]"> Python</span>
            </div>
           </div>
     <div className="bg-[#E8E2F4] relative w-80 ml-2 h-10 mt-3 border-solid border-2 border-[#8C52FF] flex justify-center items-center rounded-full ...">
     <div className="h-fit absolute left-3"><Image
          src="/play.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={25}
           height={25}
            />
            </div>
            <div className="absolute left-12">
             Supervised Learning:<span className=" text-[14px]"> Classification</span>
            </div>
            </div>
     <div onClick={toggleComponentB}  className="bg-[#E8E2F4] relative w-80 ml-2 h-10 mt-3 border-solid border-2 border-[#8C52FF] flex justify-center items-center rounded-full ...">
     <div className="h-fit absolute left-3"><Image
          src="/play.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={25}
           height={25}
            />
            </div >
            <div className="absolute left-12">
            Assessment:<span className=" text-[14px]"> Python</span>
            </div></div>
     <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3 relative border-solid border-2 border-[#8C52FF] flex justify-center items-center rounded-full ...">
     <div className="h-fit absolute left-3"><Image
          src="/play.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={25}
           height={25}
            />
            </div>
            <div className="absolute left-12">
            Hands on:<span className=" text-[14px]"> ML</span>
            </div>
            </div>
     <div className="bg-[#E8E2F4] w-80 ml-2 mb-3 h-10 mt-3 relative border-solid border-2 border-[#8C52FF] flex justify-center items-center rounded-full ...">
     <div className="h-fit absolute left-3"><Image
          src="/play.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={25}
           height={25}
            />
            </div>
            <div className="absolute left-12">
            ML:<span className=" text-[14px]"> Interact with data</span>
            </div></div>

    </div>
      )}
      <div className="absolute bottom-3 right-3 h-3 w-3 flex  bg-white rounded-full ...">
      <Image
          src="/arrow.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={10}
           height={10}
            />
      </div>
      
      <div onClick={toggleDropdown1}  className="h-20 relative mb-0 h-30 bg-[#e9e8eb] rounded-lg ...">
      <div className="h-fit absolute right-[70px] top-3 ">
          <div>
        <span className="text-left   text-decoration-line: underline font-size: 0.75rem ...">chapter 1</span>
        </div>
        <div>
        <span className=" text-left ">Getting Started with ML</span>
        </div>
        </div>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#E8E2F4] absolute bottom-4 left-2.5"><Image
           src="/ml icon.svg"
           alt="Verceldcjncn Logo"
           className="dark:invert"
           width={25}
           height={25}
            />
            </div>
      </div>
      </div>
      <div className=" relative h-28 mt-2 mr-3 ml-2 mb-0 h-30 bg-[#8C52FF] rounded-lg ...">
      {isOpen2 && (
       <div className="float absolute bg-white h-fir border mt-16 border-gray-300 w-full  ml-30 rounded-md shadow-lg z-10 -right-0">
         
       <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3 border-solid border-2 border-[#8C52FF] rounded-full ..."></div>
       <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3 border-solid border-2 border-[#8C52FF] rounded-full ..."></div>
       <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3 border-solid border-2 border-[#8C52FF] rounded-full ..."></div>
       <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3 border-solid border-2 border-[#8C52FF] rounded-full ..."></div>
       <div className="bg-[#E8E2F4] w-80 ml-2 mb-3 h-10 mt-3 border-solid border-2 border-[#8C52FF] rounded-full ..."></div>
      
      </div>
      )}
      <div className="absolute o bottom-3 right-3 h-3 w-3 flex  bg-white rounded-full ...">
      <Image
          src="/arrow.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={10}
           height={10}
            />
      </div>
      <div onClick={toggleDropdown2}  className="h-20   mb-0 h-30 bg-[#e9e8eb] relative rounded-lg ...">
        <div className="h-fit absolute right-14 top-3 ">
          <div>
        <span className="text-left   text-decoration-line: underline font-size: 0.75rem ...">chapter 2</span>
        </div>
        <div>
        <span className=" text-left">Development Frameworks</span>
        </div>
        </div>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#E8E2F4] absolute bottom-4 left-2.5"><Image
          src="/developement.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={30}
           height={35}
            />
            </div>
      </div>
      </div>
      <div   className=" relative h-28 mt-2 mr-3 ml-2 mb-0 h-30 bg-[#8C52FF] rounded-lg ...">
      {isOpen3 && (
        <div className="float absolute bg-white h-fir border mt-16 border-gray-300 w-full  ml-30 rounded-md shadow-lg z-10 -right-0">
         
         <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3 border-solid border-2 border-[#8C52FF] rounded-full ..."></div>
         <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3 border-solid border-2 border-[#8C52FF] rounded-full ..."></div>
         <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3 border-solid border-2 border-[#8C52FF] rounded-full ..."></div>
         <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3 border-solid border-2 border-[#8C52FF] rounded-full ..."></div>
         <div className="bg-[#E8E2F4] w-80 ml-2 mb-3 h-10 mt-3 border-solid border-2 border-[#8C52FF] rounded-full ..."></div>
        
        </div>
        
      )}
      <div className="absolute bottom-3 right-3 h-3 w-3 flex  bg-white rounded-full ...">
      <Image
          src="/arrow.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={10}
           height={10}
            />
      </div>
      <div  onClick={toggleDropdown3} className="h-20 relative mb-0 h-30 bg-[#e9e8eb] rounded-lg ...">
      <div className="h-fit absolute right-14 top-3 ">
          <div>
        <span className="text-left   text-decoration-line: underline font-size: 0.75rem ...">chapter 3</span>
        </div>
        <div>
        <span className=" text-left mr-[86px]">Cyber Security</span>
        </div>
        </div>
      <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#E8E2F4] absolute bottom-4 left-2.5"><Image
          src="/cybersceurity.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={19}
           height={20}
            />
            </div>
      </div>
      </div>
      </div>
    
    
    </div>
    <div className=" relative w-3/4 ...">{showComponentB && <ComponentB />}
     
     <div className={`${showComponentB ? 'w-[705px]' : 'w-full'} flex border border-b-slate-300 h-14 absolute inset-x-0 top-0 ...`}>
     
     <div className=" absolute top-0 right-12 pt-4 pr-3 pb-0 pl-4 ">
     <Image
           src="/Group.png"
           alt="Verceldcjncn Logo"
           className="dark:invert"
            width={15}
            height={15}
            priority
             />
     </div>
     <div className="relative grid gap-4 grid-cols-4">
     <div className="pt-4 pr-0 pb-0 pl-14">
     <Image
            src="/menu bar-2.png"
            alt="Verceldcjncn Logo"
            className="dark:invert"
            width={23}
            height={20}
            priority
             />
     </div>
     <div className="pt-3 " onClick={toggleComponentB}>Course</div>
     <div className="pt-4 text-centre w-4">
     <Image
           src="/Vector (1).svg"
           alt="Verceldcjncn Logo"
           className="dark:invert"
            width={10}
            height={15}
            priority
             />
     </div>
     <div className="pt-3 text-left absolute left-56">Tech 01</div>
     </div>



   </div>

   <div onClick={toggleComponentB} className={`overflow-hidden transition-width duration-800 ${showComponentB ? 'h-0' : 'h-12'} absolute flex border border-t-slate-300 inset-x-0 bottom-0 ... `}  >
    
    <div onClick={toggleComponentB} className= "w-full relative " >
    <div className=" absolute text-sm top-3 text-center right-10 w-16 bg-[#8C52FF] rounded-lg ...">
        Next 
    </div>
    <div className="absolute text-center  text-sm top-3 left-10 w-16 bg-[#8C52FF] rounded-lg ...">
        Previous
    </div>
    </div>
   </div>
    </div>
   </div>

    </>
    );
    
}
