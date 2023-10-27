/**
 * @description Este metodo se encarga de resetear el estado de los formularios
 * @returns {void}
 */
export const resetForm = (setState, state) => {
  const stateModified = () => {
    let data = {};
    for (let index = 0; index < Object.keys(state).length; index++) {
      const element = Object.keys(state)[index];
      data[element] = "";
    }

    return data;
  };

  const data = stateModified();

  setState(data);
};
