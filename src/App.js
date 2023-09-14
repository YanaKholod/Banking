import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Cards from "./pages/Cards";
import Payments from "./pages/Payments";
import Deposits from "./pages/Deposits";
import Moneybox from "./pages/Moneybox";
import Charity from "./pages/Charity";
import Footer from "./components/Footer";
import styled from "styled-components";
import { COLORS } from "./constants/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrentUser } from "./redux/auth/actions";
import SettingsPage from "./Forms/SettingsPage";
import PaymentForm from "./Forms/PaymentForm";
import AdminPanel from "./Admin/AdminPanel";
import UserFullView from "./Admin/UserFullView";
import CompanyFullView from "./Admin/CompanyFullView";
import LoginModal from "./Forms/LoginModal";

const Styled = {
  Page: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${COLORS.CONTENT_BACKGROUND};
    color: ${COLORS.TEXT};
  `,
};
function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
    if (!isLoggedIn) {
      const loginModalTimeout = setTimeout(() => {
        setLoginModalVisible(true);
      }, 20000);

      return () => clearTimeout(loginModalTimeout);
    }
  }, [token, dispatch, isLoggedIn]);

  return (
    <BrowserRouter>
      <Styled.Page>
        <Header />
        <Routes>
          {user && (
            <Route path="payment/:companyId" element={<PaymentForm />} />
          )}
          <Route path="settings" element={<SettingsPage />} />
          <Route path="admin/*" element={<AdminPanel />} />
          <Route path="admin/users/fullView/:id" element={<UserFullView />} />
          <Route
            path="admin/companies/fullView/:id"
            element={<CompanyFullView />}
          />
          <Route path="/" element={<HomePage />} />
          <Route path="payments" element={<Payments />} />
          <Route path="deposits" element={<Deposits />} />
          <Route path="moneybox" element={<Moneybox />} />
          <Route path="cards" element={<Cards />} />
          <Route path="charity" element={<Charity />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {loginModalVisible && !isLoggedIn && (
          <LoginModal
            visible={loginModalVisible}
            onClose={() => setLoginModalVisible(false)}
          />
        )}
        <Footer />
      </Styled.Page>
    </BrowserRouter>
  );
}

export default App;
