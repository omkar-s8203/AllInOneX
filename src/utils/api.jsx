import axios from "axios";

// Create an instance of axios
const api = axios.create({
  // baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api', // Replace with your backend API base URL
  baseURL: "http://localhost:3000/api", //allinonex_express@1.0.0 start
  timeout: 10000, // Optional: Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    // Handle errors globally
    console.error("API Error:", error.message);

    if (error.response) {
      // Handle API error responses
      return Promise.reject(error.response.data.error || error.message);
    }

    // Handle network or other errors
    return Promise.reject(error.message || "An unknown error occurred");
  }
);

export default api;
