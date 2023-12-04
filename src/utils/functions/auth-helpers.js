export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const setRefreshToken = (refreshToken) => {
    localStorage.setItem('refreshToken', refreshToken);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const getRefreshToken = () => {
    return localStorage.getItem('refreshToken');
};

export const removeToken = () => {
    localStorage.removeItem('token');
};

export const removeRefreshToken = () => {
    localStorage.removeItem('refreshToken');
};