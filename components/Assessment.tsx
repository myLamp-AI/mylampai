// components/ComponentB.tsx
import React from 'react';
import Image from "next/image";
const ComponentB: React.FC = () => {
  return (
      <div className='bg-[#E8E2F4] -mt-0.70 ml-[705px] w-[370px] h-[813px]' >
      <div className='h-full bg- ring-offset-indigo-800  relative'>
        <div className='h-[780px] w-[340px]  bg-white absolute top-2 bottom-2 rounded-lg left-[15px]'>
        <div className=" flex h-24  mr-3  mb-0 w-full h-30 top-10 bg-[#8C52FF]  justify-center rounded-lg ...">
          <div className='mt-6  text-white  text-[24px]'>Test Your concepts</div>
        </div>
        <div>image</div>
       <div className='mt-[200px] text-[15px] font-semibold ml-2 mr-2 text-center'><p>Which machine Learning technique is used in the given figure?</p></div>
       <div className="bg-[#E8E2F4] w-80 ml-2 h-10 mt-3  border-solid border-2 border-[#8C52FF] flex justify-center items-center rounded-full ...">
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
        </div>
      </div>
      </div>
  );
};

export default ComponentB;
