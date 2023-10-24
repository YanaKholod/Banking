import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const ChatContainer = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 10px;
  right: 10px;
  padding: 10px;
  background: rgba(33, 33, 33, 0.871);
  color: white;
  border: 1px solid ${COLORS.ACCENT};
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ChatInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 100%;
    color: ${COLORS.LIGHTER_TEXT};
    border-style: none;
    border-width: 0px;
    border-radius: 0px;
    background: transparent;
    margin: 0px;
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 1px solid ${COLORS.HOVER};
    :hover {
      border-bottom: 2px solid ${COLORS.HOVER};
    }
    :focus {
      border-bottom: 2px solid ${COLORS.ACCENT};
    }
  }
  button {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
    cursor: pointer;
    padding: 3px 8px;
    background-color: transparent;
    color: ${COLORS.ACCENT};
    border: 1px solid ${COLORS.ACCENT};
    border-radius: 4px;
  }
`;
const ChatBox = styled.div`
  padding: 10px;
  height: 270px;
  width: 220px;
  max-height: 200px;
  overflow-y: auto;
  font-size: 13px;
  line-height: 1.5;
`;
const Chat = ({ closeChat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const newSocket = new WebSocket("wss://banking-5ah7.onrender.com/api");
    setSocket(newSocket);

    newSocket.onmessage = (event) => {
      const message = event.data;

      const reader = new FileReader();
      reader.onload = (e) => {
        const messageString = e.target.result;

        try {
          const parsedMessage = JSON.parse(messageString);
          setMessages((prevMessages) => [...prevMessages, parsedMessage]);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };

      reader.readAsText(message);
    };
    return () => {
      newSocket.close();
    };
  }, []);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const sendMessage = () => {
    if (newMessage) {
      const message = {
        text: newMessage,
        sender: user.fullName,
        role: user.role,
      };

      socket.send(JSON.stringify(message));
      addMessage(message);
      setNewMessage("");
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <ChatContainer>
      <div
        onClick={() => {
          closeChat();
        }}
      >
        x
      </div>
      <ChatBox>
        {messages.map((message) => (
          <div key={message.text}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </ChatBox>
      <ChatInputContainer>
        <input type="text" value={newMessage} onChange={handleInputChange} />
        <button onClick={sendMessage}>Send</button>
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default Chat;
