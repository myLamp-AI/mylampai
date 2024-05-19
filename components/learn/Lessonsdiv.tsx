import React from "react";
import Image from "next/image";

const Lessonsdiv = () => {
  return (
    <>
      <div className="  ml-7 w-1/2">
        
        <div className="bg-white border-2 border-gray-300 rounded-lg flex px-6 pt-4 pb-6 mb-4">
      
          <div>
            
            <div className="w-80 h-9 flex mb-4 border-2 border-gray-400  bg-white rounded-3xl ">
              <div className="w-1/6">
                <Image
                  src="/play button.svg"
                  alt="Verceldcjncn Logo"
                  className="mt-1 ml-2 border-rad "
                  width={25}
                  height={25}
                  priority
                />
              </div>
              <div>
                <h4 className="text-black text-sm mt-1">
                  {" "}
                  <b> Language of ML</b> : python
                </h4>
              </div>
            </div>
            <div className="w-80 h-9 flex mb-4 border-2 border-gray-400  bg-white rounded-3xl ">
              <div className="w-1/6">
                <Image
                  src="/play button.svg"
                  alt="Verceldcjncn Logo"
                  className=" ml-2 mt-1 border-rad "
                  width={25}
                  height={15}
                  priority
                />
              </div>
              <div>
                <h4 className="text-black text-sm mt-1">
                  {" "}
                  <b> Language of ML</b> : python
                </h4>
              </div>
            </div>
            <div className="w-80 h-9 flex mb-4 border-2 border-gray-400  bg-white rounded-3xl ">
              <div className="w-1/6">
                <Image
                  src="/play button.svg"
                  alt="Verceldcjncn Logo"
                  className="mt-1 ml-2 border-rad "
                  width={25}
                  height={15}
                  priority
                />
              </div>
              <div>
                <h4 className="text-black text-sm mt-1">
                  {" "}
                  <b> Language of ML</b> : python
                </h4>
              </div>
            </div>
            <div className="w-80 h-9 flex mb-4 border-2 border-gray-400  bg-white rounded-3xl ">
              <div className="w-1/6">
                <Image
                  src="/play button.svg"
                  alt="Verceldcjncn Logo"
                  className="mt-1 ml-2 border-rad "
                  width={25}
                  height={15}
                  priority
                />
              </div>
              <div>
                <h4 className="text-black text-sm mt-1">
                  {" "}
                  <b> Language of ML</b> : python
                </h4>
              </div>
            </div>
            <div className="w-80 h-9 flex mb-4 border-2 border-gray-400  bg-white rounded-3xl">
              <div className="w-1/6">
                <Image
                  src="/play button.svg"
                  alt="Verceldcjncn Logo"
                  className="mt-1 ml-2 border-rad "
                  width={25}
                  height={15}
                  priority
                />
              </div>
              <div>
                <h4 className="text-black text-sm mt-1">
                  {" "}
                  <b> Language of ML</b> : python
                </h4>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
           <div className="mb-5">
           <Image
                  src="/revise.svg"
                  alt="Verceldcjncn Logo"
                  className=" ml-2 border-rad "
                  width={110}
                  height={60}
                  priority
                />
           </div>
           <div className="mb-4"> 
           <Image
                  src="/completed.svg"
                  alt="Verceldcjncn Logo"
                  className="mt-1 ml-2 border-rad "
                  width={110}
                  height={60}
                  priority
                />
           </div>
           <div className="mb-6">
           <Image
                  src="/not started.svg"
                  alt="Verceldcjncn Logo"
                  className="mt-1 ml-2 border-rad "
                  width={110}
                  height={60}
                  priority
                />
           </div>
           <div className="mb-4">
           <Image
                  src="/try again.svg"
                  alt="Verceldcjncn Logo"
                  className="mt-1 ml-2 border-rad "
                  width={110}
                  height={60}
                  priority
                />
           </div>
           <div className="mt-4">
           <Image
                  src="/not started.svg"
                  alt="Verceldcjncn Logo"
                  className="mt-1 ml-2 border-rad "
                  width={110}
                  height={60}
                  priority
                />
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lessonsdiv;
