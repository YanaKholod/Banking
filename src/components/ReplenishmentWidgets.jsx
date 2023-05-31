import React from "react";
import styled from "styled-components";
import CardsTransfer from "./ReplenishmentWidgets/CardsTransfer";
import MobileRenewal from "./ReplenishmentWidgets/MobileRenewal";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    margin-bottom: 16px;
  `,
};

const ReplenishmentWidgets = () => {
  return (
    <Styled.Wrapper>
      <CardsTransfer />
      <MobileRenewal />
    </Styled.Wrapper>
  );
};

export default ReplenishmentWidgets;
