import React, { useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyById } from "../redux/companies/actions";
import { Navigate } from "react-router-dom";

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
  CompanyInfo: styled.div`
    display: flex;
    margin-bottom: 20px;
    line-height: 30px;
  `,
  TransactionContainer: styled.div`
    max-height: 500px;
    overflow-y: auto;
  `,
  IncomeArrow: styled.span`
    color: ${COLORS.ACCENT};
    font-size: 20px;
  `,
  Sum: styled.span`
    color: ${COLORS.ACCENT};
  `,
  BlockItem: styled.div`
    border-bottom: 1px solid ${COLORS.LIGHTER_TEXT};
    color: rgba(255, 255, 255, 0.54);
    width: 50%;
  `,
  TransactionBlock: styled.div`
    margin-bottom: 10px;
  `,
};

const CompanyFullView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const companyForDetails = useSelector(
    (state) => state.companies.companyForTransaction
  );

  console.log("companyForDetails", companyForDetails);

  useEffect(() => {
    if (id && user) {
      dispatch(fetchCompanyById(id));
    }
  }, [dispatch, id, user]);

  return (
    <Styled.Wrapper>
      {companyForDetails && user && (
        <Styled.Info>
          <Styled.CompanyInfo>
            <div>
              <div>Company: {companyForDetails.companyName}</div>
              <div>Country code: {companyForDetails.countryCode}</div>
              <div>IBAN: {companyForDetails.iban}</div>
              <div>EDPNOU: {companyForDetails.edpnou}</div>
            </div>
          </Styled.CompanyInfo>
          <Styled.TransactionContainer>
            {companyForDetails.incomingTransactions.length > 0 ? (
              companyForDetails.incomingTransactions.map(
                (transaction, transactionIndex) => (
                  <Styled.TransactionBlock key={`incoming-${transactionIndex}`}>
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
                )
              )
            ) : (
              <div>No transactions yet</div>
            )}
          </Styled.TransactionContainer>
        </Styled.Info>
      )}
      {user && user.role !== "admin" && <Navigate to="/" />}
    </Styled.Wrapper>
  );
};

export default CompanyFullView;
