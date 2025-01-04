import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogging from "../modules/Blogging/pages/BloggingPage";
import Weather from "../modules/Weather/pages/WeatherPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
// import { AuthProvider } from "../context/AuthContext";
import Header from "../components/Header/Header";
import Insta from "../modules/Insta/pages/InstaPage";

function AppRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/insta" element={<Insta />} />
          <Route path="/blogging" element={<Blogging />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Router>
  );
}

export default AppRoutes;
