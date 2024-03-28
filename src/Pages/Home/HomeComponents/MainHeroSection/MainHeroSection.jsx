import React, { useEffect, useState } from 'react'
import Footer from '../../../../Components/ShareableComponents/Footer/Footer'
import GlobalButton from '../../../../Components/ShareableComponents/GlobalComponents/GlobalButton/GlobalButton'
import CountryFlag from 'react-country-flag';
import { motion } from 'framer-motion'
import vector from '../../../../../public/Vector1.png'
import currencies from '../../../../../public/commonCurrency.json'
import CurrencyInput from 'react-currency-input-field'
import Select from 'react-select'

const MainHeroSection = () => {

  const handleButtonClick = (event) => {
    
     event.preventDefault(); // Prevent default form submission behavior

  // Call handleConvert to calculate the total pay amount
  handleConvert();

  };
  //console.log(currencies)
  const [totalPay, setTotalPay] = useState(0); // State to store the total pay amount




 
  const [exchangeRateAmount, setExchangeRateAmount] = useState(0);

  const [selectAmount, setSelectAmount] = useState(1);

  const URL = `https://v6.exchangerate-api.com/v6/e6275e44ecb29da0333681c6/latest/USD`;
  const handleConvert = () => {


   

    fetch(URL)
      .then(response => response.json())
      .then(data => {
       
            if (data.result === "success") {
                    console.log(data);
                    //var conversionRate = data.conversion_rates[1]
                    //console.log(conversionRate)
                   // console.log(Amount)
                     const conversionRate = data.conversion_rates[selectedCurrencyTo.value]; // Retrieve the exchange rate for the selected currency
        const convertedAmount = selectAmount * conversionRate; // Calculate the converted amount using the fetched exchange rate
         setTotalPay(convertedAmount.toFixed(2));
         setExchangeRateAmount(conversionRate)
        console.log(`Converted amount: ${convertedAmount}`);
                  
                   
                }

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });



  }


  // Function to handle the calculation when the "Calculate" button is clicked
const handleCalculate = (event) => {
  event.preventDefault(); // Prevent form submission
  const amountWithCommas = document.getElementById('amount').value; // Get the amount value from the input field
  const amount = parseFloat(amountWithCommas.replace(/,/g, '')); // Remove commas from the input value
  const exchangeRate = 109;
  const calculatedTotal = amount * exchangeRate; // Calculate the total pay amount using the fetched exchange rate
  setTotalPay(calculatedTotal.toFixed(2)); // Update the state with the calculated total pay amount
};


  const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState("$");

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'US', label: 'USDDD' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  let cuntriesOptions = [];
  Object.keys(currencies).map((currency, index) => {
    cuntriesOptions.push({
      value: currencies[currency].code,
      label: `${currencies[currency].code} - ${currencies[currency].name}`,
      name: currencies[currency].name,
      symbol: currencies[currency].symbol,
      index: index
    })
  });
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState(cuntriesOptions[8]);
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState(cuntriesOptions[11]);

  useEffect(() => {

    handleConvert();

  }, []);
  const handleSelectTo = (_eTo) => {
    setSelectedCurrencyTo(_eTo)
  }

  const handleSelectFrom = (_eFrom) => {
    setSelectedCurrencySymbol(_eFrom.symbol)
    setSelectedCurrencyFrom(_eFrom)
  }

  return (
    <>
      <section className='bg-[#CDFFDB] p-2'>
        <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-2  gap-10 items-center justify-items-end p-5">

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
               The Secure, Easiest and Fastest Way To Send Money.
              </h1>

              <p className="leading-relaxed p-2 md:p-0 text-center md:text-start lg:text-start  xl:text-[20px] text-lg text-gray-500 mb-4 font-normal">
              Count on SBX Money for giving you the confidence and efficiency to handle Money Transfer transactions. 
              </p>

            </div>
            <div className='flex  flex-wrap  gap-2 '>
              <div>
                <GlobalButton onClick={handleButtonClick}
                  text="Register Now"
                  bgColor="bg-green-500"
                  hoverBgColor="bg-red-500"
                  textColor="white"
                  hoverTextColor="black" targetSectionId='signup' />
              </div>
              <div>
                <GlobalButton onClick={handleButtonClick}
                  text="How it's Work"
                  bgColor="bg-green-500"
                  hoverBgColor="bg-red-500"
                  textColor="white"
                  hoverTextColor="black" targetSectionId="takeaseasy" />
 
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


                <form className="mt-6" onSubmit={handleButtonClick}>



                  <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country (From)</label>
                    <Select
                      id="countries"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleSelectFrom}
                      value={selectedCurrencyFrom}
                      options={cuntriesOptions}
                    />



                  </div>
                  <div>
                    <label for="countries" class="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                    <Select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleSelectTo}
                      value={selectedCurrencyTo}
                      options={cuntriesOptions} />


                  </div>


                  <label for="countries" class="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>

                  <div class="grid md:grid-cols-3 justify-between md:gap-6 mt-2">
                    <div class="   mb-5">


                      <CurrencyInput type="text" id="amount"
                        name="input-name"
                        onValueChange={
                          (value, name) => setSelectAmount(value)
                        }
                        value={selectAmount} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='amount' />

                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value=""></option>
                        <option>Bank ET</option>

                        <option>Bank FR</option>
                        <option>Bkash</option>
                        <option>Cash FR</option>
                      </select>
                    </div>
                    <div class="relative z-0 w-full  group">
                      <button onClick={handleConvert} className='border rounded px-3 py-2 bg-green-500 text-white font-semibold w-full'> Calculate</button>
                    </div>
                  </div>
                  <div>
                    <p className='border-b text-center p-2 text-gray-400 font-medium text-sm'>The current exchange rate is 1usd=<span className='text-[#2DBE61]  font-bold transition-all duration-1000 animate-pulse'>{selectedCurrencySymbol}{exchangeRateAmount}</span>  </p>
                  </div> 
                  {/* <div className='flex justify-between mb-2 mt-2'>
                    <div><p className='font-medium text-gray-700 text-sm'>Total fees</p></div>
                    <div className='font-bold text-sm text-gray-700'><span >700</span> USD</div>

                  </div> */}
                  <div className='flex justify-between mt-2'>
                    <div><p className='font-medium text-black'>Total to Pay</p></div>
                    <div className='font-bold'><span >{selectedCurrencySymbol}  {totalPay}</span> USD</div>

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
                src={vector}
                alt="Image"
                className='h-[540px]  relative -z-10 mt-28 mb-20  '
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
