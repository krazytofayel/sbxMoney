import React, { useEffect, useState } from "react";
import CountryFlag from "react-country-flag";
import { motion } from "framer-motion";
import currencies from "../../../../../../public/commonCurrency.json";
import CurrencyInput from "react-currency-input-field";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const Money_Conversion_Form = () => {
  const cuntriesOptions = Object.keys(currencies).map((currency, index) => ({
    value: currencies[currency].code,
    label: `${currencies[currency].code} - ${currencies[currency].name}`,
    name: currencies[currency].name,
    symbol: currencies[currency].symbol,
    index: index,
  }));

  const initialCurrencyFrom =JSON.parse(localStorage.getItem("selectedCurrencyFrom")) || cuntriesOptions[8];
  const initialCurrencyTo =JSON.parse(localStorage.getItem("selectedCurrencyTo")) ||cuntriesOptions[11];
  const [totalPay, setTotalPay] = useState( localStorage.getItem("totalPay") || 0);
  const [exchangeRateAmount, setExchangeRateAmount] = useState(localStorage.getItem("exchangeRateAmount") || 0);
  const [selectAmount, setSelectAmount] = useState( localStorage.getItem("selectAmount") || 1);
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] =useState(initialCurrencyFrom);
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState(initialCurrencyTo);
  const [exchangeRates, setExchangeRates] = useState({});
  const URL = `https://v6.exchangerate-api.com/v6/e6275e44ecb29da0333681c6/latest/USD`;

  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          setExchangeRates(data.conversion_rates);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleConvert = () => {
    if (exchangeRates && selectedCurrencyFrom && selectedCurrencyTo) {
      const fromRate = exchangeRates[selectedCurrencyFrom.value];
      const toRate = exchangeRates[selectedCurrencyTo.value];
      if (fromRate && toRate) {
        const conversionRate = toRate / fromRate;
        const convertedAmount = selectAmount * conversionRate;
        setTotalPay(convertedAmount.toFixed(2));
        setExchangeRateAmount(conversionRate.toFixed(4));

        // Save to localStorage
        localStorage.setItem("totalPay", convertedAmount.toFixed(2));
        localStorage.setItem("exchangeRateAmount", conversionRate.toFixed(4));
      }
    }
  };

  const handleSelectTo = (_eTo) => {
    setSelectedCurrencyTo(_eTo);
    localStorage.setItem("selectedCurrencyTo", JSON.stringify(_eTo));
  };

  const handleSelectFrom = (_eFrom) => {
    setSelectedCurrencyFrom(_eFrom);
    localStorage.setItem("selectedCurrencyFrom", JSON.stringify(_eFrom));
  };

  const handleAmountChange = (value) => {
    setSelectAmount(value);
    localStorage.setItem("selectAmount", value);
  };

  const handleClose = () => {
    // Log form data to the console
    console.log({
      selectedCurrencyFrom,
      selectedCurrencyTo,
      selectAmount,
      exchangeRateAmount,
      totalPay,
    });
  };

  useEffect(() => {
    if (selectedCurrencyFrom && selectedCurrencyTo) {
      handleConvert();
    }
  }, [selectedCurrencyTo, selectedCurrencyFrom]);

  return (
    <div>
      <div className="bg-white rounded p-2">
        <h1>Currency Converter</h1>

        <form className="mt-2" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 justify-between md:gap-6 mt-2">
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select your country (From)
              </label>
              <Select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full"
                onChange={handleSelectFrom}
                value={selectedCurrencyFrom}
                options={cuntriesOptions}
              />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                To
              </label>
              <Select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
                onChange={handleSelectTo}
                value={selectedCurrencyTo}
                options={cuntriesOptions}
              />
            </div>
          </div>

          <label
            htmlFor="amount"
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Amount
          </label>

          <div className="grid md:grid-cols-3 justify-between md:gap-6 mt-2">
            <div className="mb-5">
              <CurrencyInput
                type="text"
                id="amount"
                name="input-name"
                onValueChange={handleAmountChange}
                value={selectAmount}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="amount"
              />
            </div>
            <div className="relative z-0 w-full group">
              <button
                onClick={handleConvert}
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
                  The current exchange rate is 1 {selectedCurrencyFrom?.value} =
                  <span className="text-[#2DBE61] font-bold transition-all duration-1000 animate-pulse">
                    {exchangeRateAmount}
                    <span className="ml-1">({selectedCurrencyTo?.symbol})</span>
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
            type="submit"
            onClick={handleClose}
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
  );
};

export default Money_Conversion_Form;
