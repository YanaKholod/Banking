import React from "react";
import { paymentsCategories, questions } from "../utils/paymentCategories";

const Payments = () => {
  return (
    <div>
      <div>
        <img
          src="https://cdn.privat24.ua/icons/file/ServicePayments.svg"
          alt=""
        />
        <div>
          <h2>Payments</h2>
          <p>Don't waste time on queues and money on extra commissions</p>
        </div>
      </div>
      <div>
        <h2>New payment</h2>
        <p>To create a payment, use the search</p>
        <input placeholder="Enter your business name"></input>
        <input placeholder="City"></input>
      </div>
      <div>
        <h2>Popular templates</h2>
        <div>This is where your templates will be </div>
      </div>
      <div>
        <h2>Categories</h2>
        <div>
          {paymentsCategories.map((item) => (
            <div key={item.id}>
              <img src={item.url} alt="" />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
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
  );
};

export default Payments;
