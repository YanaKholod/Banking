import React from "react";
import styled from "styled-components";
import CardsTransfer from "./ReplenishmentWidgets/CardsTransfer";

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
    </Styled.Wrapper>
  );
};

export default ReplenishmentWidgets;
