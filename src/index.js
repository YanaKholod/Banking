import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import styled from "styled-components";

const Styled = {
  Global: styled.div`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: "Gill Sans", sans-serif;
    box-sizing: border-box;
  `,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Styled.Global>
      <App />
    </Styled.Global>
  </Provider>
);
