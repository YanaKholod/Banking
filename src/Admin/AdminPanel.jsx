import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useMatch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import CompaniesForAdmin from "./CompaniesForAdmin";
import UsersForAdmin from "./UsersForAdmin";

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
  SMTH: styled.div`
    width: 100%;
    height: 100vh;
  `,
};

const AdminPanel = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Styled.Wrapper>
      <div>
        <Link to="users"> Users</Link>
        <Link to="companies"> Companies</Link>
      </div>
      <div>
        {path === "/admin/users" && <UsersForAdmin />}
        {path === "/admin/companies" && <CompaniesForAdmin />}
      </div>
    </Styled.Wrapper>
  );
};

export default AdminPanel;
