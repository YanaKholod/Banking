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
    background-color: ${COLORS.LIGHTER_FOREGROUND};
    padding: 10px;
    width: 50%;
  `,
  CardImage: styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
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
      {userForDetails && (
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
                                {" "}
                                {transaction.amount} UAH
                              </Styled.OutSum>
                            </div>
                            {transaction.recipient.fullName ? (
                              <div>
                                Recipient: {transaction.recipient.fullName}
                              </div>
                            ) : (
                              <div></div>
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
                            {transaction.sender.fullName ? (
                              <div>Sender: {transaction.sender.fullName}</div>
                            ) : (
                              <div></div>
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
    </Styled.Wrapper>
  );
};

export default UserFullView;
