import React from 'react'
import GlobalButton from '../../../../Components/ShareableComponents/GlobalComponents/GlobalButton/GlobalButton'

const Contact_Us_Home_Banner = () => {
  return (
    <>
      <section class="w-full flex bg-gradient-to-b from-[#cdffdb] to-transparent dark:bg-gray-900">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="text-center space-y-5 h-auto">
            <h2 className='text-green-400 font-semibold'>Contact Us</h2>
            <p
              class="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Money Transfer Made Easy.

            </p>
            <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">For seamless money transfers and financial management, our dedicated team is here to assist you every step of the way. Reach out below, and our friendly customer service team will promptly address your needs.</p>
            {/* <a href="#Us"
              class="inline-block px-6 py-3 mt-8 bg-green-400 dark:bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-600">
              Contact Us
            </a> */}
            <div className='flex justify-center'>
            <div> <a href="#Us">  <GlobalButton
                  text="Contact Us"
                  bgColor="bg-green-500"
                  hoverBgColor="red-500"
                  textColor="white"
                  hoverTextColor="black" /></a>
                  
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact_Us_Home_Banner
