import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../redux/auth/actions";
import { BottomArrowIcon, UserIcon } from "../constants/icons";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
  `,
  Info: styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    padding-left: 50px;
    flex-direction: column;
    margin: 20px;
    width: 100%;
  `,
  UserInfo: styled.div`
    display: flex;
    margin-bottom: 20px;
  `,
  CardBlock: styled.div``,
  TransactionBlock: styled.div`
    color: rgba(255, 255, 255, 0.54);
    margin-bottom: 3px;
  `,
  CardLine: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
  `,
  CardItem: styled.div`
    background-color: ${COLORS.LIGHTER_FOREGROUND};
    padding: 10px 10px;
  `,
  CardImage: styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  `,
};
const cardTypeImages = {
  Internet: "https://wallpapercave.com/wp/wp4358501.jpg",
  Plastic: "https://i.postimg.cc/QN5z8FJc/51-Ze-LNXdv-L-AC-SL1500-1.jpg",
  Digital: "https://wallpapercave.com/wp/wp9126648.jpg",
};
const UserFullView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userForDetails = useSelector((state) => state.auth.userForDetails);
  const [activeCard, setActiveCard] = useState(null);
  //   console.log("user", user);

  useEffect(() => {
    if (id && user) {
      dispatch(fetchUserById(id));
    }
  }, [dispatch, id, user]);

  // const cardImageUrl = cardTypeImages[card.cardType];
  return (
    <Styled.Wrapper>
      {userForDetails && (
        <Styled.Info>
          <Styled.UserInfo>
            <UserIcon width="100px" height="100px" />
            <div>
              <div>Name: {userForDetails.fullName}</div>
              <div>Phone: {userForDetails.phone}</div>
              <div>Role: {userForDetails.role}</div>
            </div>
          </Styled.UserInfo>
          {userForDetails.cards.map((card, index) => (
            <Styled.CardLine key={card._id}>
              <Styled.CardBlock
                isActive={activeCard === index}
                onClick={() =>
                  setActiveCard(activeCard === index ? null : index)
                }
              >
                <Styled.CardItem>
                  {/* <Styled.CardImage
                    src={cardImageUrl}
                    alt={`${card.cardType} Card`}
                  /> */}

                  <div> Type: {card.cardType}</div>
                  <div> Number: {card.cardNumber}</div>
                  <div> Balance: {card.balance}</div>
                </Styled.CardItem>
                <div>
                  <BottomArrowIcon width="24px" height="24px" />
                </div>
              </Styled.CardBlock>
              {activeCard === index && (
                <div>
                  {userForDetails.outcomingTransactions
                    .filter(
                      (transaction) => transaction.cardType === card.cardType
                    )
                    .map((transaction, transactionIndex) => (
                      <Styled.TransactionBlock key={transactionIndex}>
                        <div>
                          <div>Date:{transaction.date}</div>
                          <div>Amount: {transaction.amount} UAH</div>
                          <div>Company: {transaction.company.companyName}</div>
                          <div>Purpose: {transaction.purpose}</div>
                        </div>
                      </Styled.TransactionBlock>
                    ))}
                </div>
              )}
            </Styled.CardLine>
          ))}
        </Styled.Info>
      )}
    </Styled.Wrapper>
  );
};

export default UserFullView;
