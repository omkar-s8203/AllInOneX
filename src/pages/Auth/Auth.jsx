import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Footer from "./Footer";

const Auth = () => {
    const [view, setView] = useState("login");

    const renderComponent = () => {
        switch (view) {
            case "login":
                return <Login setView={setView} />;
            case "signup":
                return <Signup setView={setView} />;
            case "forgotPassword":
                return <ForgotPassword setView={setView} />;
            default:
                return <Login setView={setView} />;
        }
    };

    return (
        <div className="auth-container">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <form
                    className="card p-4 shadow-lg"
                    style={{ maxWidth: "400px", width: "100%" }}
                >
                    <h1 className="h3 mb-3 fw-normal text-center">
                        {view === "login"
                            ? "Login Page"
                            : view === "signup"
                            ? "Sign Up Page"
                            : "Forgot Password"}
                    </h1>
                    {renderComponent()}
                    <div className="d-flex flex-column mt-3">
                        {view !== "signup" && (
                            <p>
                                Don't have an account?{" "}
                                <a href="#" onClick={() => setView("signup")}>
                                    Signup
                                </a>
                            </p>
                        )}
                        {view !== "forgotPassword" && (
                            <p>
                                Forgot password?{" "}
                                <a href="#" onClick={() => setView("forgotPassword")}>
                                    Reset here
                                </a>
                            </p>
                        )}
                        {view !== "login" && (
                            <p>
                                Already have an account?{" "}
                                <a href="#" onClick={() => setView("login")}>
                                    Login
                                </a>
                            </p>
                        )}
                    </div>
                    <Footer />
                </form>
            </div>
        </div>
    );
};

export default Auth;
