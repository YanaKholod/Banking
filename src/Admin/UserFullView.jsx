import React, { useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../redux/auth/actions";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `,
  Info: styled.div``,
};
const UserFullView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userForDetails = useSelector((state) => state.auth.userForDetails);
  //   console.log("user", user);
  console.log("userForDetails", userForDetails);

  useEffect(() => {
    if (id && user) {
      dispatch(fetchUserById(id));
    }
  }, [dispatch, id, user]);

  return (
    <Styled.Wrapper>
      {userForDetails && (
        <Styled.Info>
          <div>{userForDetails._id}</div>
          <div>{userForDetails.fullName}</div>
          <div>{userForDetails.phone}</div>
          <div>{userForDetails.role}</div>
          {userForDetails.cards.map((card) => (
            <div key={card._id}>
              <div>CardType: {card.cardType}</div>
              <div>{card.cardNumber}</div>
              <div>{card.balance}</div>
            </div>
          ))}
          {userForDetails.outcomingTransactions.map((transaction) => (
            <div key={transaction._id}>
              {/* <div>{transaction}</div> */}
              <div>{transaction.company.companyName}</div>
              <div>{transaction.date}</div>
              <div>{transaction.purpose}</div>
              <div>{transaction.amount}</div>
            </div>
          ))}
        </Styled.Info>
      )}
    </Styled.Wrapper>
  );
};

export default UserFullView;
