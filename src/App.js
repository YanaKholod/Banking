import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Cards from "./pages/Cards";
import Payments from "./pages/Payments";
import Communication from "./pages/Communication";
import Deposits from "./pages/Deposits";
import Moneybox from "./pages/Moneybox";
import Charity from "./pages/Charity";
import Footer from "./components/Footer";
import RailwayTransport from "./pages/TransportSubmenu/RailwayTransport";
import BusTransport from "./pages/TransportSubmenu/BusTransport";
import FlightTransport from "./pages/TransportSubmenu/FlightTransport";
import HealthIns from "./pages/InsuranceSubmenu/HealthIns";
import ProtectionIns from "./pages/InsuranceSubmenu/ProtectionIns";
import OscpvIns from "./pages/InsuranceSubmenu/OscpvIns";
import TravelIns from "./pages/InsuranceSubmenu/TravelIns";
import RealEstateIns from "./pages/InsuranceSubmenu/RealEstateIns";
import FraudIns from "./pages/InsuranceSubmenu/FraudIns";
import ElectronicSignature from "./pages/BusinessSubmenu/ElectronicSignature";
import TransactionsSalaries from "./pages/BusinessSubmenu/TransactionsSalaries";
import DocumentManagement from "./pages/BusinessSubmenu/DocumentManagement";
import CorporateDocuments from "./pages/BusinessSubmenu/CorporateDocuments";
import Frehat from "./pages/CommunicationSubmenu/Frehat";
import Volia from "./pages/CommunicationSubmenu/Volia";
import Kiyvstar from "./pages/CommunicationSubmenu/Kiyvstar";
import Prosto from "./pages/CommunicationSubmenu/Prosto";
import Viasat from "./pages/CommunicationSubmenu/Viasat";
import Troilan from "./pages/CommunicationSubmenu/Troilan";
import UkrTelecom from "./pages/CommunicationSubmenu/UkrTelecom";
import Vega from "./pages/CommunicationSubmenu/Vega";
import MobileTopUp from "./pages/CommunicationSubmenu/MobileTopUp";
import CreditLimit from "./pages/CreditsSubmenu/CreditLimit";
import PaymentInInstallments from "./pages/CreditsSubmenu/PaymentInInstallments";
import InstantInstallment from "./pages/CreditsSubmenu/InstantInstallment";
import CashLoan from "./pages/CreditsSubmenu/CashLoan";
import LeasingCars from "./pages/CreditsSubmenu/LeasingCars";
import HousingLoan from "./pages/CreditsSubmenu/HousingLoan";
import OverduePayments from "./pages/CreditsSubmenu/OverduePayments";
import styled from "styled-components";
import { COLORS } from "./constants/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "./redux/auth/actions";
import CompaniesForAdmin from "./Companies/CompaniesForAdmin";
import AdminRoute from "./PrivateRoute/AdminRoute";
import SettingsPage from "./PrivateRoute/SettingsPage";
import PaymentForm from "./PrivateRoute/PaymentForm";

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
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser());
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <Styled.Page>
        <Header />
        <Routes>
          {/* <Route path="paymentForm" element={<PaymentForm />} /> */}
          <Route path="settings" element={<SettingsPage />} />
          <Route path="admin" element={<CompaniesForAdmin />} />
          <Route path="/" element={<HomePage />} />
          <Route path="payments" element={<Payments />} />
          <Route path="communication" element={<Communication />} />
          <Route path="deposits" element={<Deposits />} />
          <Route path="moneybox" element={<Moneybox />} />
          <Route path="cards" element={<Cards />} />
          <Route path="charity" element={<Charity />} />
          <Route
            path="transport/railwayTickets"
            element={<RailwayTransport />}
          />
          <Route path="transport/busTickets" element={<BusTransport />} />
          <Route path="transport/flightTickets" element={<FlightTransport />} />
          <Route path="insurance/health" element={<HealthIns />} />
          <Route path="insurance/forEveryDay" element={<ProtectionIns />} />
          <Route path="insurance/oscpv" element={<OscpvIns />} />
          <Route path="insurance/travel" element={<TravelIns />} />
          <Route path="insurance/realEstate" element={<RealEstateIns />} />
          <Route path="insurance/fraud" element={<FraudIns />} />
          <Route path="business/esfanp" element={<ElectronicSignature />} />
          <Route
            path="business/transactionsSalaries"
            element={<TransactionsSalaries />}
          />
          <Route
            path="business/documentManagement"
            element={<DocumentManagement />}
          />
          <Route
            path="business/corporateClients"
            element={<CorporateDocuments />}
          />
          <Route path="comm/mobile" element={<MobileTopUp />} />
          <Route path="comm/volia" element={<Volia />} />
          <Route path="comm/kiyvstar" element={<Kiyvstar />} />
          <Route path="comm/ukrtel" element={<UkrTelecom />} />
          <Route path="comm/vega" element={<Vega />} />
          <Route path="comm/viasat" element={<Viasat />} />
          <Route path="comm/prosto" element={<Prosto />} />
          <Route path="comm/triolan" element={<Troilan />} />
          <Route path="comm/frehat" element={<Frehat />} />
          <Route path="credits/limits" element={<CreditLimit />} />
          <Route path="credits/payments" element={<PaymentInInstallments />} />
          <Route path="credits/instant" element={<InstantInstallment />} />
          <Route path="credits/cashLoan" element={<CashLoan />} />
          <Route path="credits/leasing" element={<LeasingCars />} />
          <Route path="credits/housingLoan" element={<HousingLoan />} />
          <Route path="credits/overdue" element={<OverduePayments />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Styled.Page>
    </BrowserRouter>
  );
}

export default App;
