import React from "react";
import styled from "styled-components";
import WhatNewInfo from "./WhatNewInfo";
import PaymentsWidget from "./ReplenishmentWidgets/PaymentsWidget";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    margin-bottom: 16px;
  `,
};

const WhatNewWidget = () => {
  return (
    <Styled.Wrapper>
      <PaymentsWidget />
      <WhatNewInfo />
    </Styled.Wrapper>
  );
};

export default WhatNewWidget;
