import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCompanies } from "../redux/companies/actions";
import styled from "styled-components";
import { COLORS } from "../constants/styled";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    /* background-color: ${COLORS.FOREGROUND}; */
  `,
  Table: styled.table`
    width: 90%;
  `,
  TableHeader: styled.th`
    padding: 10px;
    font-weight: bold;
    border-bottom: 1px solid ${COLORS.TEXT};
  `,
  TableCell: styled.td`
    text-align: center;
    padding: 10px;
  `,
  TableRow: styled.tr`
    border-bottom: 1px solid ${COLORS.LIGHTER_TEXT};
    :hover {
      background-color: ${COLORS.FOREGROUND};
    }
  `,
};

const CompaniesForAdmin = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.companies);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.role === "admin") {
      dispatch(fetchAllCompanies());
    }
  }, [dispatch, user.role]);

  return (
    <Styled.Wrapper>
      {user.role === "admin" && (
        <Styled.Table>
          <thead>
            <Styled.TableRow>
              <Styled.TableHeader>№</Styled.TableHeader>
              <Styled.TableHeader>Company Name</Styled.TableHeader>
              <Styled.TableHeader>IBAN</Styled.TableHeader>
              <Styled.TableHeader>Country Code</Styled.TableHeader>
              <Styled.TableHeader>EDPNOU</Styled.TableHeader>
            </Styled.TableRow>
          </thead>
          <tbody>
            {companies.map((item, index) => (
              <Styled.TableRow key={index}>
                <Styled.TableCell>{index + 1}</Styled.TableCell>
                <Styled.TableCell>{item.companyName}</Styled.TableCell>
                <Styled.TableCell>{item.iban}</Styled.TableCell>
                <Styled.TableCell>{item.countryCode}</Styled.TableCell>
                <Styled.TableCell>{item.edpnou}</Styled.TableCell>
              </Styled.TableRow>
            ))}
          </tbody>
        </Styled.Table>
      )}
      {user.role !== "admin" && (
        <div>You do not have permission to access this page.</div>
      )}
    </Styled.Wrapper>
  );
};

export default CompaniesForAdmin;
