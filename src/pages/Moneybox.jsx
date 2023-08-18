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
  QuestionsWrapper,
  QuestionItem,
  QuestionLine,
  AnswerLine,
} from "../utils/generalStyled";

const Styled = {
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
      color: ${COLORS.LIGHTER_TEXT};
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
    color: ${COLORS.LIGHTER_TEXT};
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
  StartButton: styled(NavLink)`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${COLORS.ACCENT};
    margin-right: 12px;
    text-decoration: none;
    color: black;
    /* :hover {

    } */
  `,
  MoneyboxButton: styled(NavLink)`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    background-color: ${COLORS.LIGHTER_FOREGROUND};
    color: white;
    text-decoration: none;
    /* :hover {

    } */
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
      align-items: baseline;
    }
  `,
  ItemBoxStarting: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ConditionsBlock: styled.div`
    margin: 18px 0px;
    background-color: ${COLORS.MENU_BACKGROUND};
    border-radius: 2px;
    padding: 0px 16px;
    h2 {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 8px;
      font-weight: 400;
    }
  `,
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 14px;
  `,
  BlockInContainer: styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 46%;
    margin: 5px;
    padding: 10px;
    background-color: ${COLORS.FOREGROUND};
    h3 {
      margin-top: 0;
      display: flex;
      align-items: start;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
    }
    p {
      margin: auto;
      padding: 0px 4px;
    }
    div {
      margin-top: 3px;
      display: flex;
      height: 70px; //change with media
      border-radius: 16px;
      background-color: ${COLORS.DISABLED_HOVER};
      padding: 15px 7px;
    }
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
        <Styled.Terms to="">
          {/* replenishmennt link */}
          <TermsIcon width="24px" height="24px" />
          <div>Terms and conditions</div>
        </Styled.Terms>
        <Styled.Buttons>
          <Styled.StartButton to="">Start saving</Styled.StartButton>
          {/* link to go  */}
          <Styled.MoneyboxButton to="">My piggy bank</Styled.MoneyboxButton>
          {/* link to go  */}
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
      <Styled.ConditionsBlock>
        <h2>Conditions of accumulation</h2>
        <p>Connect, try different options and save with a smile!</p>
        <Styled.Container>
          {conditions.map((item) => (
            <Styled.BlockInContainer key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description1} </p>
              <div>{item.description2} </div>
            </Styled.BlockInContainer>
          ))}
        </Styled.Container>
      </Styled.ConditionsBlock>
      <div>
        <QuestionsWrapper>
          <h3>Frequently asked questions</h3>
          <div>
            {questions.map((item, index) => (
              <QuestionItem key={item.id}>
                <QuestionLine
                  isActive={activeAnswer}
                  onClick={() => handleToggle(index)}
                >
                  {item.title}
                  <div>
                    <BottomArrowIcon width="24px" height="24px" />
                  </div>
                </QuestionLine>
                {isOpen[index] && <AnswerLine>{item.description}</AnswerLine>}
              </QuestionItem>
            ))}
          </div>
        </QuestionsWrapper>
      </div>
    </StyleWrapper>
  );
};

export default Moneybox;
