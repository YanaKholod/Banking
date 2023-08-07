import React from "react";
import { CharityIcon, ICONS, InfoIcon } from "../constants/icons";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import {
  StyleHeader,
  StyleMainImg,
  StyleTitle,
  StyleWrapper,
} from "../utils/generalStyled";
import { charityOrganizations } from "../utils/charityOrganizations";
import { NavLink } from "react-router-dom";

const Styled = {
  MainWrapper: styled(NavLink)`
    background-color: ${COLORS.MENU_BACKGROUND};
    padding-top: 15px;
    text-decoration: none;
    color: white;

    h3 {
      font-weight: 600;
      white-space: pre-line;
      line-height: 24px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      padding: 0px 10px;
    }
    div {
      padding: 10px;
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
  HorizontalLine: styled.hr`
    width: 95%;
    border: 1px solid rgba(255, 255, 255, 0.54);
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
      <Styled.MainWrapper to="">
        {/* way to replenishment for paying */}
        {charityOrganizations.map((item) => (
          <Styled.Block key={item.id}>
            <h3>
              {item.name} <Styled.Svg src={ICONS.RIGHT_ARROW} alt="" />
            </h3>
            <Styled.HorizontalLine />
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
