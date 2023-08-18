import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 80px;
    padding: 24px 0;
    height: 100vh;
  `,
  Info: styled.div`
    background-color: rgb(33, 33, 33);
    border-radius: 2px;
    padding: 24px 10px;
    margin-bottom: 16px;
    width: 100%;
  `,
  Header: styled.div`
    display: flex;
    justify-content: space-around;
    color: ${COLORS.LIGHTER_TEXT};
    font-weight: 600;
    font-size: 17px;
    line-height: 40px;
    border-bottom: 1px solid ${COLORS.LIGHTER_TEXT};
    div {
      padding: 0px 40px;
      :hover {
        border-bottom: 3px solid ${COLORS.HOVER};
      }
      :focus {
        border-bottom: 3px solid ${COLORS.ACCENT};
      }
    }
  `,
  MainInfo: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ItemBox: styled.div`
    display: flex;
    justify-content: start;
    padding: 0px 25px;
    /* justify-content: space-around; */
    /* flex-direction: column; */
    margin: 0 24px;
    & > :first-child {
      color: ${COLORS.LIGHTER_TEXT};
      font-size: 16px;
      line-height: 40px;
      display: inline-block;
    }
    & > :last-child {
      font-size: 20px;
      line-height: 40px;
      display: inline-block;
    }
  `,
  FieldName: styled.div`
    padding-right: 20px;
  `,
  EditButton: styled.button`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    margin-right: 10px;
    background-color: transparent;
    color: ${COLORS.ACCENT};
    border: 1px solid ${COLORS.ACCENT};
    text-decoration: none;
    cursor: pointer;
    :hover {
      background-color: ${COLORS.ACCENT};
      color: black;
    }
  `,

  ButtonLine: styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    padding-bottom: 15px;
    border-bottom: 1px solid ${COLORS.LIGHTER_TEXT};
  `,
};

const SettingsPage = () => {
  return (
    <Styled.Wrapper>
      <Styled.Info>
        <Styled.Header>
          <div>Profile</div>
          <div>Payments</div>
          <div>Cards</div>
        </Styled.Header>
        <Styled.MainInfo>
          <div>Client info</div>
          <Styled.ItemBox>
            <Styled.FieldName>
              <div>Full name:</div>
              <div>Phone number:</div>
            </Styled.FieldName>
            <div>
              <div>Full name</div>
              <div>Phone number</div>
            </div>
          </Styled.ItemBox>
          <Styled.ButtonLine>
            <Styled.EditButton>Edit</Styled.EditButton>
          </Styled.ButtonLine>
        </Styled.MainInfo>
      </Styled.Info>
    </Styled.Wrapper>
  );
};

export default SettingsPage;
