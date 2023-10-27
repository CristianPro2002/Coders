import { getUserId } from "../functions/auth-helpers";

export const INITIAL_PLACE_HOME = {
  logo: "",
  name: "",
  langs: [],
  dflt_lang: "",
  others_langs: [],
  type: "",
  navbar_web: [],
  navbar_menu: [],
  home: { background_img: "", background_color: "" },
  theme: "",
  users_id: [getUserId()],
};

export const INITIAL_PLACE_HOME_EDIT = {
  logo: "",
  name: "",
  langs: [],
  dflt_lang: "",
  home: {},
  type: "",
  theme: "",
  users_id: [],
};
