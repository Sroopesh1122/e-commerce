import React, { useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrum title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row ">
          <div className="col-3 ">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul>
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="inStock"
                  />
                  <label htmlFor="inStock" className="form-check-label">
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="outStock"
                    checked
                  />
                  <label htmlFor="outStock" className="form-check-label">
                    Out of Stock (0)
                  </label>
                </div>
              </div>
              <div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex gap-10">
                  <div className="form-floating ">
                    <input
                      type="number"
                      class="form-control "
                      id="from"
                      placeholder="From"
                      min={0}
                    />
                    <label htmlfor="from">From</label>
                  </div>
                  <div className="form-floating ">
                    <input
                      type="number"
                      class="form-control "
                      id="to"
                      placeholder="To"
                    />
                    <label htmlfor="to">To</label>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h5 className="sub-title">Colors</h5>
                <div>
                  <Color
                    selectable={true}
                    colors={["red", "blue", "black", "green"]}
                  />
                </div>
              </div>
              <h5 className="sub-title mt-4">Size</h5>
              <div>
                <div className="form-check mb-0 ">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="size1"
                  />
                  <label htmlFor="size1" className="form-check-label">
                    S (2)
                  </label>
                </div>
                <div className="form-check mb-0 ">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="size2"
                  />
                  <label htmlFor="size2" className="form-check-label">
                    S (3)
                  </label>
                </div>
                <div className="form-check mb-0 ">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value=""
                    id="size3"
                  />
                  <label htmlFor="size3" className="form-check-label">
                    M (1)
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-item-center gap-1">
                  <span className="badge bg-light text-secondary px-3 py-2 rounded-5 font-weight-light">
                    Headphones
                  </span>
                  <span className="badge bg-light text-secondary px-3 py-2 rounded-5 font-weight-light">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary px-3 py-2 rounded-5 font-weight-light">
                    Mobiles
                  </span>
                  <span className="badge bg-light text-secondary px-3 py-2 rounded-5 font-weight-light">
                    Speakers
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div className="d-flex flex-column">
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/headphone.jpg"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for student
                    </h5>
                    <ReactStars
                      count={5}
                      size={17}
                      value={2}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p>
                      <b>$ 300</b>
                    </p>
                  </div>
                </div>
                <div className="random-products d-flex ">
                  <div className="w-50">
                    <img
                      src="images/headphone.jpg"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for student
                    </h5>
                    <ReactStars
                      count={5}
                      size={17}
                      value={2}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p>
                      <b>$ 300</b>
                    </p>
                  </div>
                </div>
                <div className="random-products d-flex ">
                  <div className="w-50">
                    <img
                      src="images/headphone.jpg"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids headphones bulk 10 pack multi colored for student
                    </h5>
                    <ReactStars
                      count={5}
                      size={17}
                      value={2}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p>
                      <b>$ 300</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-10">
                  <p className="mb-0 mt-1 text-nowrap">Sort By : </p>
                  <select
                    name=""
                    className="form-select"
                    aria-label="Default select example"
                    id=""
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically ,A-Z</option>
                    <option value="title-decending">Alphabetically ,Z-A</option>
                    <option value="price-ascending">Price ,low to high</option>
                    <option value="price-decending">Price , high to low</option>
                    <option value="created-ascending">Date , old to new</option>
                    <option value="created-decending">Date , new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center ">
                  <p className="totalProducts mb-0 me-0">21 products : </p>
                  &nbsp;
                  <div className="d-flex align-items-center gap-10 grid">
                    <img
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                      onClick={() => {
                        setGrid(4);
                      }}
                    />

                    <img
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                      onClick={() => setGrid(3)}
                    />
                    <img
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                      onClick={() => setGrid(2)}
                    />
                    <img
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                      onClick={() => setGrid(1)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <motion.div
                layout
                className="d-flex gap-15 flex-wrap justify-content-start ps-4"
              >
                {/* <ProductsCart1 grid={grid} />
                 <ProductsCart1 grid={grid} />
                 <ProductsCart1 grid={grid} />
                 <ProductsCart1 grid={grid} />
                 <ProductsCart1 grid={grid} />
                 <ProductsCart1 grid={grid} /> */}
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
