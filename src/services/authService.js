import api from '../utils/api';

export const login = async (loginId, password) => {
    return await api.post('/user/login', { loginId, password });
};

export const signup = async (userData) => {
    return await api.post('/auth/signup', userData);
};

export const forgotPassword = async (email) => {
    return await api.post('/auth/forgot-password', { email });
};
