import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useState, react} from 'react'

const underconstruction = () => {
  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Home", path: "/" },
      { title: "About Us", path: "/underconstruction" },
      { title: "Services", path: "/underconstruction" },
      { title: "Past Work", path: "/underconstruction" },
      { title: "Book", path: "/Book" },
      { title: "Reviews", path: "/underconstruction" },
      { title: "Contact Us", path: "/underconstruction" }
  ]
  return (
    <div className="bg-black h-screen">
          <header className="bg-black">
        <nav className=" bg-black items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 ">
            <div className=" bg-black flex justify-between">
            
                <button className="text-[#DAA545] outline-none md:hidden"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )
                    }
                </button>
            </div>
            <ul className={` flex-1 justify-between mt-12 md:flex md:mt-0 ${state ? '' : 'hidden'}`}>
                {/* <li className=" order-2 pb-5 md:pb-0">
                    <a href="javascript:void(0)" className="py-3 px-6 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block md:inline">
                        Sign In
                    </a>
                </li> */}
                <div className=" bg-black order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
                    {
                        navigation.map((item, idx) => (
                            <li className="text-white hover:text-[#DAA545]" key={idx}>
                                <a href={item.path}>{item.title}</a>
                            </li>
                            
                        ))
                    }
           
                </div>
            </ul>
        </nav>
    </header>
    <div className=" bg-black mx-auto max-w-screen-xl  px-4 sm:px-8">
        <div className="flex flex-col justify-center items-center">
           
            <Image
                        src="/logo.png" 
                        width={750} 
                        height={800}
                        alt="Float UI logo"
                    />
                    <h1 className="text-white text-center">This page is under construction come back on the offical launch date November 12th!</h1>
        </div>
          <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <Link href="/" className="px-10 py-3.5 w-full bg-[#DAA545] text-white text-center rounded-md shadow-md block sm:w-auto">
                Return to Home
            </Link>
           
        </div>
        
    </div>
            </div>
  )
}

export default underconstruction