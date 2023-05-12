import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PrivateRoute from "./utils/privateRoute";
import Cards from "./pages/Cards";
import Payments from "./pages/Payments";
import Communication from "./pages/Communication";
import Deposits from "./pages/Deposits";
import Moneybox from "./pages/Moneybox";
import Credits from "./pages/Credits";
import Transport from "./pages/Transport";
import Charity from "./pages/Charity";
import Fun from "./pages/Fun";
import Insurance from "./pages/Insurance";
import Business from "./pages/Business";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="payments" element={<Payments />} />
            <Route path="communication" element={<Communication />} />
            <Route path="deposits" element={<Deposits />} />
            <Route path="moneybox" element={<Moneybox />} />
            <Route path="credits" element={<Credits />} />
            <Route path="cards" element={<Cards />} />
            <Route path="transport" element={<Transport />} />
            <Route path="insurance" element={<Insurance />} />
            <Route path="fun" element={<Fun />} />
            <Route path="charity" element={<Charity />} />
            <Route path="business" element={<Business />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
