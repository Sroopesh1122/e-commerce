import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import Color from "../components/Color";
import Container from "../components/Container";
const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare Product" />
      <BreadCrum title="Compare Product" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row gap-1">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="compare-product-img">
                <img src="images/watch.jpg" alt="product" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0.1 GB RAM 8GB ROM 7inch with Wi-Fi +3G Tablet
                </h5>
                <h6 className="price mb-2 mt-3">$100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand :</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type :</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability :</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail gap-20">
                    <h5 className="text-nowrap me-3">Color :</h5>
                    <div className="color w-50">
                      <Color colors={["red", "green", "yellow"]} />
                    </div>
                  </div>
                  <div className="product-detail">
                    <h5>Size :</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="compare-product-img">
                <img src="images/watch.jpg" alt="product" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0.1 GB RAM 8GB ROM 7inch with Wi-Fi +3G Tablet
                </h5>
                <h6 className="price mb-2 mt-3">$100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand :</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type :</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availability :</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail gap-20">
                    <h5 className="text-nowrap me-3">Color :</h5>
                    <div className="color w-50">
                      <Color colors={["red", "green", "yellow"]} />
                    </div>
                  </div>
                  <div className="product-detail">
                    <h5>Size :</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
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

export default CompareProduct;
