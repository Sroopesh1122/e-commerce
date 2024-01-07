import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <div>
      <Meta title="Create Account" />
      <BreadCrum title="Create Account" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="title text-center mb-4">Sign Up</h3>
              <form action="#" className="d-flex flex-column gap-15 needs-validation"  novalidate>
                <CustomInput Class={"form-floating mb-3"} name='name' type='text' id='floatingInput' placeholder='name@example.com' label={'Name'}/>
                 <CustomInput Class={"form-floating mb-3"} name='email' type={'email'} id={"floatingInput1"} placeholder={"name@example.com"} label={'Email'}/>
                 <CustomInput Class={"form-floating mb-3"} name='mobile' type={'tel'} id={"floatingInput2"} placeholder={"name@example.com"} label={'Mobile Number'}/>
                 <CustomInput Class={"form-floating mb-3"} name={'password'} type={'password'} id={"floatingInput3"} placeholder={"name@example.com"} label={"password "}/>
                <div className="mt-4">
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button rounded-pill border-0">
                      Create
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
