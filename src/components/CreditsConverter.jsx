import React from "react";
import styled from "styled-components";
import CurrencyConverter from "./CreditsAndConverter/CurrencyConverter";
import CreditProducts from "./CreditsAndConverter/CreditProducts";
import { Link } from "react-router-dom";
import { COLORS } from "../constants/styled";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    margin-bottom: 16px;
  `,
};

const CreditsConverter = () => {
  return (
    <Styled.Wrapper>
      <CreditProducts />
      <CurrencyConverter />
    </Styled.Wrapper>
  );
};

export default CreditsConverter;
