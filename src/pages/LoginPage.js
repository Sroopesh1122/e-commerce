import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrum title="Account" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="title text-center mb-4">Login</h3>
              <form action="#" className="d-flex flex-column gap-15">
              <CustomInput Class={"form-floating mb-3"} name='name' type='text' id='floatingInput' placeholder='name@example.com' label={'Name'}/>
              <CustomInput Class={"form-floating mb-3"} name={'password'} type={'password'} id={"floatingInput3"} placeholder={"name@example.com"} label={"password "}/>
                <div>
                  <Link to="/forgot-password">Forgot-Password ?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button
                      className="button rounded-pill border-0"
                      type="submit"
                    >
                      Login
                    </button>
                    <Link to="/signup" className="button rounded-pill signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default login;
