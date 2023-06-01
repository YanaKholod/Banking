import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/styled";
import { Link } from "react-router-dom";
import { ICONS } from "../../constants/icons";

const Styled = {
  Wrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    padding: 16px;
    width: 100%;
    margin-right: 20px;
    width: 100%;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 16px;
    text-decoration: none;
    color: ${COLORS.TEXT};
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

const CreditProducts = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Img alt="" src={ICONS.CREDIT_SERVICE} />
        <b>Credit products</b>
        <Styled.Arrow>
          <img alt="" src={ICONS.RIGHT_ARROW} />
        </Styled.Arrow>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default CreditProducts;
