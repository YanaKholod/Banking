import React from "react";
import {
  BottomArrowIcon,
  CharityIcon,
  ICONS,
  InfoIcon,
  RightArrowIcon,
} from "../constants/icons";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import {
  StyleHeader,
  StyleMainImg,
  StyleTitle,
  StyleWrapper,
} from "../utils/generalStyled";
import { charityOrganizations } from "../utils/charityOrganizations";

const Styled = {
  MainWrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    padding-top: 15px;
    h3 {
      font-weight: 600;
      white-space: pre-line;
      line-height: 24px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
    }
    div {
      padding: 5px;
      margin-top: auto;
    }
  `,
  Block: styled.div`
    background-color: ${COLORS.FOREGROUND};
    padding: 8px;
    width: 300px; //change with media
    margin: 15px;
    border-radius: 8px;
  `,
  Svg: styled.img`
    width: 12px;
    height: 12px;
    filter: contrast(90%);
  `,
};

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
      <Styled.MainWrapper>
        {charityOrganizations.map((item) => (
          <Styled.Block>
            <h3>
              {item.name} <Styled.Svg src={ICONS.RIGHT_ARROW} alt="" />
            </h3>
            <div>
              {item.description} <InfoIcon width="12px" height="12px" />
            </div>
          </Styled.Block>
        ))}
      </Styled.MainWrapper>
    </StyleWrapper>
  );
};

export default Charity;
