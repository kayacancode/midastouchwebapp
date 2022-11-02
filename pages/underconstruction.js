import React from 'react'

const underconstruction = () => {
  return (
    <div className="bg-black h-screen">
    <div className=" bg-black mx-auto max-w-screen-xl  px-4 sm:px-8">
        <div className="flex flex-col justify-center items-center">
           
            <Image
                        src="/logo.png" 
                        width={550} 
                        height={42}
                        alt="Float UI logo"
                    />
                    <h1 className="text-white text-center">This page is under construction come back on the offical launch date November 12th!</h1>
        </div>
          <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <a href="/" className="px-10 py-3.5 w-full bg-[#DAA545] text-white text-center rounded-md shadow-md block sm:w-auto">
                Return to Home
            </a>
           
        </div>
        
    </div>
            </div>
  )
}

export default underconstruction