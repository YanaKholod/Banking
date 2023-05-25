import React from "react";
import Menu from "../components/Menu";
import MainContent from "../components/MainContent";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 15px;
    height: 100vh;
  `,
  Menu: styled.div`
    width: 100%;
  `,
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
