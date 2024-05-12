import React from 'react'
import { motion } from 'framer-motion'
import vectorup from '../../../../../public/VectorUp.png'
import vectordown from '../../../../../public/Vectordown.png'
const Take_It_Easy_Steper = () => {
  return (
    <>
      <section className="bg-[#f6f8f7] py-12 sm:py-16 lg:py-20 xl:py-24" id='takeaseasy'>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative container flex flex-col justify-between items-center  px-4 mx-auto md:flex-row sm:px-6 ">
            <div className="flex justify-between  md:mb-16 py-5 max-w-2xl p-8 ">
              <motion.div initial={{ x: "-100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1 }} className="text-center md:text-left">

                <p className="font-bold text-2xl md:text-4xl">
                  Take it
                 <span className="text-green-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current transition-all duration-1000 animate-pulse">
                    <span className="inline-block animate-bounce">
                      Easy!
                    </span>
                    <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                    </svg>
                  </span>

                </p>

              </motion.div>
            </div>
            <motion.div initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }} className="md:text-left lg:-mt-14">
              <h2 className="text-2xl font-extrabold leading-10 tracking-tight text-[#2DBE61] ">How it works?</h2>
              <p className="max-w-md  mx-auto  text-base text-gray-600 font-medium sm:text-lg md:text-xl md:max-w-3xl">
                We craft a tailored solution that addresses your specific challenges.
              </p>

            </motion.div>
          </div>

          <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] lg:hidden top-16 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"></span>
              <div className="absolute  hidden lg:inline-block   lg:right-0 lg:left-auto lg:h-px">
                <img src={vectorup} alt="Image Alt Text" />
              </div>
              <div
                className="inline-flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-green-400 group-hover:bg-green-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-10 md:w-10 text-gray-600 group-hover:text-white">
                  <path
                    d="M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.6569 16.9706 22 12 22C7.02944 22 3 20.6569 3 19V5"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3
                  className="text-xl font-bold text-green-500 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Register for Free
                </h3>
                <h4 className="mt-2 text-base text-gray-700">Use your own Notion databases or duplicate ours.</h4>
              </div>
            </li>




            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] lg:hidden top-16 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"></span>
              <div className="absolute  hidden lg:inline-block top-5  lg:right-0 lg:left-auto lg:h-px">
                <img src={vectordown} alt="Image Alt Text" />
              </div>
              <div
                className="inline-flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-green-400 group-hover:bg-green-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-10 md:w-10 text-gray-600 group-hover:text-white">
                  <path
                    d="M2 3L2 21M22 3V21M11.8 20H12.2C13.8802 20 14.7202 20 15.362 19.673C15.9265 19.3854 16.3854 18.9265 16.673 18.362C17 17.7202 17 16.8802 17 15.2V8.8C17 7.11984 17 6.27976 16.673 5.63803C16.3854 5.07354 15.9265 4.6146 15.362 4.32698C14.7202 4 13.8802 4 12.2 4H11.8C10.1198 4 9.27976 4 8.63803 4.32698C8.07354 4.6146 7.6146 5.07354 7.32698 5.63803C7 6.27976 7 7.11984 7 8.8V15.2C7 16.8802 7 17.7202 7.32698 18.362C7.6146 18.9265 8.07354 19.3854 8.63803 19.673C9.27976 20 10.1198 20 11.8 20Z"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3
                  className="text-xl font-bold text-green-500 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Set up Your Transfer
                </h3>
                <h4 className="mt-2 text-base text-gray-700">Map your Notion fields with Feather fields.</h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <span
                className="absolute left-[18px] lg:hidden top-16 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                aria-hidden="true"></span>
              <div className="absolute  hidden lg:inline-block   lg:right-0 lg:left-auto lg:h-px">
                <img src={vectorup} alt="Image Alt Text" />
              </div>
              <div
                className="inline-flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-green-400 group-hover:bg-green-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-10 md:w-10 text-gray-600 group-hover:text-white">
                  <path
                    d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3
                  className="text-xl font-bold text-green-500 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  Make Payment
                </h3>
                <h4 className="mt-2 text-base text-gray-700">Choose a domain or a subdomain for your blog.</h4>
              </div>
            </li>
            <li className="flex-start group relative flex lg:flex-col">
              <div
                className="inline-flex h-10 w-10 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-green-400 group-hover:bg-green-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-10 md:w-10 text-gray-600 group-hover:text-white">
                  <path
                    d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-10">
                <h3
                  className="text-xl font-bold text-green-500 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                  You’re All Done
                </h3>
                <h4 className="mt-2 text-base text-gray-700">That's it. You will get back a professional blog.</h4>
              </div>
            </li>
          </ul>
        </div>
      </section>


    </>
  )
}

export default Take_It_Easy_Steper
