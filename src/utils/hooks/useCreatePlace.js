import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { BACKGROUND_IMG_NAME } from "../constants/nameAttribute";
import {
  getPlace,
  getPlaceAbout,
  getPlaceContact,
  getPlaceCustoms,
  placeEditAbout,
  placeEditContact,
  placeEditCustoms,
  placeEditHome,
  postPlaceHome,
  putPlaceAbout,
  putPlaceContact,
  putPlaceCustoms,
} from "../api/place";
import { MODE_CREATE_FORM } from "../constants/modeForm";
import { useAlert } from "./useAlert";
import { validationError } from "../functions/validation-error";
import { useCustomAlerts } from "./useCustomAlerts";

export const useCreatePlace = (INITIAL_PLACE, INITIAL_PLACE_EDIT) => {
  const [place, setPlace] = useState(INITIAL_PLACE);
  const [placeEdit, setPlaceEdit] = useState(INITIAL_PLACE_EDIT);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(MODE_CREATE_FORM);
  const [custom, setCustom] = useState(0);
  const { openAlert } = useAlert();
  const { messageApi, contextHolder, alertSuccess, alertError, alertLoading } =
    useCustomAlerts();

  let navigate = useNavigate();
  let locationIdPlace = useParams().id;
  /**
   * @description Reinicia el estado de place
   * @returns {void}
   */
  const resetPlace = () => {
    setPlace(INITIAL_PLACE);
  };

  /**
   * @description Cambia el estado de place con los datos del formulario
   * @returns {void}
   * @param {*} e
   */
  const handleChange = (e) => {
    setPlace({
      ...place,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * @description Cambia el estado de place con los datos de la imagen insertada
   * @param {*} e
   * @returns {void}
   */
  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (e.target.name != BACKGROUND_IMG_NAME) {
        const reader = new FileReader();
        reader.onload = () => {
          setPlace({
            ...place,
            [e.target.name]: reader.result,
          });
        };
        reader.readAsDataURL(file);
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          setPlace({
            ...place,
            home: {
              ...place.home,
              [e.target.name]: reader.result,
            },
          });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  /**
   * @description Cambia el estado de place con los datos de los idiomas seleccionados
   * @param {*} e
   * @returns {void}
   */
  const handleChangeOthersLangs = (e) => {
    if (place.langs.includes(e.target.value)) {
      return;
    }
    setPlace({
      ...place,
      langs: [...place.langs, e.target.value],
    });
  };

  const handleChangeOthersLangsEdit = (e) => {
    if (placeEdit.langs.includes(e.target.value)) {
      return;
    }
    setPlaceEdit({
      ...placeEdit,
      langs: [...placeEdit.langs, e.target.value],
    });
  };

  /**
   * @description Cambia el estado de placeEdit con los datos del formulario
   * @param {*} e
   * @returns {void}
   */
  const handleChangeEdit = (e) => {
    setPlaceEdit({
      ...placeEdit,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * @description Cambia el estado de placeEdit con los datos de la imagen insertada
   * @param {*} e
   * @returns {void}
   */
  const handleChangeImgEdit = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (e.target.name != BACKGROUND_IMG_NAME) {
        const reader = new FileReader();
        reader.onload = () => {
          setPlaceEdit({
            ...placeEdit,
            [e.target.name]: reader.result,
          });
        };
        reader.readAsDataURL(file);
      } else {
        const reader = new FileReader();
        reader.onload = () => {
          setPlaceEdit({
            ...placeEdit,
            home: {
              ...placeEdit.home,
              [e.target.name]: reader.result,
            },
          });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  /**
   * @description Cambia el estado de place en el campo background_color de home
   * @param {*} e
   * @param {String} hex
   * @returns {void}
   */
  const handleChangeColor = (e, hex) => {
    setPlace({
      ...place,
      home: {
        ...place.home,
        background_color: hex,
      },
    });
  };

  /**
   * @description Cambia el estado de placeEdit en el campo background_color de home
   * @param {*} e
   * @param {String} hex
   * @returns {void}
   */
  const handleChangeColorEdit = (e, hex) => {
    setPlaceEdit({
      ...placeEdit,
      home: {
        ...placeEdit.home,
        background_color: hex,
      },
    });
  };

  /**
   * @description Envia los datos del home de place al servidor
   * @returns {void}
   */
  const handleSubmit = () => {
    alertLoading("Loading...");
    setLoading(true);
    postPlaceHome(place)
      .then((res) => {
        if (res.status === 200) {
          setMode("edit");
          navigate("/dashboard/place-create/" + res.data.data._id);
          resetPlace();
          alertSuccess("Place created");
        }
        setLoading(false);
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setLoading(false);
      });
  };

  /**
   * @description Obtiene la información de home del place, modifica el estado de placeEdit
   * @returns {void}
   */
  const getPlaceHomePetition = () => {
    if (!locationIdPlace) return;
    getPlace(locationIdPlace)
      .then((res) => {
        if (Object.keys(res.data.data).length > 0) {
          setPlaceEdit(res.data.data);
        }
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
      });
  };

  /**
   * @description Envia los datos de home de place al servidor para editarlo
   * @returns {void}
   */
  const handleSubmitEditHome = () => {
    alertLoading("Loading...");
    setLoading(true);
    placeEditHome(locationIdPlace, placeEdit)
      .then((res) => {
        if (res.status === 200) {
          getPlaceHomePetition();
          alertSuccess("Home edited");
        }
        setLoading(false);
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setLoading(false);
      });
  };

  /**
   * @description Cambia el estado de place creando un objeto con los idiomas seleccionados
   * @param {*} e
   * @param {String} lang
   * @returns {void}
   */
  const handleChangeWithLang = (e, lang) => {
    setPlace({
      ...place,
      [e.target.name]: {
        ...place[e.target.name],
        [lang]: e.target.value,
      },
    });
  };

  /**
   * @description Cambia el estado de placeEdit creando un objeto con los idiomas seleccionados
   * @param {*} e
   * @param {String} lang
   * @returns {void}
   */
  const handleChangeWithLangEdit = (e, lang) => {
    setPlaceEdit({
      ...placeEdit,
      [e.target.name]: {
        ...placeEdit[e.target.name],
        [lang]: e.target.value,
      },
    });
  };

  /**
   * @description Cambia el estado de place de about con la imagen insertada
   * @param {*} e
   * @returns {void}
   */
  const handleChangeAboutImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPlace({
          ...place,
          [e.target.name]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * @description Cambia el estado de placeEdit de about con la información del formulario
   * @param {*} e
   * @returns {void}
   */
  const handleChangeAboutEdit = (e) => {
    setPlaceEdit({
      ...placeEdit,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * @description Cambia el estado de placeEdit de about con la imagen insertada
   * @param {*} e
   * @returns {void}
   */
  const handleChangeAboutImgEdit = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPlaceEdit({
          ...placeEdit,
          [e.target.name]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * @description Cambia el estado de place de about en el campo background_color
   * @param {*} e
   * @param {String} hex
   * @returns {void}
   */
  const handleChangeAboutColor = (e, hex) => {
    setPlace({
      ...place,
      background_color: hex,
    });
  };

  /**
   * @description Cambia el estado de placeEdit de about en el campo background_color
   * @param {*} e
   * @param {String} hex
   * @returns {void}
   */
  const handleChangeAboutColorEdit = (e, hex) => {
    setPlaceEdit({
      ...placeEdit,
      background_color: hex,
    });
  };

  /**
   * @description Obtiene la información de about del place, modifica el estado de placeEdit y setea el modo a edit
   * @returns {void}
   */
  const getPlaceAboutPetition = () => {
    if (!locationIdPlace) return;
    getPlaceAbout(locationIdPlace)
      .then((res) => {
        if (Object.keys(res.data.data).length > 0) {
          setMode("edit");
          setPlaceEdit(res.data.data);
        } else {
          setMode("create");
        }
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setMode("create");
      });
  };

  /**
   * @description Envia los datos de about de place al servidor para crearlo, reinicia el estado de place y setea el modo a edit
   * @returns {void}
   */
  const handleSubmitAbout = () => {
    alertLoading("Loading...");
    setLoading(true);
    putPlaceAbout(locationIdPlace, place)
      .then((res) => {
        if (res.status === 200) {
          resetPlace();
          getPlaceAboutPetition();
          alertSuccess("About created");
        }
        setLoading(false);
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setLoading(false);
      });
  };

  /**
   * @description Envia los datos de about de place al servidor para editarlo
   * @returns {void}
   */
  const handleSubmitEditAbout = () => {
    alertLoading("Loading...");
    setLoading(true);
    placeEditAbout(locationIdPlace, placeEdit)
      .then((res) => {
        if (res.status === 200) {
          getPlaceAboutPetition();
          alertSuccess("About edited");
        }
        setLoading(false);
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setLoading(false);
      });
  };

  /**
   * @description Obtiene la información de contact del place, modifica el estado de placeEdit y setea el modo a edit
   * @returns {void}
   */
  const getPlaceContactPetition = () => {
    if (!locationIdPlace) return;
    getPlaceContact(locationIdPlace)
      .then((res) => {
        if (Object.keys(res.data.data).length > 0) {
          setMode("edit");
          setPlaceEdit(res.data.data);
        } else {
          setMode("create");
        }
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setMode("create");
      });
  };

  /**
   * @description Cambia el estado de place añadiendo los dias del horario de contacto
   * @param {*} e 
   * @param {Number} index 
   * @param {String} lang 
   * @returns {void}
   */
  const handleChangeDaysContact = (e, index, lang) => {
    if (place[e.target.name][lang]) {
      setPlace({
        ...place,
        [e.target.name]: {
          ...place[e.target.name],
          [lang]: place[e.target.name][lang][index]
            ? [
                ...place[e.target.name][lang].map((item, i) => {
                  if (i === index) {
                    return {
                      ...item,
                      ["day"]: e.target.value,
                    };
                  } else {
                    return item;
                  }
                }),
              ]
            : [...place[e.target.name][lang], { ["day"]: e.target.value }],
        },
      });
    } else {
      setPlace({
        ...place,
        [e.target.name]: {
          ...place[e.target.name],
          [lang]: [
            {
              ["day"]: e.target.value,
            },
          ],
        },
      });
    }
  };

  /**
   * @description Cambia el estado de placeEdit añadiendo los dias del horario de contacto
   * @param {*} e 
   * @param {Number} index 
   * @param {String} lang 
   * @returns {void}
   */
  const handleChangeDaysContactEdit = (e, index, lang) => {
    if (placeEdit[e.target.name][lang]) {
      setPlaceEdit({
        ...placeEdit,
        [e.target.name]: {
          ...placeEdit[e.target.name],
          [lang]: placeEdit[e.target.name][lang][index]
            ? [
                ...placeEdit[e.target.name][lang].map((item, i) => {
                  if (i === index) {
                    return {
                      ...item,
                      ["day"]: e.target.value,
                    };
                  } else {
                    return item;
                  }
                }),
              ]
            : [...placeEdit[e.target.name][lang], { ["day"]: e.target.value }],
        },
      });
    } else {
      setPlaceEdit({
        ...placeEdit,
        [e.target.name]: {
          ...placeEdit[e.target.name],
          [lang]: [
            {
              ["day"]: e.target.value,
            },
          ],
        },
      });
    }
  };


  /**
   * @description Cambia el estado de place añadiendo las horas del horario de contacto
   * @param {Array} time 
   * @param {Array} timeString 
   * @param {Number} index 
   * @param {String} lang 
   * @returns {void}
   */
  const handleChangeHoursContact = (time, timeString, index, lang) => {
     if (place["open_hours"][lang]) {
      setPlace({
        ...place,
        ["open_hours"]: {
          ...place["open_hours"],
          [lang]: place["open_hours"][lang][index]
            ? [
                ...place["open_hours"][lang].map((item, i) => {
                  if (i === index) {
                    return {
                      ...item,
                      ["hours"]: timeString,
                    };
                  } else {
                    return item;
                  }
                }),
              ]
            : [...place["open_hours"][lang], { ["hours"]: timeString }],
        },
      });
    } else {
      setPlace({
        ...place,
        ["open_hours"]: {
          ...place["open_hours"],
          [lang]: [
            {
              ["hours"]: timeString,
            },
          ],
        },
      });
    }
  };

  /**
   * @description Cambia el estado de placeEdit añadiendo las horas del horario de contacto
   * @param {Array} time 
   * @param {Array} timeString 
   * @param {Number} index 
   * @param {String} lang 
   * @returns {void}
   */
  const handleChangeHoursContactEdit = (time, timeString, index, lang) => {
    if (placeEdit["open_hours"][lang]) {
     setPlaceEdit({
       ...placeEdit,
       ["open_hours"]: {
         ...placeEdit["open_hours"],
         [lang]: placeEdit["open_hours"][lang][index]
           ? [
               ...placeEdit["open_hours"][lang].map((item, i) => {
                 if (i === index) {
                   return {
                     ...item,
                     ["hours"]: timeString,
                   };
                 } else {
                   return item;
                 }
               }),
             ]
           : [...placeEdit["open_hours"][lang], { ["hours"]: timeString }],
       },
     });
   } else {
     setPlaceEdit({
       ...placeEdit,
       ["open_hours"]: {
         ...placeEdit["open_hours"],
         [lang]: [
           {
             ["hours"]: timeString,
           },
         ],
       },
     });
   }
  };

  const handleDeleteDay = (index, lang, countTime, setCountTime) => {
    setPlace({
      ...place,
      ["open_hours"]: {
        ...place["open_hours"],
        [lang]: place["open_hours"][lang].filter((item, i) => i !== index),
      },
    });
    setCountTime([...countTime.filter((item, i) => i !== index)]);
  };

  const handleDeleteDayModeEdit = (index, lang) => {
    setPlaceEdit({
      ...placeEdit,
      ["open_hours"]: {
        ...placeEdit["open_hours"],
        [lang]: placeEdit["open_hours"][lang].filter((item, i) => i !== index),
      },
    });
  };

  /**
   * @description Envia los datos de contact de place al servidor para crearlo, reinicia el estado de place y setea el modo a edit
   * @returns {void}
   */
  const handleSubmitContact = () => {
    alertLoading("Loading...");
    setLoading(true);
    putPlaceContact(locationIdPlace, place)
      .then((res) => {
        if (res.status === 200) {
          resetPlace();
          getPlaceContactPetition();
          alertSuccess("Contact created");
        }
        setLoading(false);
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setLoading(false);
      });
  };

  /**
   * @description Envia los datos de contact de place al servidor para editarlo
   * @returns {void}
   */
  const handleSubmitEditContact = () => {
    alertLoading("Loading...");
    setLoading(true);
    placeEditContact(locationIdPlace, placeEdit)
      .then((res) => {
        if (res.status === 200) {
          getPlaceContactPetition();
          alertSuccess("Contact edited");
        }
        setLoading(false);
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setLoading(false);
      });
  };

  /**
   * @description Cambia el estado de place en el array custom
   * @param {*} e
   * @param {String} lang
   * @returns {void}
   */
  const handleChangeCustom = (e, lang) => {
    setPlace(
      place.map((item, index) => {
        if (index === custom) {
          return {
            ...item,
            [e.target.name]: {
              ...item[e.target.name],
              [lang]: e.target.value,
            },
          };
        } else {
          return item;
        }
      })
    );
  };

  /**
   * @description Cambia el estado de placeEdit en el array custom
   * @param {*} e
   * @param {String} lang
   * @returns {void}
   */
  const handleChangeCustomEdit = (e, lang) => {
    setPlaceEdit(
      placeEdit.map((item, index) => {
        if (index === custom) {
          return {
            ...item,
            [e.target.name]: {
              ...item[e.target.name],
              [lang]: e.target.value,
            },
          };
        } else {
          return item;
        }
      })
    );
  };

  /**
   * @description Cambia el estado de place en el array slider_imgs de custom
   * @param {*} e
   * @returns {void}
   */
  const handleChangeCustomImgs = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPlace(
          place.map((item, index) => {
            if (index === custom) {
              return {
                ...item,
                [e.target.name]: [...item.slider_imgs, reader.result],
              };
            } else {
              return item;
            }
          })
        );
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * @description Cambia el estado de placeEdit en el array slider_imgs de custom
   * @param {*} e
   * @returns {void}
   */
  const handleChangeCustomImgsEdit = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPlaceEdit(
          placeEdit.map((item, index) => {
            if (index === custom) {
              return {
                ...item,
                [e.target.name]: [...item.slider_imgs, reader.result],
              };
            } else {
              return item;
            }
          })
        );
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * @description Elimina una imagen del array slider_imgs de custom
   * @param {Number} indexImg
   * @returns {void}
   */
  const resetSliderImgInCreateCustom1 = (indexImg) => {
    setPlace(
      place.map((item, index) => {
        if (index === custom) {
          return {
            ...item,
            slider_imgs: item.slider_imgs.filter((item, i) => i !== indexImg),
          };
        } else {
          return item;
        }
      })
    );
  };

  /**
   * @description Elimina una imagen del array slider_imgs de custom
   * @param {Number} indexImg
   * @returns {void}
   */
  const resetSliderImgInEditCustom1 = (indexImg) => {
    setPlaceEdit(
      placeEdit.map((item, index) => {
        if (index === custom) {
          return {
            ...item,
            slider_imgs: item.slider_imgs.filter((item, i) => i !== indexImg),
          };
        } else {
          return item;
        }
      })
    );
  };

  /**
   * @description Obtiene la información de customs del place, modifica el estado de placeEdit y setea el modo a edit
   * @returns {void}
   */
  const getPlaceCustomsPetition = () => {
    if (!locationIdPlace) return;
    getPlaceCustoms(locationIdPlace)
      .then((res) => {
        if (res.data.data.length > 0) {
          setMode("edit");
          setPlaceEdit(res.data.data);
        } else {
          setMode("create");
        }
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setMode("create");
      });
  };

  /**
   * @description Envia los datos de customs de place al servidor para crearlo, reinicia el estado de place y setea el modo a edit
   * @returns {void}
   */
  const handleSubmitCustoms = () => {
    alertLoading("Loading...");
    setLoading(true);
    putPlaceCustoms(locationIdPlace, place)
      .then((res) => {
        if (res.status === 200) {
          resetPlace();
          getPlaceCustomsPetition();
          alertSuccess("Customs created");
        }
        setLoading(false);
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setLoading(false);
      });
  };

  /**
   * @description Envia los datos de customs de place al servidor para editarlo
   * @returns {void}
   */
  const handleSubmitEditCustoms = () => {
    alertLoading("Loading...");
    setLoading(true);
    placeEditCustoms(locationIdPlace, placeEdit)
      .then((res) => {
        if (res.status === 200) {
          getPlaceCustomsPetition();
          alertSuccess("Customs edited");
        }
        setLoading(false);
      })
      .catch((err) => {
        const { title, message, type } = validationError(err);
        openAlert({
          title,
          message,
          type,
        });
        setLoading(false);
      });
  };

  return {
    place,
    setPlace,
    placeEdit,
    setPlaceEdit,
    custom,
    setCustom,
    handleChange,
    handleChangeImg,
    handleChangeOthersLangs,
    handleChangeOthersLangsEdit,
    handleChangeEdit,
    handleChangeImgEdit,
    handleChangeColor,
    handleChangeColorEdit,
    handleSubmit,
    handleSubmitEditHome,
    mode,
    setMode,
    locationIdPlace,
    handleChangeWithLang,
    handleChangeWithLangEdit,
    handleChangeAboutEdit,
    handleChangeAboutImg,
    handleChangeAboutImgEdit,
    handleChangeAboutColor,
    handleChangeAboutColorEdit,
    handleSubmitAbout,
    handleSubmitEditAbout,
    handleChangeDaysContact,
    handleChangeDaysContactEdit,
    handleChangeHoursContact,
    handleChangeHoursContactEdit,
    handleSubmitContact,
    handleSubmitEditContact,
    handleDeleteDay,
    handleDeleteDayModeEdit,
    handleChangeCustom,
    handleChangeCustomEdit,
    handleChangeCustomImgs,
    handleChangeCustomImgsEdit,
    resetSliderImgInCreateCustom1,
    resetSliderImgInEditCustom1,
    handleSubmitCustoms,
    handleSubmitEditCustoms,
    loading,
    setLoading,
    messageApi,
    contextHolder,
  };
};
