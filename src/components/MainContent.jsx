import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CardWidgets from "./CardWidgets";
import ReplenishmentWidgets from "./ReplenishmentWidgets";
import WhatNewWidget from "./WhatNewWidget";
import CreditsConverter from "./CreditsConverter";

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    margin-left: 15px;
  `,
};
const MainContent = () => {
  return (
    <Styled.Wrapper>
      <div>
        IMG DIV
        <img alt=""></img>
      </div>
      <div>
        Services
        <CardWidgets />
        <ReplenishmentWidgets />
        <WhatNewWidget />
        <CreditsConverter />
      </div>
    </Styled.Wrapper>
  );
};

export default MainContent;
