import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/styled";
import { ConverterIcon } from "../../constants/icons";

const Styled = {
  Wrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    padding: 16px;
    width: 100%;
    width: 100%;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 16px;
    text-decoration: none;
    color: ${COLORS.TEXT};
    div {
      padding-right: 7px;
    }
  `,
  Input: styled.input`
    padding: 8px 30px 8px 8px;
    width: 100%;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    transition-duration: 450ms;
    color: rgba(255, 255, 255, 0.87);
    border-style: none;
    border-width: 0px;
    border-radius: 0px;
    background: transparent;
    margin: 0px;
    display: block;
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 1px solid ${COLORS.HOVER};
    margin-left: 5px;
    :hover {
      border-bottom: 3px solid ${COLORS.HOVER};
    }
    :focus {
      border-bottom: 3px solid ${COLORS.ACCENT};
    }
  `,
  Select: styled.select`
    padding: 5px;
    border: none;
    background-color: ${COLORS.MENU_BACKGROUND};
    color: rgba(255, 255, 255, 0.87);
  `,
  LineWrapper: styled.div`
    display: flex;
    align-items: center;
  `,
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: ${COLORS.HOVER};
    border-style: none;
    border-width: 0px;
    border-color: rgb(77, 77, 77);
    margin: 15px 5px;
  `,
};

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState("");

  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    UAH: 36.5,
  };

  const convertCurrency = () => {
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const convertedValue = (amount * rate).toFixed(2);
    setConvertedAmount(convertedValue);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setConvertedAmount(
      value !== ""
        ? (
            value *
            (exchangeRates[toCurrency] / exchangeRates[fromCurrency])
          ).toFixed(2)
        : ""
    );
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    convertCurrency();
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
    convertCurrency();
  };

  const handleToggleCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    convertCurrency();
  };

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <div>
          <ConverterIcon width="24px" height="24px" />
        </div>
        <b>Currency converter</b>
      </Styled.Header>
      <div>
        <Styled.LineWrapper>
          <Styled.Select
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            <option value="USD">🇺🇸 USD $</option>
            <option value="EUR">🇪🇺 EUR €</option>
            <option value="UAH"> 🇺🇦 UAH ₴</option>
          </Styled.Select>
          <Styled.Input
            type="text"
            value={amount}
            onChange={handleAmountChange}
          />
        </Styled.LineWrapper>
        <div>
          <Styled.Button onClick={handleToggleCurrencies}>
            <svg
              height="24px"
              width="24px"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <path d="M0 0h24v24H0z"></path>
                <path
                  d="M11 17.01L15 21l4-3.99h-3V10h-2v7.01h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"
                  fill="rgba(255, 255, 255, 0.87)"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </Styled.Button>
        </div>
        <Styled.LineWrapper>
          <Styled.Select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="UAH">🇺🇦 UAH ₴</option>
            <option value="USD">🇺🇸 USD $</option>
            <option value="EUR">🇪🇺 EUR €</option>
          </Styled.Select>
          <Styled.Input
            type="text"
            onChange={handleAmountChange}
            value={convertedAmount}
          />
        </Styled.LineWrapper>
      </div>
    </Styled.Wrapper>
  );
};

export default CurrencyConverter;
