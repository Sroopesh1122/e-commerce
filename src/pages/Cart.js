import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import moveToTop from "../Healpers/ScrollToTop";
import Container from "../components/Container";
const Cart = () => {
  return (
    <div>
      <Meta title="Cart" />
      <BreadCrum title="Cart" />
      <Container class1="cart-wrapper py-5 home-wrapper-2">
        <div className="cart-header">
          <div className="row">
            <div className="col-6">
              <h3 className="text-start ms-3">Product</h3>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-between ">
              <div className="col-4">
                <h3 className="text-center">Price</h3>
              </div>
              <div className="col-4">
                <h3 className="text-center">Quantity</h3>
              </div>
              <div className="col-4">
                <h3 className="text-center">Total</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-data py-3 d-flex flex-column gap-3">
          <div className="row cart-product py-2">
            <div className="col-6">
              <Link
                onClick={() => {
                  moveToTop();
                }}
                to={"/store/product/:id"}
                className="d-flex justify-content-center gap-4 cart-box"
              >
                <img
                  className="img-fluid prod-img"
                  src="../images/watch.jpg"
                  alt=""
                />
                <div className="product-details d-flex flex-column gap-1">
                  <h5 className="title mb-0">
                    Kids Headphone bulk 10 pack
                    mulbjkbbbjblbjbblbnlknjbbkjbjkbkbkti colored for students
                  </h5>
                  <p className="color mb-0">Color : Red</p>
                  <p className="size mb-0">Sixe: XL</p>
                </div>
              </Link>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-between ">
              <div className="col-4">
                <p className="text-center mb-0 price">$200</p>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center gap-3 ">
                <input
                  type="number"
                  min={0}
                  placeholder="0"
                  className="form-control"
                />
                <AiTwotoneDelete className="fs-3 delete" />
              </div>
              <div className="col-4">
                <p className="text-center mb-0 totle">$800</p>
              </div>
            </div>
          </div>
          <div className="row cart-product py-2">
            <div className="col-6">
              <Link
                onClick={() => {
                  moveToTop();
                }}
                to={"/store/product/:id"}
                className="d-flex justify-content-center gap-4 cart-box"
              >
                <img
                  className="img-fluid prod-img"
                  src="../images/watch.jpg"
                  alt=""
                />
                <div className="product-details d-flex flex-column gap-1">
                  <h5 className="title mb-0">
                    Kids Headphone bulk 10 pack
                    mulbjkbbbjblbjbblbnlknjbbkjbjkbkbkti colored for students
                  </h5>
                  <p className="color mb-0">Color : Red</p>
                  <p className="size mb-0">Sixe: XL</p>
                </div>
              </Link>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-between ">
              <div className="col-4">
                <p className="text-center mb-0 price">$200</p>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-center gap-3 ">
                <input
                  type="number"
                  min={0}
                  placeholder="0"
                  className="form-control"
                />
                <AiTwotoneDelete className="fs-3 delete" />
              </div>
              <div className="col-4">
                <p className="text-center mb-0 totle">$800</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-footer py-3 d-flex justify-content-between px-5">
          <div className="d-flex flex-column gap-2 align-items-start">
            <Link
              to={"/store"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="button rounded-pill"
            >
              Continue to Shop
            </Link>
            <p className="mb-0 ms-1">Other Special products</p>
          </div>
          <div className=" mt-3 d-flex flex-column gap-1 align-items-end">
            <h3 className="mb-0 subtotal">SubTotal : $10000.00</h3>
            <p className="mb-0 dec">
              Taxes and shipping calcutated at checkout
            </p>
            <Link
              to="/checkout"
              className="button w-100 text-center mt-3 rounded-pill"
            >
              CheckOut
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
