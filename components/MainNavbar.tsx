import Image from "next/image"
import Link from "next/link"

export default function MainNavbar() {
    return (
        <div className="bg-white   text-black w-64 flex-shrink-0 hidden md:block">
            <nav className="mt-4">
                <a
                    href="#"
                    className=" hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
                >
                    <Image
                        src="/home.svg"
                        alt="Verceldcjncn Logo"
                        className="mr-4"
                        width={100}
                        height={24}
                        priority
                    />
                </a>

                <Link
                    href="Explore"
                    className="hover:text-xl font-bold flex px-4 py-2 text-lg hover:bg-white hover:text-purple-700  mb-2 + transition-colors duration-300"
                >
                    <Image
                        src="/explore.svg"
                        alt="Verceldcjncn Logo"
                        className="mr-4"
                        width={107}
                        height={24}
                        priority
                    />
                </Link>
                <a
                    href="#"
                    className=" flex  px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2 transition-colors "
                >
                    <Image
                        src="/learn.svg"
                        alt="Verceldcjncn Logo"
                        className="mr-4"
                        width={104}
                        height={24}
                        priority
                    />
                </a>
                <a
                    href="#"
                    className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
                >
                    <Image
                        src="/achieve.svg"
                        alt="Verceldcjncn Logo"
                        className="mr-4"
                        width={110}
                        height={24}
                        priority
                    />
                </a>
                <a
                    href="#"
                    className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
                >
                    <Image
                        src="/practice.svg"
                        alt="Verceldcjncn Logo"
                        className="mr-4"
                        width={107}
                        height={24}
                        priority
                    />
                </a>
                <a
                    href="#"
                    className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
                >
                    <Image
                        src="/projects.svg"
                        alt="Verceldcjncn Logo"
                        className="mr-4"
                        width={110}
                        height={24}
                        priority
                    />
                </a>
                <a
                    href="#"
                    className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
                >
                    <Image
                        src="/career.svg"
                        alt="Verceldcjncn Logo"
                        className="mr-4"
                        width={115}
                        height={25}
                        priority
                    />
                </a>
                <a
                    href="#"
                    className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
                >
                    <Image
                        src="/mentorship.svg"
                        alt="Verceldcjncn Logo"
                        className="mr-4"
                        width={140}
                        height={28}
                        priority
                    />
                </a>
                <a
                    href="#"
                    className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
                >
                    <Image
                        src="/blogs.svg"
                        alt="Verceldcjncn Logo"
                        className=""
                        width={100}
                        height={23}
                        priority
                    />
                </a>
                <a
                    href="#"
                    className="flex px-4 py-2 font-bold text-lg hover:text-xl hover:bg-white hover:text-purple-700  mb-2  transition-colors duration-300"
                >
                    <Image
                        src="/community.svg"
                        alt="Verceldcjncn Logo"
                        className="mr-4"
                        width={145}
                        height={24}
                        priority
                    />
                </a>
            </nav>
        </div>
    )
}