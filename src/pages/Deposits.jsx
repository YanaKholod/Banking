import React from "react";
import { depositsCategories } from "../utils/deposits";

const Deposits = () => {
  return (
    <div>
      <div>
        <img
          src="https://cdn.privat24.ua/icons/file/ServiceDeposit.svg"
          alt=""
        ></img>
        <div>
          <h2>Deposits</h2>
          <p>Manage your deposits online</p>
        </div>
      </div>
      <div>
        <h2>My deposits</h2>
        <button>Open deposit</button>
      </div>
      {depositsCategories.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt="" />
          <button>{item.title}</button>
        </div>
      ))}
      <div></div>
      <div>Rules</div>
      <div>Operation of deposit</div>
    </div>
  );
};

export default Deposits;
