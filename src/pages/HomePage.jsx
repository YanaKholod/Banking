import React, { useState } from "react";
import Menu from "../components/Menu";
import MainContent from "../components/MainContent";
import styled from "styled-components";
import Chat from "../components/Chat";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    margin: 20px 80px;
    @media (min-width: 1900px) {
      margin: 20px 220px;
      height: 100vh;
    }
    @media (max-width: 850px) {
      margin: 20px 20px;
    }
    @media (max-width: 520px) {
      margin: 10px 0px;
    }
  `,
  Menu: styled.div``,
  ChatButton: styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #0074e4;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `,
};
const HomePage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Styled.Wrapper>
      <Styled.Menu>
        <Menu />
      </Styled.Menu>
      <MainContent />
      {isChatOpen && <Chat closeChat={toggleChat} />}
      <Styled.ChatButton onClick={toggleChat}>
        {isChatOpen ? "Close Chat" : "Open Chat"}
      </Styled.ChatButton>
    </Styled.Wrapper>
  );
};

export default HomePage;
