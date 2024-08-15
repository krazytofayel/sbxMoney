import React from "react";
import Footer from "../../../../Components/ShareableComponents/Footer/Footer";
import GlobalButton from "../../../../Components/ShareableComponents/GlobalComponents/GlobalButton/GlobalButton";
import { motion } from "framer-motion";
import vector from "../../../../../public/Vector1.png";
import currencies from "../../../../../public/commonCurrency.json";
import CurrencyInput from "react-currency-input-field";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useCurrencyConverter from "../../../../Components/CustomHook/useCurrencyConverter/useCurrencyConverter";

const MainHeroSection = () => {

  

  // converts an object of currency data into an array of options suitable for use in a dropdown menu or a select input,obj.k return an array.then map throw the array and finally return a obj
  const cuntriesOptions = Object.keys(currencies).map((currency, index) => ({
    value: currencies[currency].code,
    label: `${currencies[currency].code} - ${currencies[currency].name}`,
    name: currencies[currency].name,
    symbol: currencies[currency].symbol,
    index: index,
  }));
//this is for showing initial selected currency
  const initialCurrencyFrom = cuntriesOptions.find(option => option.value === 'AUD');
  const initialCurrencyTo = cuntriesOptions.find(option => option.value === 'BDT');

  const {
    selectedCurrencyFrom, setSelectedCurrencyFrom,
    selectedCurrencyTo, setSelectedCurrencyTo,
    totalPay, setTotalPay,
    exchangeRateAmount, setExchangeRateAmount,
    selectAmount, setSelectAmount,
    exchangeRates, handleConvert
  } = useCurrencyConverter(initialCurrencyFrom, initialCurrencyTo);

  const navigate = useNavigate();



  const handleButtonClick = (event) => {
    event.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      navigate("/sendmoney");
    } else {
      navigate("/sign_in");
    }
  };

  const handleCalculate = (event) => {
    event.preventDefault();
    if (selectAmount <= 0) {
      toast.error("Please enter a valid amount greater than zero.");
      return;
    }

    handleConvert();
  };
  return (
    <>
      <ToastContainer />
      <section className="bg-[#CDFFDB] p-2">
        <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-2  gap-10 items-center justify-items-end p-5">
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <div className="">
              <div className="text-center md:text-left">
                <p className="font-bold text-xl ">
                  Fast And Hassle
                  <span className="text-green-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current transition-all duration-1000 animate-pulse">
                    <span className="inline-block animate-bounce">Free!</span>
                    <svg
                      className="absolute -bottom-0.5 w-full max-h-1.5"
                      viewBox="0 0 55 5"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </span>
                </p>
              </div>
              <h1 className="text-black text-center md:text-start lg:text-start text-[24px] xl:text-[40px] lg:text-[36px] md:text-[27px] title-font font-bold mt-5 mb-4 max-w-[500px] drop-shadow-2xl shadow-black">
                The Secure, Easiest and Fastest Way To Send Money.
              </h1>

              <p className="leading-relaxed p-2 md:p-0 text-center md:text-start lg:text-start  xl:text-[20px] text-lg text-gray-600 mb-4 font-medium">
                Count on SBX Money for giving you the confidence and efficiency
                to handle Money Transfer transactions.
              </p>
            </div>
            <div className="flex  lg:flex-wrap  gap-2 ">
              <div>
                <GlobalButton

                  text="Register Now"
                  bgColor="bg-green-500"
                  hoverBgColor="bg-red-500"
                  textColor="white"
                  hoverTextColor="black"
                  targetSectionId="signup"
                />
              </div>
              <div>
                <GlobalButton

                  text="How it's Work"
                  bgColor="bg-green-500"
                  hoverBgColor="bg-red-500"
                  textColor="white"
                  hoverTextColor="black"
                  targetSectionId="takeaseasy"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className=""
          >
            <div className="hero-currency-convert relative  ">
              <div className=" p-6 bg-white shadow-xl sm:w-10/12 md:w-10/12 ml-7  md:ml-7 lg:ml-10 xl:ml-[50px] absolute   mt-20 md:mt-16 rounded-md ">
                <h1 className="text-lg font-bold">Conversion Form </h1>

                <form className="mt-2" onSubmit={handleCalculate}>
                  <div>
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Select your country (From)
                    </label>
                    <Select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full "
                      onChange={setSelectedCurrencyFrom}
                      value={selectedCurrencyFrom}
                      options={cuntriesOptions}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="countries"
                      className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      To
                    </label>
                    <Select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
                      onChange={setSelectedCurrencyTo}
                      value={selectedCurrencyTo}
                      options={cuntriesOptions}
                    />
                  </div>

                  <label
                    htmlFor="countries"
                    className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Amount
                  </label>

                  <div className="grid md:grid-cols-2 justify-between md:gap-6 mt-2">
                    <div className="mb-5">
                      <CurrencyInput
                        type="text"
                        id="amount"
                        name="input-name"
                        onValueChange={(value) => setSelectAmount(value)}
                        value={selectAmount}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="amount"
                      />
                    </div>
                    <div className="relative z-0 w-full group">
                      <button
                        onClick={handleCalculate}
                        className="border rounded-md px-3 py-2 bg-green-500 text-white font-semibold w-full"
                      >
                        Calculate
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="border-b text-center p-2 text-gray-400 font-medium text-md">
                      {exchangeRateAmount ? (
                        <>
                          The current exchange rate is 1{" "}
                          {selectedCurrencyFrom?.value} =
                          <span className="text-[#2DBE61] font-bold transition-all duration-1000 animate-pulse">
                            {exchangeRateAmount}
                            <span className="ml-1">
                              ({selectedCurrencyTo?.symbol})
                            </span>
                          </span>
                        </>
                      ) : (
                        "Select currencies to view the exchange rate"
                      )}
                    </p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div>
                      <p className="font-medium text-black">Total to Pay</p>
                    </div>
                    <div className="font-bold">
                      <span>
                        {selectedCurrencyFrom?.symbol} {totalPay}
                      </span>{" "}
                      {selectedCurrencyTo?.value}
                    </div>
                  </div>

                  <button
                    type="submit" onClick={handleButtonClick}
                    className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-500 rounded shadow-lg focus:outline-none hover:bg-green-500 hover:text-black"
                  >
                    Send Money
                  </button>
                  <p className="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
                    Already registered?
                  </p>
                </form>
              </div>
            </div>
            <div className="">
              <img
                src={vector}
                alt="Image"
                className="h-[540px] relative -z-10 mt-28 mb-20"
                style={{
                  clipPath: "polygon(0 65%, 100% 33%, 100% 100%, 0% 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MainHeroSection;
