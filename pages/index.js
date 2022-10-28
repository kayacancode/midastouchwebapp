import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, react} from 'react'
export default function Home() {
  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Home", path: "javascript:void(0)" },
      { title: "About Us", path: "javascript:void(0)" },
      { title: "Services", path: "javascript:void(0)" },
      { title: "Past Work", path: "javascript:void(0)" },
      { title: "Book", path: "/Book" },
      { title: "Reviews", path: "javascript:void(0)" },
      { title: "Contact Us", path: "javascript:void(0)" }
  ]
  return (
    
    <div className="bg-black">
    <header className="bg-black">
        <nav className=" bg-black items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 ">
            <div className=" bg-black flex justify-between">
                <a href="javascript:void(0)">
                  
           
                </a>
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
    <section className=" bg-black mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="flex flex-col justify-center items-center">
           
            <img
                        src="/logo.png" 
                        width={550} 
                        height={42}
                        alt="Float UI logo"
                    />
                    <h1 className="text-white">Hello</h1>
        </div>
        {/* <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <a href="javascript:void(0)" className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto">
                Get started
            </a>
            <a href="javascript:void(0)" className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto">
                Try it out
            </a>
        </div> */}
    </section>
</div>
  )
}
