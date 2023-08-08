import styled from "styled-components";
import { COLORS } from "../../constants/styled";

export const Styled = {
  Wrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    padding: 16px;
    width: 100%;
    margin-right: ${(props) => (props.isFirst ? "15px" : "0")};
    width: 100%;
  `,
  MainInfo: styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 16px;
    div {
      padding-right: 9px;
    }
  `,
  Requisites: styled.div`
    display: flex;
    align-items: center;
  `,
  Button: styled.button`
    display: flex;
    align-items: center;
    padding: 8px;
    border-style: none;
    border-radius: 8px;
    background-color: ${COLORS.HOVER};
    margin-left: 5px;
  `,
  Input: styled.input`
    padding: 8px 30px 8px 8px;
    width: 100%;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    transition-duration: 450ms;
    color: rgba(255, 255, 255, 0.87);
    border-style: none;
    border-width: 0px;
    border-radius: 0px;
    background: transparent;
    margin: 0px;
    display: block;
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 1px solid ${COLORS.HOVER};
    margin-left: 5px;
    :hover {
      border-bottom: 3px solid ${COLORS.HOVER};
    }
    :focus {
      border-bottom: 3px solid ${COLORS.ACCENT};
    }
  `,
  Select: styled.select`
    padding: 5px;
    border: none;
    background-color: ${COLORS.MENU_BACKGROUND};
    color: rgba(255, 255, 255, 0.87);
    font-weight: 500;
    font-size: 17px;
  `,
  Ukraine: styled.img`
    width: 16px;
    height: 16px;
  `,
  Description: styled.div`
    color: ${COLORS.LIGHTER_TEXT};
    font-size: 12px;
    line-height: 20px;
    padding-bottom: 0px;
    padding-top: 8px;
    text-align: left;
    width: auto;
    min-width: auto;
  `,
};
