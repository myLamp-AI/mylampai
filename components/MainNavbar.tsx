import Image from "next/image";
import Link from "next/link";

export default function MainNavbar() {
  return (
    <div className="  sticky  bg-white   text-black w-64 flex-shrink-0 hidden md:block">
      <nav className="mt-4 ">
        <div className="flex">
          <div>
            <Link
              href="/"
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/home.svg"
                alt="Verceldcjncn Logo"
                className="mr-1.5 "
                width={23.96}
                height={25.61}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="mt-1 text-xl font-semibold text-gray-500 hover:text-purple-700 transition duration-300 cursor-pointer">Home</h3>
          </div>
        </div>
        <div className="flex">
          <div>
            <Link
              href="/"
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/explore.svg"
                alt="Verceldcjncn Logo"
                className="mr-1 "
                width={28}
                height={18}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="mt-1 text-xl font-semibold text-gray-500 hover:text-purple-700 transition duration-300 cursor-pointer">Explore</h3>
          </div>
        </div>
        <div className="flex">
          <div>
            <Link
              href="/"
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/learn.svg"
                alt="Verceldcjncn Logo"
                className="mr-0.5 "
                width={30.96}
                height={30.61}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="mt-1 text-xl font-semibold text-gray-500  hover:text-purple-700 transition duration-300 cursor-pointer">Learn</h3>
          </div>
        </div>
        <div className="flex">
          <div>
            <Link
              href="/"
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/Achieve.svg"
                alt="Verceldcjncn Logo"
                className="mt-1"
                width={30}
                height={30}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="text-center font-semibold text-gray-500 hover:text-purple-700 transition duration-300 cursor-pointer  mt-2 text-xl">Achieve</h3>
          </div>
        </div>
        <div className="flex">
          <div>
            <Link
              href="/"
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/practice.svg"
                alt="Verceldcjncn Logo"
                className=" "
                width={30.96}
                height={30.61}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="mt-2 text-xl font-semibold text-gray-500 hover:text-purple-700 transition duration-300 cursor-pointer">Practice</h3>
          </div>
        </div>
        <div className="flex">
          <div>
            <Link
              href="/"
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/projects.svg"
                alt="Verceldcjncn Logo"
                className=" "
                width={30.96}
                height={30.61}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="mt-1 text-xl font-semibold text-gray-500 hover:text-purple-700 transition duration-300 cursor-pointer">Projects</h3>
          </div>
        </div>
        <div className="flex">
          <div>
            <Link
              href="/"
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/career.svg"
                alt="Verceldcjncn Logo"
                className=" "
                width={30.96}
                height={30.61}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="mt-1 text-xl font-semibold text-gray-500 hover:text-purple-700 transition duration-300 cursor-pointer">Career</h3>
          </div>
        </div>
        <div className="flex">
          <div>
            <Link
              href="/"
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/mentorship.svg"
                alt="Verceldcjncn Logo"
                className=" "
                width={30.96}
                height={30.61}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="mt-1 text-xl font-semibold text-gray-500 hover:text-purple-700 transition duration-300 cursor-pointer">Mentorship</h3>
          </div>
        </div>
        <div className="flex">
          <div>
            <Link
              href="/"
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/blogs.svg"
                alt="Verceldcjncn Logo"
                className=" "
                width={30.96}
                height={30.61}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="mt-1 text-xl font-semibold text-gray-500 hover:text-purple-700 transition duration-300 cursor-pointer">Blogs</h3>
          </div>
        </div>
        <div className="flex">
          <div>
            <Link
              href="/"
              className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
            >
              <Image
                src="/Community.svg"
                alt="Verceldcjncn Logo"
                className=" "
                width={30.96}
                height={30.61}
                priority
              />
            </Link>
          </div>
          <div>
            <h3 className="mt-1.5 text-xl font-semibold text-gray-500 hover:text-purple-700 transition duration-300 cursor-pointer ">Community</h3>
          </div>
        </div>
      </nav>
    </div>
  );
}
