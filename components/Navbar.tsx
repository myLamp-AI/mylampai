import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className="  bg-white rounded-y-xl border-2 border-gray-300 text-white">
                <div className=" mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="  flex-shrink-0">
                            <Link href="/" className="flex float-left text-purple-700 text-xl font-semibold">
                                <Image
                                    src="/logo.png"
                                    alt="Verceldcjncn Logo"
                                    className="mr-2"
                                    width={100}
                                    height={40}
                                    priority
                                />
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center">
                            <a href="/" className="flex items-center text-black  border-2 border-purple-700 bg-white hover:bg-purple-100 hover:text-gray-700 hover:text-md px-3 py-2 mr-2 rounded-3xl">
                                <Image
                                    src="/Group.png"
                                    alt="Verceldcjncn Logo"
                                    className="mr-2"
                                    width={25}
                                    height={20}
                                    priority
                                /> Account
                            </a>

                            <a href="#" className="border-2 border-purple-700  flex text-black bg-white hover:bg-purple-100 hover:text-gray-700 px-3 py-2 rounded-3xl">
                                <Image
                                    src="/menu header.png"
                                    alt="Verceldcjncn Logo"
                                    className="mr-2"
                                    width={20}
                                    height={20}
                                    priority
                                />Menu
                            </a>
                        </div>


                        <div className="flex md:hidden">
                            <button className="mobile-menu-button text-white p-2 focus:outline-none">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>


                <div className="md:hidden mobile-menu hidden bg-gray-800">
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">Home</a>
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">About</a>
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">Services</a>
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">Contact</a>
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">Login</a>
                    <a href="#" className="block text-white hover:bg-gray-700 px-4 py-2">Account</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar