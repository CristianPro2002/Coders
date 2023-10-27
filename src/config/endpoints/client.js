const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_BASE_DOMAIN = import.meta.env.VITE_BASE_DOMAIN;
const VITE_TOKEN_DOMAINS = import.meta.env.VITE_TOKEN_DOMAINS;

const endPoints = {
  accounts: {
    baseAccounts: `${VITE_BASE_URL}account/`,
  },
  users: {
    baseUsers: `${VITE_BASE_URL}user/`,
    login: `${VITE_BASE_URL}user/login`,
    loginGoogle: `${VITE_BASE_URL}user/login-google`,
    logout: `${VITE_BASE_URL}user/logout`,
    validToken: `${VITE_BASE_URL}user/validate-token`,
    loadRefreshToken: `${VITE_BASE_URL}user/refresh-token`,
    validRefreshToken: `${VITE_BASE_URL}user/validate-refresh-token`,
    sendEmail: `${VITE_BASE_URL}user/send-email`,
    resetPassword: `${VITE_BASE_URL}user/reset-password`,
  },
  places: {
    basePlaces: `${VITE_BASE_URL}place/`,
    placesByUser: `${VITE_BASE_URL}place/user/`,
    placeStepHome: `${VITE_BASE_URL}place/home`,
    placeStepAbout: `${VITE_BASE_URL}place/about-us/`,
    placeStepContact: `${VITE_BASE_URL}place/contact-us/`,
    placeStepCustoms: `${VITE_BASE_URL}place/customs/`,
    placeEditStepHome: `${VITE_BASE_URL}place/home/edit/`,
    placeEditStepAbout: `${VITE_BASE_URL}place/about-us/edit/`,
    placeEditStepContact: `${VITE_BASE_URL}place/contact-us/edit/`,
    placeEditStepCustoms: `${VITE_BASE_URL}place/customs/edit/`,
    dflt_lang: `${VITE_BASE_URL}place/default-lang/`,
    themePlace: `${VITE_BASE_URL}place/theme/`,
  },
  categories: {
    baseCategories: `${VITE_BASE_URL}category/`,
    categoriesByMenu: `${VITE_BASE_URL}category/menu/`,
    productsByCategory: `${VITE_BASE_URL}category/products/`,
  },
  subcategories: {
    baseSubCategories: `${VITE_BASE_URL}subcategory/`,
    productsBySubCategory: `${VITE_BASE_URL}subcategory/products/`,
  },
  products: {
    baseProducts: `${VITE_BASE_URL}product/`,
    productsByCategory: `${VITE_BASE_URL}product/category/`,
    productsByAccount: `${VITE_BASE_URL}product/account/`,
  },
  menus: {
    baseMenus: `${VITE_BASE_URL}menu/`,
  },
  dominios: {
    baseDomains: `${VITE_BASE_DOMAIN}`,
    tokenDomain: `Token=${VITE_TOKEN_DOMAINS}`,
  },
  google: {
    google0auth2: "https://www.googleapis.com/oauth2/v3/userinfo",
  },
};

export default endPoints;
