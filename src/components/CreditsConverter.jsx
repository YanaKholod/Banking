import React from "react";
import styled from "styled-components";
import CurrencyConverter from "./CreditsAndConverter/CurrencyConverter";
import CreditProducts from "./CreditsAndConverter/CreditProducts";
const Styled = {
  Wrapper: styled.div`
    display: flex;
    margin-bottom: 16px;
  `,
};

const CreditsConverter = () => {
  return (
    <Styled.Wrapper>
      <CurrencyConverter />
    </Styled.Wrapper>
  );
};

export default CreditsConverter;
