import { useState,useEffect } from "react";

function useCurrencyinfo(currency) {

  const [currencyinfo, setCurrencyinfo] = useState({});
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrencyinfo(data[currency]);
      });
  }, [currency]);

  console.log(currencyinfo);
  return currencyinfo;
  
}   

export default useCurrencyinfo;