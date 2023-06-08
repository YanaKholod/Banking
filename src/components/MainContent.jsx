import React from "react";
import styled from "styled-components";
import CardWidgets from "./CardWidgets";
import ReplenishmentWidgets from "./ReplenishmentWidgets";
import WhatNewWidget from "./WhatNewWidget";
import CreditsConverter from "./CreditsConverter";
import MainPageCarousel from "./Carousel/MainPageCarousel";

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
        <MainPageCarousel />
      </div>
      <div>
        <CardWidgets />
        <ReplenishmentWidgets />
        <WhatNewWidget />
        <CreditsConverter />
      </div>
    </Styled.Wrapper>
  );
};

export default MainContent;
