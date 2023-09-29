import React from "react";
import styled from "styled-components";
import CurrencyConverter from "./CreditsAndConverter/CurrencyConverter";
const Styled = {
  Wrapper: styled.div`
    display: flex;
    margin-bottom: 16px;
    @media (max-width: 520px) {
      width: 98%;
      margin-bottom: 10px;
    }
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
