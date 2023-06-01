import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { ICONS } from "../constants/icons";
import { Link } from "react-router-dom";

const Styled = {
  Wrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    padding: 16px;
    width: 100%;
    margin-right: 20px;
    width: 100%;
  `,
  Header: styled(Link)`
    display: flex;
    align-items: center;
    margin: 0px 0px 16px;
    text-decoration: none;
    color: ${COLORS.TEXT};
    svg {
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
        <svg
          height="24"
          width="24"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#speaker_svg__clip0)">
            <path
              d="M14.963 2.586a.586.586 0 1 1 1.172 0v1.172a.586.586 0 1 1-1.172 0V2.586zm5.282 7.718l-7.8-7.802a1.176 1.176 0 0 0-1.659 0 1.175 1.175 0 0 0 0 1.658l7.802 7.801a1.173 1.173 0 0 0 1.657-1.657zM10.208 5.238l-.06.295C9.736 7.6 8.73 9.567 7.372 11.16l4.244 4.244c1.593-1.36 3.53-2.392 5.6-2.806l.294-.058-7.301-7.301zm-6.516 9.7l2.9-2.9 4.144 4.144-2.9 2.9c-.689.688-1.801.685-2.487 0l-1.657-1.657a1.758 1.758 0 0 1 0-2.487zm2.487 1.658c.228.23.6.23.828 0l.829-.828a.586.586 0 1 0-.829-.829l-.828.829a.586.586 0 0 0 0 .828zm7.003 2.798l.797-.797c.689-.689.686-1.801 0-2.486l-.592-.592c-.327.22-.64.458-.943.713l.707.708a.584.584 0 0 1 0 .828l-.81.81-1.191-1.153-1.657 1.657 2.658 2.576A1.173 1.173 0 0 0 13.808 20l-.626-.606zm7.055-12.706h-1.172a.586.586 0 1 0 0 1.171h1.172a.586.586 0 1 0 0-1.171zM18.65 3.344a.586.586 0 1 1 .828.828l-1.172 1.172a.586.586 0 1 1-.828-.829l1.172-1.171z"
              fill="#8dc641"
              fillRule="evenodd"
            ></path>
          </g>
          <defs>
            <clipPath id="speaker_svg__clip0">
              <path d="M0 0h20v20H0z" transform="translate(2 2)"></path>
            </clipPath>
          </defs>
        </svg>
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
