import React from "react";
import Menu from "../components/Menu";
import MainContent from "../components/MainContent";
import styled from "styled-components";

const Styled = {
  Wrapper: styled.div``,
};
const HomePage = () => {
  return (
    <div>
      HomePage
      <Menu />
      <MainContent />
    </div>
  );
};

export default HomePage;
