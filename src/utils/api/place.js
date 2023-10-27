import axios from "axios";
import endPoints from "../../config/endpoints/client";
import { tokenValidation } from "../interceptors/token-validation";

const {
  basePlaces,
  placesByUser,
  placeStepHome,
  placeStepAbout,
  placeStepContact,
  placeStepCustoms,
  placeEditStepHome,
  placeEditStepAbout,
  placeEditStepContact,
  placeEditStepCustoms,
  dflt_lang,
  themePlace,
} = endPoints.places;

/**
 * @description Esta función obtiene todos los lugares.
 * @returns {Promise<Object>}
 */
export const getPlaces = async () => {
  return await axios.get(basePlaces);
};

/**
 * @description Esta función obtiene todos los lugares por usuario.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const getPlacesByUser = async (id) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.get(placesByUser + id);
            resolve(response);
          } catch (err) {
            console.log(err);
            reject(err);
          }
        } else {
          return reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * @description Esta función obtiene un lugar por id.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const getPlace = async (id) => {
  if (!id) return console.log("Error: id is missing");
  if (id) return await axios.get(basePlaces + id);
};

/**
 * @description Esta función trae el about de un lugar por id.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const getPlaceAbout = async (id) => {
  if (!id) return console.log("Error: id is missing");
  if (id) return await axios.get(placeStepAbout + id);
};

/**
 * @description Esta función trae el contact de un lugar por id.
 * @param {String} id
 * @returns
 */
export const getPlaceContact = async (id) => {
  if (!id) return console.log("Error: id is missing");
  if (id) return await axios.get(placeStepContact + id);
};

/**
 * @description Esta función trae los customs de un lugar por id.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const getPlaceCustoms = async (id) => {
  if (!id) return console.log("Error: id is missing");
  if (id) return await axios.get(placeStepCustoms + id);
};

/**
 * @description Esta función envia y crea el lugar y el home.
 * @param {Object} home
 * @returns {Promise<Object>}
 */
export const postPlaceHome = async (home) => {
  return new Promise((resolve, reject) => {
    if (!home) return reject({ message: "Error: home is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.post(placeStepHome, home);
            resolve(response);
          } catch (err) {
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

/**
 * @description Esta función envia y crea el about de un lugar.
 * @param {String} id
 * @param {Object} about
 * @returns {Promise<Object>}
 */
export const putPlaceAbout = async (id, about) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing" });
    if (!about) return reject({ message: "Error: about is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.put(placeStepAbout + id, about);
            resolve(response);
          } catch (err) {
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

/**
 * @description Esta función envia y crea el contact de un lugar.
 * @param {String} id
 * @param {Object} contact
 * @returns {Promise<Object>}
 */
export const putPlaceContact = async (id, contact) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing" });
    if (!contact) return reject({ message: "Error: contact is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.put(placeStepContact + id, contact);
            resolve(response);
          } catch (err) {
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

/**
 * @description Esta función envia y crea los customs de un lugar.
 * @param {String} id
 * @param {Array} customs
 * @returns {Promise<Object>}
 */
export const putPlaceCustoms = async (id, customs) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing" });
    if (!customs) return reject({ message: "Error: customs is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.put(placeStepCustoms + id, customs);
            resolve(response);
          } catch (err) {
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

/**
 *@description Esta función edita el home de un lugar.
 * @param {String} id
 * @param {Object} home
 * @return {Promise<Object>}
 */
export const placeEditHome = async (id, home) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing" });
    if (!home) return reject({ message: "Error: home is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.put(placeEditStepHome + id, home);
            resolve(response);
          } catch (err) {
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

/**
 * @description Esta función edita el about de un lugar.
 * @param {String} id
 * @param {Object} about
 * @returns {Promise<Object>}
 */
export const placeEditAbout = async (id, about) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing" });
    if (!about) return reject({ message: "Error: about is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.put(placeEditStepAbout + id, about);
            resolve(response);
          } catch (err) {
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

/**
 * @description Esta función edita la información de contacto de un lugar.
 * @param {String} id
 * @param {Object} contact
 * @returns {Promise<Object>}
 */
export const placeEditContact = async (id, contact) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing" });
    if (!contact) return reject({ message: "Error: contact is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.put(placeEditStepContact + id, contact);
            resolve(response);
          } catch (err) {
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

/**
 * @description Esta función edita los customs de un lugar.
 * @param {String} id
 * @param {Array} customs
 * @returns {Promise<Object>}
 */
export const placeEditCustoms = async (id, customs) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing" });
    if (!customs) return reject({ message: "Error: customs is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.put(placeEditStepCustoms + id, customs);
            resolve(response);
          } catch (err) {
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

/**
 * @description Esta función elimina un lugar por id.
 * @param {String} id
 * @returns {Promise<Object>}
 */
export const deletePlace = async (id) => {
  return new Promise((resolve, reject) => {
    if (!id) return reject({ message: "Error: id is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.delete(basePlaces + id);
            resolve(response);
          } catch (err) {
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

/**
 * @description Esta función actualiza el lengueje por defecto de un lugar.
 * @param {String} id
 * @param {Object} lang
 * @returns {Promise<Object>}
 */
export const updateDefaultLang = async (id, lang) => {
  return new Promise((resolve, reject) => {
    if (!id || !lang)
      return reject({ message: "Error: id or lang is missing" });
    try {
      const response = axios.put(dflt_lang + id, { dflt_lang: lang });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

/**
 * @description Esta función actualiza el tema de un lugar.
 * @param {String} id
 * @param {String} theme
 * @returns {Promise<Object>}
 */
export const updateTheme = async (id, theme) => {
  return new Promise((resolve, reject) => {
    if (!id || !theme)
      return reject({ message: "Error: id or theme is missing" });
    tokenValidation()
      .then((response) => {
        if (response) {
          try {
            const response = axios.put(themePlace + id, { theme });
            resolve(response);
          } catch (err) {
            reject(err);
          }
        } else {
          reject({ message: "Tu sesión ha expirado", sesion: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
