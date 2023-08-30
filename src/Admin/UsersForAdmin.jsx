import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCompany,
  deleteCompanyById,
  fetchAllCompanies,
  updateCompany,
} from "../redux/companies/actions";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { fetchAllUsers } from "../redux/auth/actions";
import { Link, useLocation } from "react-router-dom";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    margin: 15px;
    height: 100vh;
  `,
  Container: styled.div`
    width: 100%;
    text-align: center;
    background-color: ${COLORS.BLOCK_BACKGROUND};
  `,
  Row: styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr;
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

const UsersForAdmin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.usersArray);
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const path = location.pathname;

  console.log("USERS", users);

  useEffect(() => {
    if (user.role === "admin") {
      dispatch(fetchAllUsers());
    }
  }, [dispatch, user.role]);

  // const handleDeleteCompany = async (_id) => {
  //   await dispatch(deleteCompanyById(_id));
  //   await dispatch(fetchAllCompanies());
  // };

  // const handleEditCompany = async (data) => {
  //   await dispatch(updateCompany(data));
  //   await dispatch(fetchAllCompanies());
  // };

  // const handleCreateCompanySubmit = async (data) => {
  //   await dispatch(addCompany(data));
  //   await dispatch(fetchAllCompanies());
  // };

  return (
    <Styled.Wrapper>
      <Styled.CreateRow></Styled.CreateRow>
      {user.role === "admin" && (
        <Styled.Container>
          <Styled.Row isFirstRow>
            <Styled.Header>№</Styled.Header>
            <Styled.Header>Name</Styled.Header>
            <Styled.Header>Phone</Styled.Header>
            <Styled.Header>Role</Styled.Header>
            <Styled.Header>Settings</Styled.Header>
          </Styled.Row>
          {users.map((item, index) => (
            <Link to={`${path}/${item._id}`} key={index}>
              <Styled.Cell>{index + 1}</Styled.Cell>
              <Styled.Cell>{item.fullName}</Styled.Cell>
              <Styled.Cell>{item.phone}</Styled.Cell>
              <Styled.Cell>{item.role}</Styled.Cell>
              <Styled.ButtonCell>
                <Styled.Button>Edit</Styled.Button>
                <Styled.Button>Delete</Styled.Button>
              </Styled.ButtonCell>
            </Link>
            // {/* </Styled.Row> */}
          ))}
        </Styled.Container>
      )}
      {user.role !== "admin" && (
        <div>You do not have permission to access this page.</div>
      )}
    </Styled.Wrapper>
  );
};

export default UsersForAdmin;
