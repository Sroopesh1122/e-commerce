import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const ForgotPassword = () => {
  return (
    <div>
      <Meta title="Forgot Password" />
      <BreadCrum title="Forgot Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        
          <div className="row">
            <div className="col-12">
              <div className="login-card">
                <h3 className="title text-center mb-4">Reset Your Password</h3>
                <p className="text-center my-3">
                  We will send you an email to reset your password
                </p>
                <form action="#" className="d-flex flex-column gap-15">
                <div class="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email </label>
                  </div>
                  
                  <div>
                    <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                      <button className="button rounded-pill border-0">
                        Submit
                      </button>
                      <Link className="" to="/login">
                        Cancel
                      </Link>
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

export default ForgotPassword;
