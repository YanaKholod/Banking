import React from "react";
import { CharityIcon } from "../constants/icons";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import {
  StyleHeader,
  StyleMainImg,
  StyleTitle,
  StyleWrapper,
} from "../utils/generalStyled";

const Styled = {};

const Charity = () => {
  return (
    <StyleWrapper>
      <StyleHeader>
        <StyleMainImg>
          <CharityIcon width="48px" height="48px" />
        </StyleMainImg>
        <div>
          <StyleTitle>Charity</StyleTitle>
        </div>
      </StyleHeader>
      <div>Some info</div>
    </StyleWrapper>
  );
};

export default Charity;
