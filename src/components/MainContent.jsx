import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CardWidgets from "./CardWidgets";
import ReplenishmentWidgets from "./ReplenishmentWidgets";

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    margin-left: 20px;
  `,
};
const MainContent = () => {
  return (
    <Styled.Wrapper>
      <div>
        IMG DIV
        <img alt=""></img>
      </div>
      <div>
        Services
        <CardWidgets />
        <ReplenishmentWidgets />
        <div>
          Payment
          <form>
            <input></input>
          </form>
        </div>
        <div>
          What's new with Cat24
          <NavLink>єInnovation card 🏠</NavLink>
          <NavLink>Avtotsivilka and "Payment by parts" 🤝</NavLink>
        </div>
        <div>
          Credit products
          <div>
            Partial payment <p>Buy now pay later</p>
          </div>
          <div>
            Loans <p>Pennies on the card online</p>
          </div>
        </div>
        <div>
          Currency Converter
          <form>
            <input></input>
            <button>||</button>
            <input></input>
          </form>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default MainContent;
