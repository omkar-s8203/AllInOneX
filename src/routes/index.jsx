import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Blogging from "../modules/Blogging/pages/BloggingPage";
import Weather from "../modules/Weather/pages/WeatherPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import HomePage from "../pages/HomePage/HomePage";
import Header from "../components/Header/Header";
import Insta from "../modules/Insta/pages/InstaPage";
import Shop from "../modules/ECommerce/pages/Shop";
import "./AppRoutes.css"; // Import CSS for styling
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AccountPage from "../pages/Account/AccountHomePage";
import Auth from "../pages/Auth/Auth";

function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <div className="app-container">
        {/* Show header only if the user is authenticated */}
        {isAuthenticated && <Header />}
        <main
          className="app-content"
          style={isAuthenticated ? {} : { height: "100vh" }}
        >
          <Routes>
            {/* Public Routes */}
            {!isAuthenticated && (
              <>
                {/* Add the route for Auth */}
                <Route path="/auth" element={<Auth />} />
                {/* <Route path="/auth" element={<Auth />}>
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
              </Route> */}

                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            )}

            {/* Private Routes */}
            {isAuthenticated && (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/insta" element={<Insta />} />
                <Route path="/news" element={<Insta />} />
                <Route path="/blogging" element={<Blogging />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutes;
