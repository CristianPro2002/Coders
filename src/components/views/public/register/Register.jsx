import { Link } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";
import { useSubmitsRegister } from "../../../../utils/hooks/useSubmitsRegister";
import { PATHSPROJECT } from "../../../../utils/constants/pathsProject";
import {
  STEP_CONGRATULATIONS_PAGE,
  STEP_FIRST_PAGE,
  STEP_SECOND_PAGE,
  STEP_THIRD_PAGE,
} from "../../../../utils/constants/stepRegisterPage";
import LoadingRombo from "../../../ui/loadings/loading_rombo/LoadingRombo";
import "./Register.css";

export default function Register() {
  const {
    contextHolder,
    loading,
    page,
    user,
    error,
    handleSubmitStepOne,
    handleSubmitStepTwo,
    handleSubmitStepThree,
    handleChange,
  } = useSubmitsRegister();

  const { login } = PATHSPROJECT;

  return (
    <>
      {loading ? (
        <LoadingRombo complete={true} />
      ) : (
        <>
          <section className="register">
            <main className="register-content">
              {contextHolder}
              {page === STEP_FIRST_PAGE ? (
                <div>
                  <div className="register-contentTitle">
                    <span className="register-title">Sign up</span>
                    <p className="register-subtitle">
                      Register to start the process of your site
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmitStepOne}
                    className="register-form"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      value={user.name}
                      id="name"
                      className="register-inputName"
                    />
                    <input
                      type="number"
                      name="phone"
                      placeholder="Number Phone"
                      onChange={handleChange}
                      value={user.phone}
                      id="phone"
                      className="register-inputNumber"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={user.email}
                      id="email"
                      className="register-inputEmail"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      value={user.password}
                      id="password"
                      className="register-inputPassword"
                    />
                    {error.length ? (
                      <p className="register-error">{error}</p>
                    ) : null}
                    <div className="register-contentNext">
                      <button className="register-ButtonNext">Continue</button>
                    </div>
                  </form>
                  <div className="register-contentLink">
                    ¿you already have an account?
                    <Link className="register-linkSignin" to={login}>
                      Click here
                    </Link>
                  </div>
                </div>
              ) : null}
              {page === STEP_SECOND_PAGE ? (
                <div>
                  <div className="register-contentTitle">
                    <span className="register-title">Sign up</span>
                    <p className="register-subtitle">
                      Register to start the process of your site
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmitStepTwo}
                    className="register-form"
                  >
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      onChange={handleChange}
                      value={user.country}
                      id="country"
                      className="register-inputCountry"
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      onChange={handleChange}
                      value={user.city}
                      id="city"
                      className="register-inputCity"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      onChange={handleChange}
                      value={user.state}
                      id="state"
                      className="register-inputState"
                    />
                    <input
                      type="text"
                      name="address_one"
                      placeholder="Address one"
                      onChange={handleChange}
                      value={user.address_one}
                      id="address_one"
                      className="register-inputAddressOne"
                    />
                    <input
                      type="text"
                      name="address_two"
                      placeholder="Address optional"
                      onChange={handleChange}
                      value={user.address_two}
                      id="address_two"
                      className="register-inputAddressTwo"
                    />
                    {error.length ? (
                      <p className="register-error">{error}</p>
                    ) : null}
                    <div className="register-contentNext">
                      <button className="register-ButtonNext">Continue</button>
                    </div>
                  </form>
                  <div className="register-contentLink">
                    ¿you already have an account?
                    <Link className="register-linkSignin" to={login}>
                      Click here
                    </Link>
                  </div>
                </div>
              ) : null}
              {page === STEP_THIRD_PAGE ? (
                <div>
                  <div className="register-contentTitle">
                    <span className="register-title">Sign up</span>
                    <p className="register-subtitle">
                      Register to start the process of your site
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmitStepThree}
                    className="register-form"
                  >
                    <input
                      type="text"
                      name="business_name"
                      placeholder="Business name"
                      onChange={handleChange}
                      value={user.business_name}
                      id="business_name"
                      className="register-inputBusinessName"
                    />
                    <input
                      type="number"
                      name="zip_code"
                      placeholder="Zip code"
                      onChange={handleChange}
                      value={user.zip_code}
                      id="zip_code"
                      className="register-inputZipCode"
                    />
                    <input
                      type="text"
                      name="vat_id"
                      placeholder="Vat id"
                      onChange={handleChange}
                      value={user.vat_id}
                      id="vat_id"
                      className="register-inputVatId"
                    />
                    {error.length ? (
                      <p className="register-error">{error}</p>
                    ) : null}
                    <div className="register-contentNext">
                      <button className="register-ButtonNext">Continue</button>
                    </div>
                  </form>
                  <div className="register-contentLink">
                    ¿you already have an account?
                    <Link className="register-linkSignin" to={login}>
                      Click here
                    </Link>
                  </div>
                </div>
              ) : null}
              {page === STEP_CONGRATULATIONS_PAGE ? (
                <div>
                  <CheckOutlined className="register-iconCheck" />
                  <span className="register-titleCongratulations">
                    ¡congratulations! you registered successfully{" "}
                  </span>
                  <div className="centered">
                    <Link className="register-buttonBack" to={login}>
                      Back to login
                    </Link>
                  </div>
                </div>
              ) : null}
            </main>
          </section>
        </>
      )}
    </>
  );
}
