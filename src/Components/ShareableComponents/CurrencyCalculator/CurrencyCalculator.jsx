import React from "react";
import CurrencyInput from "react-currency-input-field";
import Select from "react-select";

const CurrencyCalculator = ({
  selectedCurrencyFrom,
  selectedCurrencyTo,
  handleSelectFrom,
  handleSelectTo,
  handleConvert,
  selectAmount,
  handleAmountChange,
  totalPay,
  exchangeRateAmount,
  countriesOptions, // Assuming you pass countriesOptions as a prop
}) => {
  return (
    <div className="p-6 bg-white shadow-xl sm:w-10/12 md:w-10/12 ml-7 md:ml-7 lg:ml-10 xl:ml-[50px] absolute mt-20 md:mt-16 rounded-md">
      <h1 className="text-lg font-bold">Currency Conversion</h1>
      <form className="mt-2">
        <div>
          <label
            htmlFor="currencyFrom"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Select Currency (From)
          </label>
          <Select
            id="currencyFrom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full"
            onChange={handleSelectFrom}
            value={selectedCurrencyFrom}
            options={countriesOptions}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="currencyTo"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Convert To
          </label>
          <Select
            id="currencyTo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full"
            onChange={handleSelectTo}
            value={selectedCurrencyTo}
            options={countriesOptions}
          />
        </div>

        <label
          htmlFor="amount"
          className="block mt-4 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Amount
        </label>

        <div className="grid md:grid-cols-3 gap-6 mt-2">
          <div className="col-span-2">
            <CurrencyInput
              id="amount"
              name="amount"
              placeholder="Enter amount"
              allowNegativeValue={false}
              decimalsLimit={2}
              onValueChange={(value) => handleAmountChange(value)}
              value={selectAmount}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleConvert}
          className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Calculate
        </button>
      </form>

      <div className="mt-6">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-400">
          Total Payable:
          <span className="ml-1">
            {selectedCurrencyTo?.symbol} {totalPay}
          </span>
        </p>
        <p className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          Exchange Rate:
          {exchangeRateAmount ? (
            <span className="ml-1">
              1 {selectedCurrencyFrom?.value} = {exchangeRateAmount}{" "}
              {selectedCurrencyTo?.symbol}
            </span>
          ) : (
            <span className="ml-1">Select currencies to view the exchange rate</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default CurrencyCalculator;
