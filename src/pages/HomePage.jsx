import React from "react";
import Menu from "../components/Menu";
import MainContent from "../components/MainContent";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    margin: 20px 80px;
    @media (min-width: 1900px) {
      margin: 20px 220px;
    }
    @media (max-width: 850px) {
      margin: 20px 20px;
    }
    @media (max-width: 520px) {
      margin: 10px 0px;
    }
  `,
  Menu: styled.div``,
};
const HomePage = () => {
  return (
    <Styled.Wrapper>
      <Styled.Menu>
        <Menu />
      </Styled.Menu>
      <MainContent />
    </Styled.Wrapper>
  );
};

export default HomePage;
