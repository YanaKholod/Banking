import styled from "styled-components";
import { COLORS } from "./styled";

export const Styled = {
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 22px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.76);
    }
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    text-align: center;
    width: 300px;
    /* @media (max-width: 550px) {
      width: 250px;
    } */
  `,
  Input: styled.input`
    padding: 8px 30px 8px 8px;
    width: 100%;
    text-align: left;
    font-weight: 400;
    font-size: 16px;
    transition-duration: 450ms;
    color: ${COLORS.LIGHTER_TEXT};
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
  Label: styled.label`
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.76);
  `,
  Errors: styled.div`
    margin-top: 5px;
    color: #c10000;
    font-size: 12px;
    p {
      font-size: 12px;
      margin: 0;
    }
  `,
  Button: styled.button`
    border: 0;
    background-color: ${COLORS.ACCENT};
    color: black;
    border-radius: 8px;
    width: 50%;
    height: 50px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 4px;
    padding: 8px 16px;
    position: relative;
    z-index: 10;

    &:hover {
    }

    /* @media (max-width: 360px) {
      width: 190px;
      font-size: 13px;
    } */
  `,
  Field: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-bottom: 20px;
    width: 100%;
  `,
};
