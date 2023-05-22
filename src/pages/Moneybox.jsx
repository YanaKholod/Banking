import React from "react";
import { NavLink } from "react-router-dom";
import { conditions, howToStart, questions, services } from "../utils/moneybox";

const Moneybox = () => {
  return (
    <div>
      <div>
        <img
          src="https://cdn.privat24.ua/icons/file/ServiceMoneybox.svg"
          alt=""
        />
        <div>
          <h2>Treasury</h2>
          <div>A simple and convenient way of saving</div>
        </div>
      </div>

      <div>
        <h2>"Treasure box" service</h2>
        {services.map((item) => (
          <div key={item.id}>
            {item.name}
            <p>{item.description}</p>
          </div>
        ))}
        <NavLink>Terms and Conditions</NavLink>
        <button>Start saving</button>
        <button>My piggy bank</button>
      </div>
      <div>
        <h2>How to start saving with "Treasure box"?</h2>
        {howToStart.map((item) => (
          <div key={item.id}>
            <img alt="" src={item.img} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
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
          <h2>Frequently asked questions</h2>
          {questions.map((item) => (
            <div key={item.id}>
              {item.title}
              <button>^</button>
              <div>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moneybox;
