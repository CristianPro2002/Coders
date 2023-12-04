const NEXT_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const appMenu = {
    accounts: {
        baseAccounts: `${NEXT_BASE_URL}account/`,
    },
    users: {
        baseUsers: `${NEXT_BASE_URL}user/`,
        login: `${NEXT_BASE_URL}user/login`,
        loginGoogle: `${NEXT_BASE_URL}user/login-google`,
        validToken: `${NEXT_BASE_URL}user/validate-token`,
        loadRefreshToken: `${NEXT_BASE_URL}user/refresh-token`,
        validRefreshToken: `${NEXT_BASE_URL}user/validate-refresh-token`,
        sendEmail: `${NEXT_BASE_URL}user/send-email`,
        resetPassword: `${NEXT_BASE_URL}user/reset-password`,
    },
    places: {
        basePlaces: `${NEXT_BASE_URL}place/`,
    },
    categories: {
        baseCategories: `${NEXT_BASE_URL}category/`,
    },
    subcategories: {
        baseSubCategories: `${NEXT_BASE_URL}subcategory/`,
    },
    products: {
        baseProducts: `${NEXT_BASE_URL}product/`,
    },
    menus: {
        baseMenus: `${NEXT_BASE_URL}menu/`,
    }
}

export default appMenu;