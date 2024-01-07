import React from "react";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="checkout-left d-flex flex-column gap-5 justify-content-between">
              <div>
                <h3 className="website-title">6 Pack programmer</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <button className="link-button" href="#">Cart</button>
                    </li>

                    <li class="breadcrumb-item active" aria-current="page">
                      {" > "}Information
                    </li>
                    <li class="breadcrumb-item">
                      {" > "}
                      <button className="link-button" href="#">Shipping</button>
                    </li>
                    <li class="breadcrumb-item">
                      {" > "}
                      <button className="link-button" href="#">Payment</button>
                    </li>
                  </ol>
                </nav>
                <div className="mt-5 information">
                  <p className="mb-0 user-name">
                    ShivuRoopesh {"(shivuroopesh6362@gmail.com)"}
                  </p>
                  <p className="mb-0">6362379895</p>
                </div>
                <div className=" mt-3 ship-information d-flex flex-column gap-2">
                  <div className="address">
                    <h3>Address</h3>
                    <h5>
                      Dasenahalli Village Heassaraghtaaa Bangalore 560088
                      <p>6362379895</p>
                    </h5>
                  </div>
                  <a
                    className="btn ms-0"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Add new Shipping Address
                  </a>

                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      <div className="mt-4 shipping-info">
                        <form className="row g-3 needs-validation" novalidate>
                          <div className="col-md-4">
                            <label
                              for="validationCustom01"
                              className="form-label"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="validationCustom02"
                              className="form-label"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom02"
                              value="Otto"
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                          <div className="col-md-4">
                            <label
                              for="validationCustomUsername"
                              className="form-label"
                            >
                              Username
                            </label>
                            <div className="input-group has-validation">
                              <span
                                className="input-group-text"
                                id="inputGroupPrepend"
                              >
                                @
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustomUsername"
                                aria-describedby="inputGroupPrepend"
                                required
                              />
                              <div className="invalid-feedback">
                                Please choose a username.
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              for="validationCustom03"
                              className="form-label"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom03"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid city.
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label
                              for="validationCustom04"
                              className="form-label"
                            >
                              State
                            </label>
                            <select
                              className="form-select"
                              id="validationCustom04"
                              required
                            >
                              <option selected disabled value="">
                                Choose...
                              </option>
                              <option>...</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid state.
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label
                              for="validationCustom05"
                              className="form-label"
                            >
                              Zip
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom05"
                              required
                            />
                            <div className="invalid-feedback">
                              Please provide a valid zip.
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                                required
                              />
                              <label
                                className="form-check-label"
                                for="invalidCheck"
                              >
                                Agree to terms and conditions
                              </label>
                              <div className="invalid-feedback">
                                You must agree before submitting.
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <button class="btn btn-primary" type="submit">
                              Submit form
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-10">
                <a href="/cart">Return to Cart</a>
                <h2>All rights reserved (6Pack programmer)</h2>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="checkout-right py-4 rounded-5">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex mx-3 gap-4 checkout-box py-2">
                    <div className="position-relative">
                      <img
                        className="img-fluid prod-img"
                        src="../images/headphone.jpg"
                        alt=""
                      />
                      <span className="position-absolute badge bg-dark count rounded-pill">
                        2
                      </span>
                    </div>
                    <div className="d-flex  justify-content-between gap-5  align-items-center">
                      <div className="product-details d-flex flex-column gap-1">
                        <h5 className="title mb-0">Kids Headphone bulk 10</h5>
                        <p className="color mb-0">Color : Red</p>
                        <p className="size mb-0">Sixe: XL</p>
                      </div>
                      <p className="price mb-0">$100.0</p>
                    </div>
                  </div>
                </div>

                <div className="border-bottom sub-total col-12">
                  <div className=" d-flex justify-content-between px-5 py-3">
                    <h3 className="mb-0">Subtotal</h3>
                    <p className="mb-0">$200.00</p>
                  </div>
                  <div className="  d-flex justify-content-between px-5 py-3">
                    <h3 className="mb-0">Shipping</h3>
                    <p className="mb-0">$20.00</p>
                  </div>
                </div>
                <div className="total col-12">
                  <div className=" d-flex justify-content-between px-5 py-3">
                    <h2 className="mb-0">Total</h2>
                    <p className="mb-0">$220.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
