import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCompanyById,
  fetchAllCompanies,
} from "../redux/companies/actions";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import CompanyForm from "../PrivateRoute/CompanyForm";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 15px;
  `,
  Container: styled.div`
    width: 100%;
    text-align: center;
    background-color: ${COLORS.BLOCK_BACKGROUND};
  `,
  Row: styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr;
    border-bottom: 1px solid ${COLORS.LIGHTER_TEXT};
    &:last-child {
      border-bottom: none;
    }
    :hover {
      background-color: ${(props) =>
        props.isFirstRow ? "transparent" : COLORS.HEADER_BACKGROUND};
    }
  `,
  Header: styled.div`
    padding: 10px;
    text-align: center;
    font-weight: bold;
  `,
  Cell: styled.div`
    padding: 10px;
    text-align: center;
  `,
  ButtonCell: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `,
  Button: styled.button`
    text-align: center;
    padding: 6px;
    margin-right: 5px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: ${COLORS.DESCRIPTION_COLOR};
    :hover {
      background-color: ${COLORS.BUTTON_BACKGROUND};
    }
  `,
  CustomRodal: styled(Rodal)`
    .rodal-dialog {
      background-color: ${COLORS.HEADER_BACKGROUND};
    }
    .rodal-mask {
      background-color: rgba(0, 0, 0, 0.063);
    }
  `,
  CreateRow: styled.div`
    display: flex;
    width: 100%;
    align-items: end;
    justify-content: end;
    padding-right: 20px;
    padding-bottom: 10px;
    button {
      padding: 8px;
      font-weight: bold;
      font-size: 16px;
    }
  `,
};

const CompaniesForAdmin = () => {
  const [companyFormIsVisible, setCompanyFormIsVisible] = useState(false);

  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.companies);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.role === "admin") {
      dispatch(fetchAllCompanies());
    }
  }, [dispatch, user.role]);

  const handleDeleteCompany = (_id) => {
    dispatch(deleteCompanyById(_id));
  };
  const handleEditCompany = (_id) => {
    // dispatch(getCompanyById(_id))
  };
  const openCompanyModal = () => {
    setCompanyFormIsVisible(true);
    // const companyData=dispatch(getCompanyById(_id))
  };
  const closeCompanyModal = () => {
    setCompanyFormIsVisible(false);
  };

  return (
    <Styled.Wrapper>
      <Styled.CreateRow>
        <Styled.Button onClick={openCompanyModal}>Create</Styled.Button>
      </Styled.CreateRow>
      {user.role === "admin" && (
        <Styled.Container>
          <Styled.Row isFirstRow>
            <Styled.Header>№</Styled.Header>
            <Styled.Header>Company</Styled.Header>
            <Styled.Header>IBAN</Styled.Header>
            <Styled.Header>Code</Styled.Header>
            <Styled.Header>EDPNOU</Styled.Header>
            <Styled.Header>Settings</Styled.Header>
          </Styled.Row>
          {companies.map((item, index) => (
            <Styled.Row key={index}>
              <Styled.Cell>{index + 1}</Styled.Cell>
              <Styled.Cell>{item.companyName}</Styled.Cell>
              <Styled.Cell>{item.iban}</Styled.Cell>
              <Styled.Cell>{item.countryCode}</Styled.Cell>
              <Styled.Cell>{item.edpnou}</Styled.Cell>
              <Styled.ButtonCell>
                <Styled.Button onClick={openCompanyModal}>Edit</Styled.Button>
                <Styled.Button onClick={() => handleDeleteCompany(item._id)}>
                  Delete
                </Styled.Button>
                <Styled.CustomRodal
                  width={370}
                  height={480}
                  visible={companyFormIsVisible}
                  onClose={closeCompanyModal}
                >
                  <CompanyForm closeCompanyModal={closeCompanyModal} />
                </Styled.CustomRodal>
              </Styled.ButtonCell>
            </Styled.Row>
          ))}
        </Styled.Container>
      )}
      {user.role !== "admin" && (
        <div>You do not have permission to access this page.</div>
      )}
    </Styled.Wrapper>
  );
};

export default CompaniesForAdmin;
