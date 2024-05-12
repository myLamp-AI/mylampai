// components/ComponentB.tsx
"use client"
import { useState } from 'react';
import React from 'react';
import Image from "next/image";
import ImageComponent from './Image/ImageLearn';

const ComponentB: React.FC = () => {
  const [isCorrect, setIsCorrect] = useState(false);
     const Answer = () => {
     setIsCorrect(!isCorrect);
     };


  return (
      <div className='bg-[#E8E2F4] -mt-0.70 ml-[705px] w-[370px] h-[813px]' >
      <div className='h-full bg- ring-offset-indigo-800  relative'>
        <div className='h-[780px] w-[340px] bg-white absolute top-2 bottom-2 rounded-lg left-[15px]'>
        <div className=" flex h-24  mr-3  mb-0 w-full h-30 top-10 bg-[#8C52FF]  justify-center rounded-lg ...">
          <div className='mt-6 text-white  text-[24px]'>Test Your concepts</div>
        </div>
        <div className='absolute top-[120px] left-[30px] '>
            <Image
            src="/Group 21.svg"
            alt="Verceldcjncn Logo"
            className="dark:invert"
            width={280}
            height={280}
            priority
             /></div>
       <div className='mt-[200px] text-[15px] font-semibold ml-2 mr-2 text-center'><p>Which machine Learning technique is used in the given figure?</p></div>
       <div  onClick={Answer} className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3  border-solid border-2 border-[#8C52FF] flex justify-center items-center rounded-full ...">
       Supervised Learning
        </div>
        <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3  border-solid border-2 border-[#8C52FF] flex justify-center items-center rounded-full ...">
        K-Means Clustering
        </div>
        <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3  border-solid border-2 border-[#8C52FF] flex justify-center items-center rounded-full ...">
        Unsupervised Learning
        </div>
        <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3  border-solid border-2 border-[#8C52FF] flex justify-center items-center rounded-full ...">
        None of the above
        </div>

        { isCorrect && (
        <div className="bg-white w-80 ml-2 h-28 mt-3 relative -bottom-[45px] border-solid border-[1px] border-black flex justify-center items-center rounded-full ...">
        <div className="w-[110px] h-[110px] absolute left-[0px] top-[0] bg-[#8C52FF] rounded-full">
            <Image
            src="/smiling face.svg"
            alt="Verceldcjncn Logo"
            className="dark:invert"
            width={280}
            height={280}
            priority
             />     
        </div>
        <div className=' h-fit  absolute w-40 text-[#3C9213] right-20 left-32'>
        <span className='text-[17px] font-bold '>You’re Correct</span> <br />
        <span className='text-[12px] italic'>Supervised Learning is used <br />
         for spam filtering</span>
         </div>
        </div>
  )

        }

        </div>
      </div>
      </div>
  );
};

export default ComponentB;
