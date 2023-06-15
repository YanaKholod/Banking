import React from "react";
import { depositsCategories } from "../utils/deposits";
import styled from "styled-components";
import {
  StyleDescription,
  StyleHeader,
  StyleMainImg,
  StyleTitle,
  StyleWrapper,
} from "../utils/generalStyled";
import { NavLink } from "react-router-dom";
import { DepositsIcon } from "../constants/icons";

const Styled = {};
const Deposits = () => {
  return (
    <StyleWrapper>
      <StyleHeader>
        <StyleMainImg>
          <DepositsIcon width="48px" height="48px" />
        </StyleMainImg>

        <div>
          <StyleTitle>Deposits</StyleTitle>
          <StyleDescription>Manage your deposits online</StyleDescription>
        </div>
      </StyleHeader>
      <div>
        <h2>My deposits</h2>
        <button>Open deposit</button>
      </div>
      {depositsCategories.map((item) => (
        <NavLink to key={item.id}>
          <div>{item.svg}</div>
          <div>{item.title}</div>
        </NavLink>
      ))}
      <div></div>
      <div>Rules</div>
      <div>Operation of deposit</div>
    </StyleWrapper>
  );
};

export default Deposits;
