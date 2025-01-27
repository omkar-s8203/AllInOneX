import api from '../utils/api';

export const loginCall = async (loginId, password) => {
    return await api.post('/user/login', { loginId, password });
};

export const signupCall = async (userData) => {
    return await api.post('/user/create', userData);
};

export const forgotPasswordCall = async (email) => {
    return await api.post('/auth/forgot-password', { email });
};
