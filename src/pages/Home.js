import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Meta title="E commerce" />
      <Container key={1} class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main-banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p>
                  From $999.00 <br />
                  or $41.62/mo
                </p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>buy iPad Air</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>buy iPad Air</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>buy iPad Air</h5>
                  <p>
                    From $999.00 <br />
                    or $41.62/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container key={2} class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services.map((data, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="d-flex align-items-center gap-15"
                    >
                      <img src={data.image} alt="services" />
                      <div>
                        <h6>{data.tagline}</h6>
                        <p className="mb-0">{data.title}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container key={3} class1="home-wrapper-3 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Watchs</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Smart Watchs</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-10 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container key={4} class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container key={5} class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row g-1">
          <div className="col-3">
            <div className="famous-card  p-1 position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous product"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo .for 24 mon..</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card  p-1 position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous product"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio display</h5>
                <h6 className="text-dark">600 bits</h6>
                <p className="text-dark">
                  From $399 or $16.62/mo .for 24 mon..
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card  p-1 position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous product"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch Series 7</h6>
                <p className="text-dark">
                  From $399 or $16.62/mo .for 24 mon..
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card  p-1 position-relative">
              <img
                src="images/famous-04.webp"
                className="img-fluid"
                alt="famous product"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big Screen</h5>
                <h6 className="text-dark">Smart Watch Series 7</h6>
                <p className="text-dark">
                  From $399 or $16.62/mo .for 24 mon..
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container  key={6}  class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row g-2">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container key={7}  class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container  key={8} class1="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex" pauseOnHover="true">
                <div className="mx-4 w-100">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-100">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-100">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-100">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-100">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-100">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-100">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container key={9}  class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our latest Blogs</h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
      
    </>
  );
};

export default Home;
