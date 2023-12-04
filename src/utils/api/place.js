import axios from "axios";
import appMenu from "../../config/endpoints/client";

const basePlace = appMenu.places.basePlaces;

export const getPlace = async (id) => {
  if (!id) return console.log("Error: id is missing");
  return new Promise((resolve, reject) => {
    try {
      const response = axios.get(`${basePlace}${id}`);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateDefaultLang = async (id, lang) => {
  if (!id || !lang) return console.log("Error: id or lang is missing");
  return await axios.put(`${basePlace}default-lang/${id}`, { dflt_lang: lang });
};
