import React from "react";
import Menu from "../components/Menu";
import MainContent from "../components/MainContent";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${COLORS.CONTENT_BACKGROUND};
    color: ${COLORS.TEXT};
  `,
};
const HomePage = () => {
  return (
    <Styled.Wrapper>
      <Menu />
      <MainContent />
    </Styled.Wrapper>
  );
};

export default HomePage;
