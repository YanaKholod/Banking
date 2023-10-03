import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import styled from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { CustomToastContainer } from "./utils/generalStyled";
import { COLORS } from "./constants/styled";

const Styled = {
  Global: styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box;
    select {
      background-color: transparent;
      border: 1px solid ${COLORS.LIGHTER_TEXT};
      border-radius: 4px;
      color: ${COLORS.TEXT};
      padding: 5px;
      font-size: 17px;
    }

    select option {
      background-color: transparent;
      color: ${COLORS.TEXT};
    }
  `,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Styled.Global>
      <PersistGate loading={null} persistor={persistor}>
        <CustomToastContainer />
        <App />
      </PersistGate>
    </Styled.Global>
  </Provider>
);
