import React from "react";
import Menu from "../components/Menu";
import MainContent from "../components/MainContent";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    margin: 20px 80px;
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
