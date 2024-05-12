import React from 'react'
import GlobalButton from '../../../../Components/ShareableComponents/GlobalComponents/GlobalButton/GlobalButton'

const Contact_Us_Home_Banner = () => {
  return (
    <>
      <section class="w-full flex bg-gradient-to-b from-[#cdffdb] to-transparent ">
        <div class="max-w-7xl mx-auto px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="text-center space-y-5 p-10  h-auto">
            <h2 className="text-green-400 font-semibold">Contact Us</h2>
            <p class="mt-1 text-4xl font-extrabold text-gray-900  sm:text-5xl sm:tracking-tight lg:text-6xl">
              Money Transfer Made Easy.
            </p>
            <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-600 ">
              Experience the seamless convenience of transferring money
              effortlessly with our intuitive platform, ensuring swift
              transactions at your fingertips.
            </p>
            {/* <a href="#Us"
              class="inline-block px-6 py-3 mt-8 bg-green-400 dark:bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-600">
              Contact Us
            </a> */}
            <div className="flex justify-center">
              <div>
                {" "}
                <a href="#Us">
                  {" "}
                  <GlobalButton
                    text="Contact Us"
                    bgColor="bg-green-500"
                    hoverBgColor="red-500"
                    textColor="white"
                    hoverTextColor="black"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact_Us_Home_Banner
