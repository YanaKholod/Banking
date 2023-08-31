import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `,
};

const CompanyFullView = () => {
  return <Styled.Wrapper>CompanyFullView</Styled.Wrapper>;
};

export default CompanyFullView;
