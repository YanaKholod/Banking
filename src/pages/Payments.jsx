import React, { useState } from "react";
import {
  cityOptions,
  paymentsCategories,
  questions,
} from "../utils/paymentCategories";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { useForm } from "react-hook-form";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 38px;
    padding: 24px 0;
  `,
  Header: styled.div`
    display: flex;
    margin-bottom: 25px;
    img {
      margin-right: 16px;
    }
  `,
  Payments: styled.div`
    font-weight: 600;
    color: rgba(255, 255, 255, 0.87);
    font-size: 20px;
    line-height: 28px;
  `,
  Titles: styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 7px;
    padding: 0 24px;
  `,
  Description: styled.div`
    color: rgba(255, 255, 255, 0.54);
    font-size: 14px;
    line-height: 22px;
  `,
  NewPaymentForm: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.MENU_BACKGROUND};
    border-radius: 2px;
    padding: 24px 0;
    margin-bottom: 16px;
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
  PaymentDescription: styled.div`
    color: rgba(255, 255, 255, 0.609);
    padding: 0 24px;
    margin-bottom: 40px;
  `,
  PopularTemplatesForm: styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    padding: 24px 0;
    margin-bottom: 16px;
    background-color: ${COLORS.MENU_BACKGROUND};
  `,
  TemplatesDescription: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid ${COLORS.HOVER};
    h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: 600;
      margin: 15px 0;
    }
    div {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 10px;
    }
  `,
  Button: styled.button`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 8px;
    transition-duration: 450ms;
    color: rgb(0, 0, 0);
    background-color: ${COLORS.ACCENT};
    border-style: none;
    border-color: rgb(141, 198, 65);
    margin-bottom: 20px;
  `,
  Categories: styled.div`
    padding: 0 24px;
    h3 {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
    }
  `,
  CategoryList: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
  CategoryItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 18%;
    margin: 5px;
    background-color: ${COLORS.FOREGROUND};
    padding: 24px 16px;
    border-radius: 6px;
    img {
      width: 48px;
      height: 48px;
      margin-bottom: 8px;
    }
  `,
  Datalist: styled.datalist`
    padding: 5px;
    border: none;
    background-color: ${COLORS.MENU_BACKGROUND};
    color: rgba(255, 255, 255, 0.87);
    font-weight: 500;
    font-size: 17px;
  `,
  RequisitesLine: styled.div`
    display: flex;
    margin: 10px 18px;
  `,
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
    }
  `,
  QuestionItem: styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 8px 24px;
    cursor: pointer;
    :hover {
      background-color: ${COLORS.FOREGROUND};
    }
  `,
  QuestionLine: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ArrowDownButton: styled.button``,
};
const Payments = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
    defaultValues: { IBAN: "", city: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <img
          src="https://cdn.privat24.ua/icons/file/ServicePayments.svg"
          alt=""
        />
        <div>
          <Styled.Payments>Payments</Styled.Payments>
          <Styled.Description>
            Don't waste time on queues and money on extra commissions
          </Styled.Description>
        </div>
      </Styled.Header>
      <Styled.NewPaymentForm>
        <Styled.Titles>New payment</Styled.Titles>
        <Styled.PaymentDescription>
          To create a payment, use the search
        </Styled.PaymentDescription>
        <form onSubmit={handleSubmit(onSubmit)} />
        <Styled.RequisitesLine>
          <Styled.Input
            type="text"
            name="IBAN"
            placeholder="IBAN, EDRPOU, account number or owners name"
            {...register("IBAN", { required: true, maxLength: 34 })}
          />
          <Styled.Input
            type="text"
            name="city"
            list="cities"
            placeholder="Enter the settlement"
            {...register("city", { required: true, maxLength: 16 })}
          />
          <Styled.Datalist id="cities">
            {cityOptions.map((city) => (
              <option key={city.id} value={city.value}></option>
            ))}
          </Styled.Datalist>
        </Styled.RequisitesLine>
      </Styled.NewPaymentForm>
      <Styled.PopularTemplatesForm>
        <Styled.Titles>Popular templates</Styled.Titles>
        <Styled.TemplatesDescription>
          <h3>This is where your templates will be </h3>
          <div>Log in to CatBank to see them</div>
          <Styled.Button>Entrance</Styled.Button>
        </Styled.TemplatesDescription>
        <Styled.Categories>
          <h3>Categories</h3>
          <Styled.CategoryList>
            {paymentsCategories.map((item) => (
              <Styled.CategoryItem key={item.id}>
                <img src={item.url} alt="" />
                <div>{item.title}</div>
              </Styled.CategoryItem>
            ))}
          </Styled.CategoryList>
        </Styled.Categories>
      </Styled.PopularTemplatesForm>
      <Styled.QuestionsWrapper>
        <h3>Frequently asked questions</h3>
        <div>
          {questions.map((item) => (
            <Styled.QuestionItem key={item.id}>
              <Styled.QuestionLine>
                {item.title}
                <button>
                  <svg
                    height="24px"
                    width="24px"
                    version="1.1"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="none"
                      strokeWidth="1"
                    >
                      <path
                        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"
                        fill="#FFF"
                        fillRule="nonzero"
                      ></path>
                      <path d="M0 0h24v24H0z"></path>
                    </g>
                  </svg>
                </button>
              </Styled.QuestionLine>
              <div>{item.description}</div>
            </Styled.QuestionItem>
          ))}
        </div>
      </Styled.QuestionsWrapper>
    </Styled.Wrapper>
  );
};

export default Payments;
