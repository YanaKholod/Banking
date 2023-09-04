import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import CompaniesForAdmin from "./CompaniesForAdmin";
import UsersForAdmin from "./UsersForAdmin";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px;
    height: 100vh;
  `,
  Link: styled(NavLink)`
    text-decoration: none;
    padding: 8px;
    border-radius: 5px;
    color: ${COLORS.TEXT};
    background-color: ${COLORS.LIGHTER_FOREGROUND};
    margin-left: 10px;
    margin-bottom: 20px;
    font-weight: bold;
    &.active {
      color: black;
      background-color: ${COLORS.ACCENT};
    }
  `,
  LinksBlock: styled.div`
    border-bottom: 1px solid ${COLORS.LIGHTER_TEXT};
    text-align: center;
    padding: 20px;
    width: 95%;
  `,
};

const AdminPanel = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Styled.Wrapper>
      <Styled.LinksBlock>
        <Styled.Link to="users"> Users</Styled.Link>
        <Styled.Link to="companies"> Companies</Styled.Link>
      </Styled.LinksBlock>
      <div>
        {path === "/admin/users" && <UsersForAdmin />}
        {path === "/admin/companies" && <CompaniesForAdmin />}
      </div>
    </Styled.Wrapper>
  );
};

export default AdminPanel;
