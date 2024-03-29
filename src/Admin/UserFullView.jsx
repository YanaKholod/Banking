import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById } from "../redux/auth/actions";
import { BottomArrowIcon, UserIcon } from "../constants/icons";
import { Navigate } from "react-router-dom";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
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
    line-height: 30px;
  `,
  CardBlock: styled.div``,
  TransactionBlock: styled.div`
    margin-bottom: 10px;
  `,
  CardLine: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
  `,
  CardItem: styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${COLORS.LIGHTER_FOREGROUND};
    padding: 10px;
    width: 50%;
    div {
      line-height: 30px;
    }
  `,
  CardImage: styled.img`
    width: 170px;
    height: 100px;
    margin-bottom: 10px;
    border-radius: 5px;
  `,
  BlockItem: styled.div`
    border-bottom: 1px solid ${COLORS.LIGHTER_TEXT};
    color: rgba(255, 255, 255, 0.54);
    width: 50%;
  `,
  IncomeArrow: styled.span`
    color: ${COLORS.ACCENT};
    font-size: 20px;
  `,
  OutcomeArrow: styled.span`
    color: red;
    font-size: 20px;
  `,
  TransactionContainer: styled.div`
    max-height: 300px;
    overflow-y: auto;
  `,
  Sum: styled.span`
    color: ${COLORS.ACCENT};
  `,
  OutSum: styled.span`
    color: red;
  `,
  IconBlock: styled.div`
    width: 100px;
    height: 100px;
  `,
  DepositBlock: styled.div`
    margin-bottom: 10px;
    background-color: ${COLORS.LIGHTER_FOREGROUND};
    padding: 20px;
    border-radius: 5px;
  `,
  Rate: styled.span`
    color: #6969d8;
  `,
  DepositChapter: styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
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

  useEffect(() => {
    if (id && user) {
      dispatch(fetchUserById(id));
    }
  }, [dispatch, id, user]);
  return (
    <Styled.Wrapper>
      {userForDetails && user && (
        <Styled.Info>
          <Styled.UserInfo>
            <Styled.IconBlock>
              <UserIcon />
            </Styled.IconBlock>
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
                  <Styled.CardImage
                    src={cardTypeImages[card.cardType]}
                    alt={`${card.cardType} Card`}
                  />
                  <div>
                    <div> Type: {card.cardType}</div>
                    <div> Number: {card.cardNumber}</div>
                    <div> Balance: {card.balance} UAH</div>
                  </div>
                </Styled.CardItem>{" "}
                <div>
                  <BottomArrowIcon width="24px" height="24px" />
                </div>
              </Styled.CardBlock>
              {activeCard === index && (
                <Styled.TransactionContainer>
                  <div>
                    {userForDetails.outcomingTransactions
                      .filter(
                        (transaction) => transaction.cardType === card.cardType
                      )
                      .map((transaction, transactionIndex) => (
                        <Styled.TransactionBlock
                          key={`outcoming-${transactionIndex}`}
                        >
                          <Styled.BlockItem>
                            <div>
                              <Styled.OutcomeArrow> ⇨</Styled.OutcomeArrow>
                            </div>
                            <div>Date: {transaction.date}</div>
                            <div>
                              Amount:
                              <Styled.OutSum>
                                {transaction.amount} UAH
                              </Styled.OutSum>
                            </div>
                            <div>
                              Company: {transaction.company.companyName}
                            </div>
                            <div>Purpose: {transaction.purpose}</div>
                          </Styled.BlockItem>
                        </Styled.TransactionBlock>
                      ))}
                  </div>
                  <div>
                    {userForDetails.outgoingCardTransactions
                      .filter(
                        (transaction) => transaction.cardType === card.cardType
                      )
                      .map((transaction, transactionIndex) => (
                        <Styled.TransactionBlock
                          key={`outgoingCard-${transactionIndex}`}
                        >
                          <Styled.BlockItem>
                            <div>
                              <Styled.OutcomeArrow> ⇨</Styled.OutcomeArrow>
                            </div>
                            <div>Date: {transaction.date}</div>
                            <div>
                              Amount:
                              <Styled.OutSum>
                                {transaction.amount} UAH
                              </Styled.OutSum>
                            </div>
                            {transaction.recipient.fullName && (
                              <div>
                                Recipient: {transaction.recipient.fullName}
                              </div>
                            )}
                            <div>Purpose: {transaction.purpose}</div>
                          </Styled.BlockItem>
                        </Styled.TransactionBlock>
                      ))}
                  </div>
                  <div>
                    {userForDetails.incomingCardTransactions
                      .filter(
                        (transaction) => transaction.cardType === card.cardType
                      )
                      .map((transaction, transactionIndex) => (
                        <Styled.TransactionBlock
                          key={`incomingCard-${transactionIndex}`}
                        >
                          <Styled.BlockItem>
                            <div>
                              <Styled.IncomeArrow> ⇦</Styled.IncomeArrow>
                            </div>
                            <div>Date: {transaction.date}</div>
                            <div>
                              Amount:
                              <Styled.Sum> {transaction.amount} UAH</Styled.Sum>
                            </div>
                            {transaction.sender.fullName && (
                              <div>Sender: {transaction.sender.fullName}</div>
                            )}
                            <div>Purpose: {transaction.purpose}</div>
                          </Styled.BlockItem>
                        </Styled.TransactionBlock>
                      ))}
                  </div>
                </Styled.TransactionContainer>
              )}
            </Styled.CardLine>
          ))}
        </Styled.Info>
      )}
      <Styled.DepositChapter>
        {user && userForDetails && userForDetails.deposits.length > 0 && (
          <div>
            <h3>Deposits</h3>
            {userForDetails.deposits.map((item) => (
              <Styled.DepositBlock key={item._id}>
                <div>
                  Sum of deposit:{" "}
                  <Styled.Sum>{item.sumOfDeposit} UAH</Styled.Sum>
                </div>
                <div>
                  Rate : <Styled.Rate>{item.interestRate} %</Styled.Rate>
                </div>
                <div>Deposit Type: {item.depositType}</div>
                <div>
                  For withdrawal:
                  <Styled.Sum>
                    {item.sumOfDeposit * item.interestRate} UAH
                  </Styled.Sum>
                </div>
              </Styled.DepositBlock>
            ))}
          </div>
        )}
      </Styled.DepositChapter>
      {user && user.role !== "admin" && <Navigate to="/" />}
    </Styled.Wrapper>
  );
};

export default UserFullView;
