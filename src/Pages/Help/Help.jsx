import React from 'react'
import GradientButton from './HelpComponents/GradientButton/GradientButton'
import { FiPhoneCall } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import HelpGrid from './HelpComponents/HelpGrid/HelpGrid';
import { FaRegMessage } from "react-icons/fa6";
import { BiMessageAltDetail } from "react-icons/bi";
import Footer from '../../Components/ShareableComponents/Footer/Footer';
const Help = () => {
  return (
    <>
      <div className="p-8">

        <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">
          Hi! How can we help you?
        </h1>
        <p className="text-center mt-6 text-lg font-light text-gray-500">
          The time is now for it to be okay to be great. For being a bright color. For
          standing out.
        </p>
        <form >
          <label
            class="mx-auto mt-8 relative bg-[#EFF4F4] min-w-sm max-w-2xl flex flex-col sm:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-xl focus-within:border-gray-300"
            for="search-bar">

            <input id="search-bar" placeholder="your keyword here" name="q"
              class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" required="" />
            <button type="submit"
              class="w-full sm:w-auto px-6 py-3 bg-[#2DBE61]  text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
              <div class="flex items-center transition-all opacity-1">
                <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                  Search
                </span>
              </div>
            </button>

          </label>
        </form>

        <section>

          <div className='flex flex-col sm:flex-row justify-center gap-5 items-center  mx-auto mt-12'>
            {/* <div
              class="flex rounded mx-auto bg-gradient-to-tr from-violet-400 to-green-400 p-1 shadow-lg">
              <button class="flex-1 font-bold md:text-xl bg-white px-6 py-3 rounded">
                Genarel Support
              </button>
            </div> */}

            <GradientButton
              icon={FiPhoneCall}
              text="User's Guide"
              bgColor="bg-[#EFF4F4]"
              hoverBgColor="bg-[#2DBE61]"
              textColor="text-black"
              hoverTextColor="text-white"
            />
            <GradientButton
              icon={TfiHeadphoneAlt}
              text="User's Guide"
              bgColor="bg-[#EFF4F4]"
              hoverBgColor="bg-[#2DBE61]"
              textColor="text-black"
              hoverTextColor="text-white"
            />
            <GradientButton
              icon={FiPhoneCall}
              text="User's Guide"
              bgColor="bg-[#EFF4F4]"
              hoverBgColor="bg-[#2DBE61]"
              textColor="text-black"
              hoverTextColor="text-white"
            />

          </div>
          {/* <button className='border px-16 py-5 rounded-md bg-[#EFF4F4] hover:bg-[#2DBE61] text-black hover:text-white font-bold  text-center inline-flex gap-2 items-center justify-between shadow-lg focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50'> <FiPhoneCall /> User's Guide</button> */}
          <HelpGrid></HelpGrid>

        </section>
      </div>
      <div class="bg-gray-100 p-4 sm:p-8 md:p-16 mt-20">
        <div class="">
          <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">

            <div className='relative flex justify-center items-center h-full rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5 shadow-xl'>
              <div className='border p-2 shadow-xl rounded-lg h-20 w-20 '><FaRegMessage size={60}/></div>
              <div
                class=" flex h-full w-full flex-col rounded-md   bg-white  hover:border-gray-400 sm:rounded-lg sm:p-5">

                <span class="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                  Technical Question
                </span>
                <span class="text-sm leading-normal text-gray-400 sm:block">
                  Detailed list of best practices to make your APIs secure   <a href='#' className="mt-1 dark:text-white hover:text-blue-600 inline-flex items-center font-semibold text-green-400">

                    click more
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className='relative flex justify-center items-center h-full rounded-md border border-gray-200 bg-white p-2.5 hover:border-gray-400 sm:rounded-lg sm:p-5 shadow-xl'>
              <div className='border p-2 shadow-xl rounded-lg h-20 w-20 '><BiMessageAltDetail size={60} /></div>
              <div
                class=" flex h-full w-full flex-col rounded-md   bg-white  hover:border-gray-400 sm:rounded-lg sm:p-5">

                <span class="text-md mb-0 font-semibold text-gray-900 hover:text-black sm:mb-1.5 sm:text-xl">
                  Technical Question
                </span>
                <span class="text-sm leading-normal text-gray-400 sm:block">
                  Detailed list of best practices to make your APIs secure   <a href='#' className="mt-1 dark:text-white hover:text-blue-600 inline-flex items-center font-semibold text-green-400">

                    click more
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Help
