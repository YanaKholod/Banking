import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { COLORS } from "../constants/styled";
import { fetchAllUsers } from "../redux/auth/actions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Styled = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px;
    height: 100vh;
    min-width: 90vw;
    max-width: 90vw;
  `,
  Container: styled.div`
    width: 100%;
    text-align: center;
    background-color: ${COLORS.BLOCK_BACKGROUND};
    text-decoration: none;
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
    text-decoration: none;
    color: ${COLORS.TEXT};
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
  ItemRow: styled(Link)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-decoration: none;
  `,
  ItemSecondRow: styled.div`
    grid-template-columns: 50px 3fr 1fr;
    display: grid;
    border-bottom: 1px solid ${COLORS.LIGHTER_TEXT};
    text-decoration: none;
    :hover {
      background-color: ${COLORS.HEADER_BACKGROUND};
    }
  `,
  Pagination: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    button {
      font-weight: bold;
      font-size: 16px;
      margin: 0 10px;
      padding: 5px 10px;
      border-radius: 5px;
      border: none;
      background-color: ${COLORS.DESCRIPTION_COLOR};
      cursor: pointer;
      &:hover {
        background-color: ${COLORS.BUTTON_BACKGROUND};
      }
    }
    span {
      font-weight: bold;
    }
    select {
      border-radius: 4px;
      padding: 5px;
      background-color: transparent;
      border: 1px solid ${COLORS.LIGHTER_TEXT};
      color: white;
    }
  `,
  Loading: styled.div`
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  `,
};

const UsersForAdmin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.usersArray);
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const path = location.pathname;
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === "admin") {
      dispatch(fetchAllUsers({ page, perPage }))
        .then((response) => {
          const { currentPage, totalPages } = response.payload;
          setPage(currentPage);
          setTotalPages(totalPages);
          setIsLoading(false);
          navigate(`?page=${page}&perPage=${perPage}`);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          setIsLoading(false);
        });
    }
  }, [dispatch, user, page, perPage]);

  if (isLoading) {
    return <Styled.Loading>Loading...</Styled.Loading>;
  }

  const handlePageChange = async (newPage) => {
    if (page <= totalPages) {
      setPage(newPage);
      await setPage(newPage);
      navigate(`?page=${page}&perPage=${perPage}`);
    }
  };

  const handlePerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
    setPage(1);
    navigate(`?page=1&perPage=${perPage}`);
  };
  // const handleDeleteUser = async (_id) => {
  //   await dispatch(deleteCompanyById(_id));
  //   await dispatch(fetchAllUsers());
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
            <Styled.ItemSecondRow key={index}>
              <Styled.Cell>{index + 1}</Styled.Cell>
              <Styled.ItemRow to={`${path}/fullView/${item._id}`}>
                <Styled.Cell>{item.fullName}</Styled.Cell>
                <Styled.Cell>{item.phone}</Styled.Cell>
                <Styled.Cell>{item.role}</Styled.Cell>
              </Styled.ItemRow>
              <Styled.ButtonCell>
                <Styled.Button>Delete</Styled.Button>
              </Styled.ButtonCell>
            </Styled.ItemSecondRow>
          ))}
          <Styled.Pagination>
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>
            <span> Page {page} </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
            <select
              value={perPage}
              onChange={(e) => handlePerPageChange(parseInt(e.target.value))}
            >
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
            </select>
          </Styled.Pagination>
        </Styled.Container>
      )}
      {user.role !== "admin" && <Navigate to="/" />}
    </Styled.Wrapper>
  );
};

export default UsersForAdmin;
