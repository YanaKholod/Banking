import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/styled";
import { Link } from "react-router-dom";
import { ICONS } from "../../constants/icons";
import { divContents } from "../../utils/paymentCategories";

const Styled = {
  Wrapper: styled.div`
    background-color: ${COLORS.MENU_BACKGROUND};
    padding: 16px;
    width: 100%;
    margin-right: 20px;
    width: 100%;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 16px;
    text-decoration: none;
    color: ${COLORS.TEXT};
  `,
  Arrow: styled.div`
    margin-left: auto;
    display: flex;
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
  LeftArrow: styled.button`
    transform: rotate(180deg);
    margin-right: 30px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
  `,
  RightArrow: styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
  `,
  ItemWrapper: styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 8px;
    background-color: rgb(48, 48, 48);
    text-decoration: none;
    color: ${COLORS.TEXT};
    padding: 8px;
    border-radius: 7px;
    border: 1px solid transparent;
    width: 126px;
  `,
  ItemImg: styled.img`
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
  `,
  LineWrapper: styled.div`
    display: flex;
    justify-content: space-around;
  `,
  ItemDescr: styled.div`
    color: rgba(255, 255, 255, 0.54);
    font-size: 12px;
    line-height: 20px;
    hyphens: auto;
    text-align: center;
  `,
  ItemName: styled.b`
    font-size: 14px;
    line-height: 22px;
    hyphens: auto;
    text-align: center;
  `,
  ItemPosition: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

const CreditProducts = () => {
  const [currentDivs, setCurrentDivs] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(divContents.length / itemsPerPage);

  const nextDiv = () => {
    setCurrentDivs((prevPage) => (prevPage + 1) % totalPages);
  };

  const previousDiv = () => {
    setCurrentDivs((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const renderDivs = () => {
    const startIndex = currentDivs * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedDivContents = divContents.slice(startIndex, endIndex);

    return slicedDivContents.map(({ name, index, description, img }) => (
      <Styled.ItemWrapper key={index}>
        <Styled.ItemPosition>
          <Styled.ItemImg alt="" src={img} />
          <Styled.ItemName> {name}</Styled.ItemName>
          <Styled.ItemDescr>{description}</Styled.ItemDescr>
        </Styled.ItemPosition>
      </Styled.ItemWrapper>
    ));
  };

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Img alt="" src={ICONS.CREDIT_SERVICE} />
        <b>Credit products</b>
        <Styled.Arrow>
          <Styled.LeftArrow
            onClick={() => {
              previousDiv();
            }}
          >
            <img alt="" src={ICONS.RIGHT_ARROW} />
          </Styled.LeftArrow>
          <Styled.RightArrow
            onClick={() => {
              nextDiv();
            }}
          >
            <img alt="" src={ICONS.RIGHT_ARROW} />
          </Styled.RightArrow>
        </Styled.Arrow>
      </Styled.Header>
      <div>
        <Styled.LineWrapper>{renderDivs()}</Styled.LineWrapper>
      </div>
    </Styled.Wrapper>
  );
};

export default CreditProducts;
