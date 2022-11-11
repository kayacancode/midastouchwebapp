import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, react} from 'react'

const Pastwork = () => {
    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/Aboutus" },
        { title: "Services", path: "/Services" },
        { title: "Past Work", path: "/pastwork" },
        { title: "Book", path: "/Book" },
        { title: "Reviews", path: "https://www.google.com/search?q=midas+touch+event+services&rlz=1C5CHFA_enUS985US985&oq=midas+touch+event+services&aqs=chrome..69i57j69i60l2j69i61.6337j0j4&sourceid=chrome&ie=UTF-8#lrd=0x6dbb6dc48d527f9b:0xa8d384671b565cea,1,,," },
        { title: "Contact Us", path: "/Contactus" }
  
    ]
  return (
    <div className="bg-black">
                      <Head>
        <title>Midas Touch Event Services: DJs, Photographers, and Event Rental Services in Nashville </title>
          <meta name="description" content="Looking for a DJ for your next event in Nashville? Midas Touch Event Services has you covered! We also offer photography and event rental services." />
          <meta name="description" content="Looking for a DJ, photographer, or event rental service in Nashville? Look no further than Midas Touch Event Services. We offer a wide range of services to make your event a success." />

      </Head>
    <header className=" bg-black">
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
      <div class=" pt-10  bg-black  container  grid grid-cols-3 gap-2 mx-auto">
    <div class="w-full ">
              
    <Image
                        src="/event1.png" 
                        width={400} 
                        height={400}
                        alt="Float UI logo"
                    />
    </div>
    <div class="w-full rounded">
    <Image
                        src="/wedding1.png" 
                        width={400} 
                        height={400}
                        alt="Float UI logo"
                    />
    </div>
    <div class="w-full rounded">
    <Image
                        src="/party1.png" 
                        width={400} 
                        height={400}
                        alt="Float UI logo"
                    />
    </div>
    <div class="w-full ">
              
              <Image
                                  src="/event4.png" 
                                  width={400} 
                                  height={400}
                                  alt="Float UI logo"
                              />
              </div>
              <div class="w-full rounded">
              <Image
                                  src="/wedding4.jpg" 
                                  width={400} 
                                  height={400}
                                  alt="Float UI logo"
                              />
              </div>
              <div class="w-full rounded">
              <Image
                                  src="/party4.png" 
                                  width={400} 
                                  height={400}
                                  alt="Float UI logo"
                              />
              </div>
              <div class="w-full ">
              
              <Image
                                  src="/event2.png" 
                                  width={400} 
                                  height={400}
                                  alt="Float UI logo"
                              />
              </div>
              <div class="w-full rounded">
              <Image
                                  src="/wedding2.png" 
                                  width={400} 
                                  height={400}
                                  alt="Float UI logo"
                              />
              </div>
              <div class="w-full rounded">
              <Image
                                  src="/party2.png" 
                                  width={400} 
                                  height={400}
                                  alt="Float UI logo"
                              />
              </div>
              <div class="w-full ">
              
              <Image
                                  src="/event3.png" 
                                  width={400} 
                                  height={400}
                                  alt="Float UI logo"
                              />
              </div>
              <div class="w-full rounded">
              <Image
                                  src="/wedding3.png" 
                                  width={400} 
                                  height={400}
                                  alt="Float UI logo"
                              />
              </div>
              <div class="w-full rounded">
              <Image
                                  src="/party3.png" 
                                  width={400} 
                                  height={400}
                                  alt="Float UI logo"
                              />
              </div>
</div>
<footer aria-label="Site Footer" class=" text-center">
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl space-y-6">
    <div class="flex justify-center space-x-2 text-gray-700">
        <a
          class="text-blue-500 hover:text-blue-500/75"
          href="https://www.facebook.com/mtes615"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="w-5 h-5"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>


        </a>


        <a
          class="text-blue-500 hover:text-blue-500/75"
          href="https://www.instagram.com/midastoucheventservices/"
          target="_blank"
          rel="noreferrer"
          aria-label="Dribbble"
        >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-5 h-5"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

        </a>
      </div>

 

      <p class="mx-auto max-w-lg text-xs text-gray-500">
        This website was created by kayacancode.com .

        <span class="mt-4 block"> &copy; 2022 Midas Touch Event Services</span>
      </p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Pastwork