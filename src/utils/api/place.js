import axios from "axios";
import appMenu from "../../config/endpoints/client";

const basePlace = appMenu.places.basePlaces;

export const getPlaces = async () => {
    return await axios.get(basePlace);
};

export const getPlace = async id => {
    return await axios.get(`${basePlace}${id}`);
};

export const updateDefaultLang = async (id, lang) => {
    if(!id || !lang) return console.log('Error: id or lang is missing')
    return await axios.put(`${basePlace}default-lang/${id}`, { dflt_lang: lang });
};