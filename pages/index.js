import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, react} from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import ImageGrid from '../components/ImageGrid'
import Services from '../components/Services'
import Hero from '../components/Hero'
export default function Home() {
  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
     

  ]
  return (
    
    <div className="  bg-black">
          <Head>
        <title>Midas Touch Event Services: DJs, Photographers, and Event Rental Services in Nashville</title>
          <meta name="description" content="Looking for a DJ for your next event in Nashville? Midas Touch Event Services has you covered! We also offer photography and event rental services." />
          <meta name="description" content="Looking for a DJ, photographer, or event rental service in Nashville? Look no further than Midas Touch Event Services. We offer a wide range of services to make your event a success." />

      </Head>
    <header className="bg-black">

        <Navbar />
    </header>
 <div>
 <div class="relative flex flex-col items-center justify-center min-h-screen bg-[#121212] bg-cover min-w-screen">
    <div class="flex flex-col items-center justify-center p-10 mx-auto lg:flex-row lg:max-w-6xl lg:p-0">
        <div
            class="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:px-0 md:px-10 sm:items-center lg:items-start lg:mb-0">
            <h1
                class="relative z-20 text-5xl font-extrabold leading-none text-[#DAA545] xl:text-6xl sm:text-center lg:text-left">
                Midas Touch Event Services</h1>
            <p class="relative z-20 block mt-6 text-base text-white xl:text-xl sm:text-center lg:text-left">We've
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
</p>
            <div class="relative flex mt-4">
                <a href="#_"
                    class="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-[#DAA545] transition duration-150 ease-in-out bg-white border border-transparent rounded-full shadow hover:bg-[#DAA545] hover:text-white focus:outline-none md:py-4 md:text-lg xl:text-xl md:px-10">
                    Book Today</a>
            
            </div>
        </div>
        <div class="relative w-full px-5  cursor-pointer md:w-2/3 lg:w-1/2 group xl:px-0">
            <div class="absolute top-0 left-0 w-11/12 -mt-20 opacity-50">
             
            </div>
            <div class="relative overflow-hidden  shadow-2xl  group">
              
                <img src="/wedding1.png"
                    class=" w-full h-full"/>
            </div>
        </div>
    </div>
</div>
<ImageGrid />
<Services />
<Hero />
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
        This website was created by <a className = "hover:text-violet-600" href = "https://www.kayacancode.com/">KAYACANCODE</a> .

        <span class="mt-4 block"> &copy; 2022 Midas Touch Event Services</span>
      </p>
    </div>
  </div>
</footer>
</div>
  
   
   
 

</div>
  )
}
