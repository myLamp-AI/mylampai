
import React from "react"
import Image from "next/image";

export default function NavBar(){
    return (
      <>
      <div className="w-90 bg-white text-gray-100 shadow-lg">
        <nav className="relative pl-4 pr-0 py-4 flex justify-between items-left border border-b-slate-300">
          <Image
           src="/logo copy.png"
           alt="Verceldcjncn Logo"
           className="dark:invert"
            width={150}
            height={50}
            priority
             />
          
          <div className="flex flex-row-reverse space-x-4 space-x-reverse ...">
          <div className=" pt-3 pr-4 pb-2 pl-4 me-7 "> 
            
            <Image
          src="/account.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={85}
           height={40}
            />
          </div>
           <div className=" pt-3 pr-4 pb-2 pl-4 me-7 ">  
            
            <Image
          src="/menu.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={85}
           height={40}
            />
          </div>
          <div className="  pt-2 pr-4 pb-2 pl-4  "> 
            
            <Image
          src="/bell.png"
          alt="Verceldcjncn Logo"
          className="dark:invert"
           width={40}
           height={40}
            />
           </div>
  
           </div>
        
        
   
       
      </nav>
     
       </div>
      </>

    );
}