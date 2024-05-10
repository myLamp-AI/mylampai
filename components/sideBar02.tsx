"use client"
import React from "react"
import Image from "next/image";
import { useState } from "react";


export default function SideBar02(){
    const [open, setOpen]= useState<boolean>(false);
    console.log(open);
    const dropHandle=(state:boolean)=>{
        setOpen(!state);
    

    }
    return (
    <>
     <div className=" h-screen flex ...">
     <div className=" relative grid grid-row-7 gap-6 bg-[#E8E2F4] border border-r-slate-300 w-1/4 ...">  
     <div className="flex absolute inset-x-0 h-24 mt-2 mr-3 ml-2 mb-0 rounded-lg bottom-0 bg-white ...">
        <div className="bg-[#8C52FF] w-1/3 rounded-lg ... ">
        <div className="rounded-full h-16 w-16 flex items-center justify-center bg-white mt-4 ml-5"><Image
          src="/Vector-3.svg"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={45}
           height={45}
            />
            </div>
            
        </div>
        <div className="w-2/5 bg-white rounded-lg ..."></div>
     </div>  
     <div className="h-24 mt-2 mr-3 ml-2 mb-0 h-30 bg-[#8C52FF] rounded-lg ...">
     <div className="rounded-full h-14 w-14 flex items-center justify-center bg-white mt-4 ml-2"><Image
          src="/ai.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={35}
           height={35}
            />
            </div>
            <div  onClick={e=>dropHandle(true)} className="rounded-full h-3 w-3  flex items-center justify-center bg-white mr-3 -mt-7 ml-80"><Image
          src="/arrow.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={9}
           height={9}
            />
            </div>
     
     </div>
     <div className="absolute inset-x-0 top-28 h-24 mt-2 mr-3 ml-2 mb-0 h-30 bg-[#f1f0f4] rounded-lg ...">
     <div className="rounded-full h-14 w-14 flex items-center justify-center  mt-6 ml-2"><Image
          src="/robot-2.svg"
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
        <div className="bg-white text-sm  mt-2 mr-4 h-8 inset-y-0 text-centerw-16 ...">insights</div>
        <div className="bg-white mt-2 mr h-8 inset-y-0 left-0 w-16 text-sm  ...">Roadmap</div>
        <div className="bg-white mt-2 mr-10 h-8 inset-y-0 left-0 w-16 text-sm  ...">logo</div>
     </div>
      
      <div className="h-96 mt-2 mr-0 ml-0 mb-0 h-30 rounded-lg ... ">
      <div className="h-28 mt-2 mr-3 ml-2  mb-0 h-30 relative bg-[#8C52FF] rounded-lg ...">
      <div className="absolute bottom-3 right-3 h-3 w-3 flex  bg-white rounded-full ...">
      <Image
          src="/arrow.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={10}
           height={10}
            />
      </div>
      
      <div className="h-20 relative mb-0 h-30 bg-[#e9e8eb] rounded-lg ...">
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
      <div className="absolute onclick() bottom-3 right-3 h-3 w-3 flex  bg-white rounded-full ...">
      <Image
          src="/arrow.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={10}
           height={10}
            />
      </div>
      <div className="h-20  mb-0 h-30 bg-[#e9e8eb] relative rounded-lg ...">
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
      <div className=" relative h-28 mt-2 mr-3 ml-2 mb-0 h-30 bg-[#8C52FF] rounded-lg ...">
      <div className="absolute bottom-3 right-3 h-3 w-3 flex  bg-white rounded-full ...">
      <Image
          src="/arrow.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={10}
           height={10}
            />
      </div>
      <div className="h-20 relative mb-0 h-30 bg-[#e9e8eb] rounded-lg ...">
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
    <div className=" relative w-3/4 ...">

     <div className=" flex border border-b-slate-300  absolute inset-x-0 top-0 h-14 ...">
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
     <div className="   pt-4 pr-0 pb-0 pl-14">
     <Image
            src="/menu bar-2.png"
            alt="Verceldcjncn Logo"
            className="dark:invert"
            width={23}
            height={20}
            priority
             />
     </div>
     <div className="pt-3 ">Course</div>
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
   <div className=" absolute flex border border-t-slate-300 inset-x-0 bottom-0 h-12 ...">
    <div className="w-full  relative">
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
