import React, { useState } from "react";
import { paymentsCategories, questions } from "../utils/paymentCategories";
import styled from "styled-components";
import { COLORS, TEXT } from "../constants/styled";
import { useForm } from "react-hook-form";
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
import {
  BottomArrowIcon,
  ICONS,
  PaymentsIcon,
  RightArrowIcon,
} from "../constants/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyByIdentifier } from "../redux/companies/actions";

const Styled = {
  Titles: styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 7px;
    padding: 0 24px;
  `,
  NewPaymentForm: styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.MENU_BACKGROUND};
    border-radius: 2px;
    padding: 24px 0;
    margin-bottom: 16px;
    width: 100%;
  `,
  Input: styled.input`
    /* position: relative; */
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
    margin-left: 10px;
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
    align-items: end;
    margin: 10px 18px;
    width: 100%;
    label {
      color: rgba(255, 255, 255, 0.588);
    }
  `,
  SearchButton: styled.button`
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    padding: 6px 14px;
    border-radius: 8px;
    transition-duration: 450ms;
    color: ${COLORS.ACCENT};
    background-color: transparent;
    border: 1px solid ${COLORS.ACCENT};
    text-decoration: none;
    height: fit-content;
    display: flex;
    justify-content: end;
    align-items: end;
    margin-left: 20px;
    :hover {
      color: black;
      background-color: ${COLORS.ACCENT};
    }
  `,
  InputLine: styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    div {
      display: flex;
    }
  `,
  DropdownMenu: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 0px 0px 10px;
    width: 100%;
    background-color: transparent;
    max-height: 350px;
    overflow-y: auto;
    display: ${(props) => (props.visability ? "block" : "none")};
  `,
  DropdownItem: styled(Link)`
    text-decoration: none;
    color: ${COLORS.TEXT};
    padding: 10px 5px;
    border-bottom: 1px solid ${COLORS.LIGHTER_TEXT};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    :hover {
      background-color: ${COLORS.LIGHTER_FOREGROUND};
    }
    img {
      width: 12px;
      height: 12px;
    }
  `,
  Company: styled.div`
    display: flex;
    flex-direction: column;
    p {
      margin: 0;
      margin-top: 4px;
      color: ${COLORS.LIGHTER_TEXT};
    }
  `,
  Link: styled(Link)`
    text-decoration: none;
  `,
};
const Payments = () => {
  const [isOpen, setIsOpen] = useState([]);
  const [activeAnswer, setActiveAnswer] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  const dropdownCompanies = useSelector(
    (state) => state.companies.dropdownCompanies
  );

  const handleToggle = (index) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
    setActiveAnswer(!activeAnswer);
  };

  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
    defaultValues: { IBAN: "", city: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleSearch = async (event) => {
    let identifier = event.target.value;
    if (identifier.length > 2) {
      await dispatch(fetchCompanyByIdentifier(identifier));
      setDropdownVisible(true);
    } else {
      await dispatch(fetchCompanyByIdentifier());
      setDropdownVisible(false);
    }
  };

  const cleanDropdown = async () => {
    await dispatch(fetchCompanyByIdentifier());
    setDropdownVisible(false);
  };

  return (
    <StyleWrapper>
      <StyleHeader>
        <StyleMainImg>
          <PaymentsIcon width="48px" height="48px" />
        </StyleMainImg>
        <div>
          <StyleTitle>Payments</StyleTitle>
          <StyleDescription>
            Don't waste time on queues and money on extra commissions
          </StyleDescription>
        </div>
      </StyleHeader>
      <Styled.NewPaymentForm>
        <Styled.Titles>New payment</Styled.Titles>
        <Styled.PaymentDescription>
          To create a payment, use the search
        </Styled.PaymentDescription>
        <form onSubmit={handleSubmit(handleSearch)} />
        <Styled.RequisitesLine>
          <Styled.InputLine>
            <Styled.Input
              type="text"
              name="iban"
              placeholder="IBAN, EDRPOU, account number or owners name"
              {...register("identifier", { required: true, maxLength: 26 })}
              onChange={handleSearch}
            />
            {dropdownCompanies.length > 0 && (
              <Styled.DropdownMenu visability={isDropdownVisible}>
                {dropdownCompanies.map((company) => (
                  <div
                    key={company._id}
                    onClick={() => {
                      cleanDropdown();
                    }}
                  >
                    <Styled.DropdownItem
                      key={company._id}
                      to={{
                        pathname: `/payment/${company._id}`,
                      }}
                    >
                      <Styled.Company>
                        {company.companyName}
                        <p> {company.iban}</p>
                      </Styled.Company>
                      <div>
                        <img src={ICONS.RIGHT_ARROW} alt="" />
                      </div>
                    </Styled.DropdownItem>
                  </div>
                ))}
              </Styled.DropdownMenu>
            )}
          </Styled.InputLine>
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
    </StyleWrapper>
  );
};

export default Payments;
