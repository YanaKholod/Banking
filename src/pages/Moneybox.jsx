import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { conditions, howToStart, questions, services } from "../utils/moneybox";
import { BottomArrowIcon, MoneyboxIcon, TermsIcon } from "../constants/icons";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import {
  StyleDescription,
  StyleHeader,
  StyleMainImg,
  StyleTitle,
  StyleWrapper,
} from "../utils/generalStyled";

const Styled = {
  QuestionsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.MENU_BACKGROUND};
    border-radius: 2px;
    padding: 0px 24px;
    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 8px;
      font-weight: 400;
    }
  `,
  QuestionItem: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    cursor: pointer;
  `,
  QuestionLine: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 2px;
    color: rgba(255, 255, 255, 0.588);
    :hover {
      background-color: ${COLORS.FOREGROUND};
    }
  `,
  ArrowDownButton: styled.button`
    flex-shrink: 0;
    height: 24px;
    opacity: 0.87;
  `,
  Answer: styled.div`
    margin-top: 5px;
    padding: 8px 0;
    color: white;
    padding-left: 10px;
  `,
  TreasureBox: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: ${COLORS.MENU_BACKGROUND};
    border-radius: 2px;
    padding: 24px;
    margin-bottom: 16px;
    h2 {
      font-size: 22px;
      line-height: 32px;
      font-weight: 400;
      margin: 0;
    }
  `,
  ItemBoxWrapper: styled.div`
    display: flex;
    & :first-child {
      margin-left: 0;
    }
    & :last-child {
      margin-right: 0;
    }
    margin: 24px 0px;
  `,
  ItemBox: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 24px;
    & > :first-child {
      color: rgba(255, 255, 255, 0.54);
      font-size: 14px;
      line-height: 22px;
      display: inline-block;
    }
    & > :last-child {
      font-size: 20px;
      line-height: 28px;
      display: inline-block;
    }
  `,
  Terms: styled(NavLink)`
    text-decoration: none;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.54);
    margin-bottom: 24px;
    :hover {
      color: ${COLORS.ACCENT};
    }
    div {
      margin-left: 8px;
    }
  `,
  Buttons: styled.div`
    display: flex;
    align-items: center;
  `,
  StartButton: styled.button`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${COLORS.ACCENT};
    margin-right: 12px;
  `,
  MoneyboxButton: styled.button`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${COLORS.LIGHTER_FOREGROUND};
    color: white;
  `,
  HowToStartBlock: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    border-radius: 2px;
    padding: 24px;
    h2 {
      font-size: 22px;
      line-height: 32px;
      margin: 0;
      font-weight: 400;
    }
    div {
      display: flex;
      align-items: center;
    }
  `,
  ItemBoxStarting: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
const Moneybox = () => {
  const [isOpen, setIsOpen] = useState([]);
  const [activeAnswer, setActiveAnswer] = useState(false);

  const handleToggle = (index) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
    setActiveAnswer(!activeAnswer);
  };

  return (
    <StyleWrapper>
      <StyleHeader>
        <StyleMainImg>
          <MoneyboxIcon width="48px" height="48px" />
        </StyleMainImg>
        <div>
          <StyleTitle>Treasury</StyleTitle>
          <StyleDescription>
            A simple and convenient way of saving
          </StyleDescription>
        </div>
      </StyleHeader>
      <Styled.TreasureBox>
        <h2>"Treasure box" service</h2>
        <Styled.ItemBoxWrapper>
          {services.map((item) => (
            <Styled.ItemBox key={item.id}>
              <div>{item.name}</div>
              <div>{item.description}</div>
            </Styled.ItemBox>
          ))}
        </Styled.ItemBoxWrapper>
        <Styled.Terms>
          <TermsIcon width="24px" height="24px" />
          <div>Terms and conditions</div>
        </Styled.Terms>
        <Styled.Buttons>
          <Styled.StartButton>Start saving</Styled.StartButton>
          <Styled.MoneyboxButton>My piggy bank</Styled.MoneyboxButton>
        </Styled.Buttons>
      </Styled.TreasureBox>
      <Styled.HowToStartBlock>
        <h2>How to start saving with "Treasure box"?</h2>
        <div>
          {howToStart.map((item) => (
            <Styled.ItemBoxStarting key={item.id}>
              <img alt="" src={item.img} />
              <p>{item.name}</p>
            </Styled.ItemBoxStarting>
          ))}
        </div>
      </Styled.HowToStartBlock>
      <div>
        <h2>Conditions of accumulation</h2>
        <p>Connect, try different options and save with a smile!</p>
        <div>
          {conditions.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description1} </p>
              <p>{item.description2} </p>
            </div>
          ))}
        </div>
        <div>
          <Styled.QuestionsWrapper>
            <h2>Frequently asked questions</h2>
            <div>
              {questions.map((item, index) => (
                <Styled.QuestionItem key={item.id}>
                  <Styled.QuestionLine
                    isActive={activeAnswer}
                    onClick={() => handleToggle(index)}
                  >
                    {item.title}
                    <div>
                      <BottomArrowIcon width="24px" height="24px" />
                    </div>
                  </Styled.QuestionLine>
                  {isOpen[index] && (
                    <Styled.Answer>{item.description}</Styled.Answer>
                  )}
                </Styled.QuestionItem>
              ))}
            </div>
          </Styled.QuestionsWrapper>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default Moneybox;
