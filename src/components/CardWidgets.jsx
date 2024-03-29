import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const Styled = {
  WidgetWrapper: styled.div`
    display: flex;
    margin-bottom: 16px;
    @media (max-width: 520px) {
      flex-direction: column;
      width: 90%;
      margin-bottom: 10px;
    }
  `,
  EachWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: ${(props) => (props.isFirst ? "15px" : "0")};
    height: auto;
    padding: 24px 16px;
    width: 100%;
    background-color: ${COLORS.MENU_BACKGROUND};
    b {
      margin: 0px 0px 16px;
    }
    @media (max-width: 520px) {
      margin-top: 10px;
    }
  `,
  Img: styled.img`
    width: 108px;
    height: 56px;
    margin-right: 16px;
  `,
  Button: styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding: 8px 16px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: ${COLORS.BUTTON_TEXT};
    background-color: ${COLORS.BUTTON_BACKGROUND};
    position: relative;
    white-space: nowrap;
    border-radius: 8px;
    margin: 0px;
  `,
  Text: styled.div`
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 24px;
  `,
  Description: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  `,
};

const CardWidgets = () => {
  return (
    <Styled.WidgetWrapper>
      <Styled.EachWrapper isFirst>
        <b>Digital cards form CatBank</b>
        <Styled.Description>
          <div>
            <Styled.Img
              src="https://wallpapercave.com/wp/wp9126648.jpg"
              alt=""
            />
          </div>
          <Styled.Text>
            <div>Credit limit up to 200 000 UAH. </div>
            <div>Issue and payments without commission.</div>
          </Styled.Text>
        </Styled.Description>
        <Styled.Button to="cards">Look at the cards</Styled.Button>
      </Styled.EachWrapper>
      <Styled.EachWrapper>
        <b> Card of another bank of Ukraine </b>
        <Styled.Description>
          <div>
            <Styled.Img
              src="https://i.ibb.co/xzkjL8q/51-Hb-TJMm3k-L-AC-SL1500-1.jpg"
              alt=""
            />
          </div>
          <div>Pay quickly with your bank credits</div>
        </Styled.Description>
        <Styled.Button to="cards">Add card</Styled.Button>
      </Styled.EachWrapper>
    </Styled.WidgetWrapper>
  );
};

export default CardWidgets;
