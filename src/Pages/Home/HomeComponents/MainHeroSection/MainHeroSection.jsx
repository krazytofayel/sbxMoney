import React from 'react'
import Footer from '../../../../Components/ShareableComponents/Footer/Footer'
import GlobalButton from '../../../../Components/ShareableComponents/GlobalComponents/GlobalButton/GlobalButton'
import CountryFlag from 'react-country-flag';
import { motion } from 'framer-motion'
const countries = [
  { code: 'US', name: 'Usa' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'Uk' },
    { code: 'BD', name: 'Bangladesh' },
  // Add more countries as needed
];
const MainHeroSection = () => {
  const handleButtonClick = () => {
    // Handle button click logic here background: #EFF4F4;

  };


  return (
    <>
      <section className='bg-[#CDFFDB] p-2'>
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2  gap-10 items-center justify-items-end p-5">

          <motion.div initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }} >
            <div className="">
              <div className="text-center md:text-left">

                <p className="font-bold text-xl ">
                  Fast And Hassle
                  <span className="text-green-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current transition-all duration-1000 animate-pulse">
                    <span className="inline-block animate-bounce">
                      Free!
                    </span>
                    <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
                    </svg>
                  </span>
                </p>



              </div>
              <h1 className="text-black text-center md:text-start lg:text-start text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mt-5 mb-4 max-w-[500px] drop-shadow-2xl shadow-black">
                The Secure,
                easiest and fastest
                way to send money.
              </h1>

              <p className="leading-relaxed p-2 md:p-0 text-center md:text-start lg:text-start  xl:text-[20px] text-lg text-gray-500 mb-4 font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
              </p>

            </div>
            <div className='flex  flex-wrap  gap-2 '>
              <div>
                <GlobalButton onClick={handleButtonClick}
                  text="Register Now"
                  bgColor="bg-green-500"
                  hoverBgColor="bg-red-500"
                  textColor="white"
                  hoverTextColor="black" />
              </div>
              <div>
                <GlobalButton onClick={handleButtonClick}
                  text="How it's Work"
                  bgColor="bg-green-500"
                  hoverBgColor="bg-red-500"
                  textColor="white"
                  hoverTextColor="black" />
              </div>


            </div>


          </motion.div>
          <motion.div initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }} className="">
            <div className="hero-currency-convert relative  ">
              {/* form */}
              <div className=" p-6 bg-white shadow-xl sm:w-10/12 md:w-10/12 ml-7  md:ml-7 lg:ml-10 xl:ml-12 absolute   mt-20 md:mt-16 rounded-md ">
                <h1 className="text-xl font-semibold">Personal Details </h1>
                <form className="mt-6">

                  <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Recipient</label>
                  <input id="email" type="email" name="email" placeholder="enter your email address" autoComplete="email" className="block w-full p-2 mt-2 text-black  bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner rounded" required />
                  <label htmlFor="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">You Send</label>

                  <div className="relative flex items-center border border-gray-300 rounded-md mt-2">
                    <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-gray-300">
                      &#36;
                    </span>
                    <input type="number" className="w-full py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 placeholder-opacity-50 focus:outline-none" placeholder="Enter amount " />
                    <select className="absolute inset-y-0 right-0  bg-gray-300 text-gray-700 appearance-none border-none focus:outline-none ">
                      {countries.map(country => (
                        <option key={country.code} value={country.code}>
                          {/* <CountryFlag countryCode={country.code} /> {country.name} */}
                        </option>
                      ))}
                    </select>
                  </div>


                  <label htmlFor="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Recipient get</label>
                  <div className="relative flex items-center border border-gray-300 rounded-md mt-2">
                    <span className="absolute inset-y-0 left-0 flex items-center p-3 bg-gray-300">
                      &#36;
                    </span>
                    <input type="number" className="w-full py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 placeholder-opacity-50 focus:outline-none" placeholder="Enter amount " />
                    <select className="absolute inset-y-0 right-0 px-2  bg-gray-300 text-gray-700 appearance-none border-none focus:outline-none ">
                      {countries.map(country => (
                        <option key={country.code} value={country.code}>
                          <CountryFlag countryCode={country.code} /> {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p className='border-b text-center p-2 text-gray-400 font-medium text-sm'>The current exchange rate is 1usd=1000</p>
                  </div>
                  <div className='flex justify-between mb-2 mt-2'>
                    <div><p className='font-medium text-gray-700 text-sm'>Total fees</p></div>
                    <div className='font-bold text-sm text-gray-700'><span >700</span> USD</div>

                  </div>
                  <div className='flex justify-between'>
                    <div><p className='font-medium text-black'>Total to Pay</p></div>
                    <div className='font-bold'><span >1000</span> USD</div>

                  </div>
                  <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-500 rounded shadow-lg focus:outline-none hover:bg-green-500  hover:text-black">
                    Send Money
                  </button>
                  <p className="flex justify-between  mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
                </form>
              </div>

            </div>
            <div className="" >
                <img
                src="/src/assets/Vector1.png"
                alt="Image"
                className='h-[540px]  relative -z-10 mt-20 mb-20  '
                style={{ clipPath: 'polygon(0 65%, 100% 33%, 100% 100%, 0% 100%)' }}
              />
            </div>
          {/* <div className="'h-[540px]  relative -z-10 mt-20 mb-20 bg-black" style={{ clipPath: 'polygon(0 65%, 100% 33%, 100% 100%, 0% 100%)' }}></div> */}
          </motion.div>


        </div>




      </section>



    </>
  )
}

export default MainHeroSection
