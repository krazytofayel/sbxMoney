import React from 'react'
import GradientButton from '../HelpComponents/GradientButton/GradientButton'
import { FiPhoneCall } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const HelpDetail = () => {
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
            className="mx-auto mt-8 relative bg-[#EFF4F4] min-w-sm max-w-2xl flex flex-col sm:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-xl focus-within:border-gray-300"
            htmlFor="search-bar">

            <input id="search-bar" placeholder="your keyword here" name="q"
              className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" required="" />
            <button type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#2DBE61]  text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
              <div className="flex items-center transition-all opacity-1">
                <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
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


        </section>
      </div>
      <section>
        <div className='container mx-auto'>
          <div className=''>  <h2 className='text-2xl font-semibold mb-2'>How can I contact with customer support ?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <h2 className='text-xl font-semibold mb-2'>How can I contact with customer support ?</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default HelpDetail
