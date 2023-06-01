import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/styled";
import { ICONS } from "../../constants/icons";

const Styled = {
  Wrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    padding: 16px;
    width: 100%;
    margin-right: 20px;
    width: 100%;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 16px;
    text-decoration: none;
    color: ${COLORS.TEXT};
  `,
  Img: styled.img`
    width: 24px;
    height: 24px;
    padding-right: 7px;
  `,
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");

  useEffect(() => {
    convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  const convertCurrency = () => {
    // Fetch exchange rate from an API using fromCurrency and toCurrency
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const rate = data.rates[toCurrency];
        const convertedValue = (amount * rate).toFixed(2);
        setConvertedAmount(convertedValue);
      })
      .catch((error) => console.log("Error:", error));
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleToggleCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Img alt="" src={ICONS.CONVERTER} />
        <b>Currency converter</b>
      </Styled.Header>
      <div>
        <div>
          <h2>Currency Converter</h2>
          <div>
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <div>
            <label htmlFor="fromCurrency">From:</label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              {/* Add more currency options here */}
            </select>
          </div>
          <div>
            <label htmlFor="toCurrency">To:</label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={handleToCurrencyChange}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              {/* Add more currency options here */}
            </select>
          </div>
          <div>
            <button onClick={handleToggleCurrencies}>Toggle</button>
          </div>
          <div>
            <h3>Converted Amount: {convertedAmount}</h3>
          </div>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default CurrencyConverter;
