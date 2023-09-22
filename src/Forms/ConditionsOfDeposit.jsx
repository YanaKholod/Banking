import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const ConditionsStyled = {
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
  Form: styled.div`
    max-height: 400px;
    overflow-y: auto;
    width: 470px;
    @media (max-width: 550px) {
      width: 280px;
    }
  `,
  Title: styled.div`
    font-size: 17px;
    margin-bottom: 10px;
  `,
  Description: styled.div`
    color: ${COLORS.LIGHTER_TEXT};
    line-height: 27px;
    margin-bottom: 7px;
  `,
};
const deposits = [
  {
    id: 0,
    title: "Standard 14%",
    description: `Regular refills. For customers who top up deposits from cards, we have a great service - regular top-ups. It is enough to connect the service once, and every month the amount you choose will be transferred from the card to the deposit. 
    You choose the replenishment date yourself.
     The deposit is extended for a new period automatically. There is no need to go to the branch for this.
      You can cancel the extension for a new term 30 days before the end of the contract - at a bank branch or via the Internet.`,
  },
  {
    id: 1,
    title: "Junior 12,5%",
    description: `The deposit is opened in your name with the condition that from a certain date in the future all rights under this deposit will automatically pass to the child.
       You enter the child's data when making a deposit.You can open a deposit for the benefit of a child from birth to 16 years of age. It is not necessary for the child to be present during the registration, and the deposit can also be opened through CatBank.`,
  },
  {
    id: 2,
    title: "Money box 17%",
    description: `When funds are received on your card, the amount or percentage chosen by you (from 1 to 17% of the received funds, including the amount of a possible commission withheld by the bank for replenishing the card) will be automatically deposited in your "Treasury".
      For example, you can choose:
      1) deposit UAH 50 in "Money box" each time money is received on the card;
      2) deposit 12% of the income in the "Treasury".`,
  },
];
const ConditionsOfDeposit = () => {
  return (
    <ConditionsStyled.Wrapper>
      <p>Conditions of deposits</p>
      <ConditionsStyled.Form>
        {deposits.map((item) => (
          <div key={item.id}>
            <ConditionsStyled.Title>{item.title}</ConditionsStyled.Title>
            <ConditionsStyled.Description>
              {item.description}
            </ConditionsStyled.Description>
          </div>
        ))}
      </ConditionsStyled.Form>
    </ConditionsStyled.Wrapper>
  );
};

export default ConditionsOfDeposit;
