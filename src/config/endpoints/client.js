const VITE_BASE_URL = import.meta.env.VITE_BASE_URL

const appMenu = {
    accounts: {
        baseAccounts: `${VITE_BASE_URL}account/`,
    },
    users: {
        baseUsers: `${VITE_BASE_URL}user/`,
        login: `${VITE_BASE_URL}user/login`,
        loginGoogle: `${VITE_BASE_URL}user/login-google`,
        validToken: `${VITE_BASE_URL}user/validate-token`,
        loadRefreshToken: `${VITE_BASE_URL}user/refresh-token`,
        validRefreshToken: `${VITE_BASE_URL}user/validate-refresh-token`,
        sendEmail: `${VITE_BASE_URL}user/send-email`,
        resetPassword: `${VITE_BASE_URL}user/reset-password`,
    },
    places: {
        basePlaces: `${VITE_BASE_URL}place/`,
    },
    categories: {
        baseCategories: `${VITE_BASE_URL}category/`,
    },
    subcategories: {
        baseSubCategories: `${VITE_BASE_URL}subcategory/`,
    },
    products: {
        baseProducts: `${VITE_BASE_URL}product/`,
    },
    menus: {
        baseMenus: `${VITE_BASE_URL}menu/`,
    }
}

export default appMenu;