import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
  let [password, setPassword] = useState("p");
  let [cpassword, setCpassword] = useState("cp");
  let [isPasswordMtch, setPasswordMtch] = useState(false);
  useEffect(() => {
    if ((password.trim() !== "" && cpassword.trim()!=="" )&&(password.trim() === cpassword.trim())) {
      setPasswordMtch(true);
    } else {
      setPasswordMtch(false);
    }
  }, [cpassword, password]);
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrum title="Reset Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="title text-center mb-4">Reset Password</h3>
              <form action="#" className="d-flex flex-column gap-15">
              <CustomInput Class={"form-floating mb-3"} name={'password'} type={'password'} id={"floatingInput3"} placeholder={"name@example.com"} label={"Enter Password "} onC={setPassword}/>
              <CustomInput Class={"form-floating position-relative mb-3"} name={'confpassword'} type={'password'} id={"floatingInput1"} placeholder={"name@example.com"} label={"Confirm Password"} onC={setCpassword}>
              <label for="floatingInput1"></label>
                  {isPasswordMtch ? (
                    <img
                      className="img-fluid position-absolute tick"
                      src="images/tick.svg"
                      alt=""
                    />
                  ) : (
                    <></>
                  )}
              </CustomInput>
              
                
                <div className="mt-4">
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button rounded-pill border-0">
                      Reset Password
                    </button>
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

export default ResetPassword;
