import React from 'react'

const AboutUs_Home_Banner = () => {
  return (
    <>
      <div>
        <section class="w-full flex bg-gray-50 dark:bg-gray-900">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div class="text-center space-y-5">
              <h2 class="text-base font-semibold text-green-400 dark:text-pink-300 tracking-wide uppercase">Unlock Your Potential
                Today</h2>
              <div class="inline-flex items-end justify-center w-full text-center mx-auto">
                <img src="https://cdn.devdojo.com/tails/avatars/024.jpg" class="absolute transform translate-x-24 ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white" />
                <img src="https://cdn.devdojo.com/tails/avatars/012.jpg" class="absolute transform -translate-x-24 -ml-6 rounded-full w-12 h-12 md:w-16 md:h-16 border-4 border-white" />
                <img src="https://cdn.devdojo.com/tails/avatars/029.jpg" class="absolute transform -translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white" />
                <img src="https://cdn.devdojo.com/tails/avatars/005.jpg" class="absolute transform translate-x-16 rounded-full w-16 h-16 md:w-20 md:h-20 border-4 border-white" />
                <img src="https://cdn.devdojo.com/tails/avatars/032.jpg" class="rounded-full w-20 h-20 md:w-24 md:h-24 border-4 border-white relative" />
              </div>
              <p
                class="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Your Companion for Seamless Money Transaction.
                <span class="px-2 py-1 relative inline-block"><svg class="stroke-current bottom-0 absolute text-blue-300 -translate-x-2" viewBox="0 0 410 18" xmlns="http://www.w3.org/2000/svg"><path d="M6 6.4c16.8 16.8 380.8-11.2 397.6 5.602" stroke-width="12" fill="none" fill-rule="evenodd" stroke-linecap="round"></path></svg><span class="relative">A Financial Revulotion</span></span>
              </p>
              <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor incididunt ut labore Lorem ipsum dolor sit amet,</p>
              <a href="#"
                class="inline-block px-6 py-3 mt-8 bg-green-400 dark:bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-600">
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default AboutUs_Home_Banner
