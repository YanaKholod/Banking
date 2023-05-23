import React from "react";
import { NavLink } from "react-router-dom";

const MainContent = () => {
  return (
    <div>
      <div>
        IMG DIV
        <img alt=""></img>
      </div>
      <div>
        Services
        <div>
          Digital cards to CattBank
          <div>
            Credit limit up to 200 000 UAH. Issue and payments without
            commission.
          </div>
          <button>Look at the cards</button>
        </div>
        <div>
          Card of another bank of Ukraine and the world
          <div>Pay quickly with your bank cards</div>
          <button>Add card</button>
        </div>
        <div>
          Transfer to card
          <form>
            <input></input>
          </form>
        </div>
        <div>
          Renewal of mobile
          <form>
            <input></input>
          </form>
        </div>
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
    </div>
  );
};

export default MainContent;
