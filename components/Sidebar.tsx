import Link from "next/link";
import Image from "next/image";
import MainNavbar from "./MainNavbar";
import LearnModuleCard from "./learn/LearnModuleCard";

const Sidebar = () => {
  return (
    <>
      <div className="flex bg-purple-100 ">

        <MainNavbar />


        <div className=" bg-purple-100 container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <div className="w-full">
            <div className="flex flex-col w-full mb-5 sm:flex-row">
              <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                  <div
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    title="Woman holding a mug"
                  >
                    <Image
                      src="/image.svg"
                      alt="Verceldcjncn Logo"
                      className="mr-4 "
                      width={500}
                      height={24}
                      priority
                    />
                  </div>
                  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                      <p className="text-sm text-gray-600 flex items-center"></p>
                      <div className="text-gray-900 font-bold text-xl mb-2 ">
                        Introduction to Machine Learning
                      </div>
                      <div className="flex ">
                        <p className="text-gray-700 text-sm bg-purple-100 mr-4 inline-block rounded-sm p-1">
                          3 Weeks
                        </p>
                        <p className="text-gray-700 text-sm bg-purple-100 inline-block rounded-sm p-1">
                          {" "}
                          6 Months
                        </p>
                      </div>
                      <div className="mt-2">
                        <p className="mt-2 text-gray-700 text-sm">
                          Module : Data Science
                        </p>
                        <p className="text-gray-700 text-sm">
                          Chapter : supervise Learning
                        </p>
                      </div>
                      <div className="flex">
                        <span className=" mt-6 text-sm mr-1 text-gray-700">
                          66%
                        </span>
                        <Image
                          src="/percentage bar.svg"
                          alt="Verceldcjncn Logo"
                          className="mt-6  mr-4"
                          width={500}
                          height={24}
                          priority
                        />
                      </div>
                    </div>
                    <div className="flex items-center mr-4">
                      <div className=" flex text-sm ">
                        <button className="mr-4 bg-purple-700 p-2 rounded-sm font-bold-md text-white">
                          view insights
                        </button>
                        <Link  href ="/learn/chapters" className=" bg-purple-700 p-2 rounded-sm font-bold-md text-white">
                          resume learning
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" ml-6  bg-white full sm:w-1/3 border border-gray-300 rounded-md"></div>
            </div>
            {/* ---------------------------long-card-------------------------------------- */}

            <LearnModuleCard />

            <LearnModuleCard />
            <LearnModuleCard />
            <LearnModuleCard />

          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
