export const formRegisterValidation = ({ handleErrors, user }) => {
  const validateSteps = {
    stepOne: () => {
      if (user.name === "") {
        handleErrors("Name is required");
        return false;
      } else if (user.phone === "") {
        handleErrors("Number is required");
        return false;
      } else if (user.email === "") {
        handleErrors("Email is required");
        return false;
      } else {
        return true;
      }
    },
    stepTwo: () => {
      if (user.country === "") {
        handleErrors("Country is required");
        return false;
      } else if (user.city === "") {
        handleErrors("City is required");
        return false;
      } else if (user.state === "") {
        handleErrors("State is required");
        return false;
      } else if (user.address_one === "") {
        handleErrors("Address is required");
        return false;
      } else if (user.address_two === "") {
        handleErrors("Address is required");
        return false;
      } else {
        return true;
      }
    },

    stepThree: () => {
      if (user.business_name === "") {
        handleErrors("Company name is required");
        return false;
      } else if (user.zip_code === "") {
        handleErrors("Zip code is required");
        return false;
      } else if (user.vat_id === "") {
        handleErrors("NIF is required");
        return false;
      } else {
        return true;
      }
    },
  };

  return validateSteps;
};
