// useCurrencyConverter.js
import { useState, useEffect } from "react";

const useCurrencyConverter = (
  initialCurrencyFrom,
  initialCurrencyTo,
  initialTotalPay = 0,
  initialExchangeRateAmount = 1,
  initialSelectAmount = 1,
  initialExchangeRates = {}
) => {
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] =
    useState(initialCurrencyFrom);
  const [selectedCurrencyTo, setSelectedCurrencyTo] =
    useState(initialCurrencyTo);
  const [totalPay, setTotalPay] = useState(initialTotalPay);
  const [exchangeRateAmount, setExchangeRateAmount] = useState(
    initialExchangeRateAmount
  );
  const [selectAmount, setSelectAmount] = useState(initialSelectAmount);
  const [exchangeRates, setExchangeRates] = useState(initialExchangeRates);

  //const URL = `https://v6.exchangerate-api.com/v6/ 90d4143fc7431ae39d52bd1d/latest/USD`;
  const URL = `https://v6.exchangerate-api.com/v6/631dba37764f6db114127eb1/latest/USD`;
 

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
      }
    }
  };

  useEffect(() => {
    if (selectedCurrencyFrom && selectedCurrencyTo) {
      handleConvert();
    }
  }, [selectedCurrencyTo, selectedCurrencyFrom]);

  return {
    selectedCurrencyFrom,
    setSelectedCurrencyFrom,
    selectedCurrencyTo,
    setSelectedCurrencyTo,
    totalPay,
    setTotalPay,
    exchangeRateAmount,
    setExchangeRateAmount,
    selectAmount,
    setSelectAmount,
    exchangeRates,
    setExchangeRates,
    handleConvert,
  };
};

export default useCurrencyConverter;
