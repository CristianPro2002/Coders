import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  logo: "",
  name: "",
  dflt_lang: "",
  theme: "",
  type: "",
  navbar_web: [
    {
      _id: "",
      title: {},
      icon: "",
      link: "",
    },
  ],
  navbar_menu: [
    {
      _id: "",
      icon: "",
      link: "",
    },
  ],
  home: {
    background_color: "",
    background_img: "",
  },
  about_us: {
    title: {},
    text: {},
    background_color: "",
    background_img: "",
  },
  contact_us: {
    title: {},
    text: {},
    address_title: {},
    address: "",
    phone: "",
    email: "",
    open_hours_title: {},
    open_hours: {},
    facebook: "",
    instagram: "",
    whatsapp: "",
    web: "",
  },
  customs: [
    {
      _id: "",
      title: {},
      slider_imgs: [],
      text: {},
    },
  ],
  user_id: "",
};

export const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const {
        _id,
        logo,
        name,
        dflt_lang,
        theme,
        type,
        navbar_web,
        navbar_menu,
        home,
        about_us,
        contact_us,
        customs,
        user_id,
      } = action.payload;
      state._id = _id;
      state.logo = logo;
      state.name = name;
      state.dflt_lang = dflt_lang;
      state.theme = theme;
      state.type = type;
      state.navbar_web = navbar_web;
      state.navbar_menu = navbar_menu;
      state.home = home;
      state.about_us = about_us;
      state.contact_us = contact_us;
      state.customs = customs;
      state.user_id = user_id;
    },
    setPlace: (state, action) => {
      const {
        _id,
        logo,
        name,
        dflt_lang,
        theme,
        type,
        navbar_web,
        navbar_menu,
        home,
        about_us,
        contact_us,
        customs,
        user_id,
      } = action.payload;

      state._id = _id;
      state.logo = logo;
      state.name = name;
      state.dflt_lang = dflt_lang;
      state.theme = theme;
      state.type = type;
      state.navbar_web = navbar_web;
      state.navbar_menu = navbar_menu;
      state.home = home;
      state.about_us = about_us;
      state.contact_us = contact_us;
      state.customs = customs;
      state.user_id = user_id;
    },
  },
});

export const { addPlace, setPlace } = placeSlice.actions;
export default placeSlice.reducer;
