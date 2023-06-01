import React from "react";
import styled from "styled-components";
import Payments from "./ReplenishmentWidgets/Payments";
import WhatNewInfo from "./WhatNewInfo";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    margin-bottom: 16px;
  `,
};

const WhatNewWidget = () => {
  return (
    <Styled.Wrapper>
      <Payments />
      <WhatNewInfo />
    </Styled.Wrapper>
  );
};

export default WhatNewWidget;
