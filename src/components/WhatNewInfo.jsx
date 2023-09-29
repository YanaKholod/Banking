import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { GramophoneIcon, ICONS } from "../constants/icons";
import { Link } from "react-router-dom";

const Styled = {
  Wrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    padding: 16px;
    width: 100%;
    @media (max-width: 520px) {
      margin-top: 10px;
    }
  `,
  Header: styled(Link)`
    display: flex;
    align-items: center;
    margin: 0px 0px 16px;
    text-decoration: none;
    color: ${COLORS.TEXT};
    div {
      padding-right: 5px;
    }
  `,
  Arrow: styled.div`
    margin-left: auto;
    img {
      height: 12px;
      width: 12px;
    }
  `,
  Img: styled.img`
    width: 24px;
    height: 24px;
    padding-right: 7px;
  `,
};
const WhatNewInfo = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header to="">
        <div>
          <GramophoneIcon width="24px" height="24px" />
        </div>
        <b>What's new in CatBank</b>
        <Styled.Arrow>
          <img alt="" src={ICONS.RIGHT_ARROW} />
        </Styled.Arrow>
      </Styled.Header>
      <Styled.Header to="">
        <div>
          <Styled.Img alt="" src={ICONS.CARD_REPAIR} />
        </div>
        <div>Card 'Recovery'</div>
      </Styled.Header>
      <Styled.Header to="">
        <div>
          <Styled.Img alt="" src={ICONS.AVTOCIVILKA} />
        </div>
        <div>Avtotsivіlka and payment by installments</div>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default WhatNewInfo;
