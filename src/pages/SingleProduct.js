import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import ProductCard from "../components/ProductCard";
import { Tilt } from "react-tilt";
import ReactStars from "react-rating-stars-component";
import Color from "../components/Color";
import SizeSelecter from "../components/SizeSelecter";
import { TbGitCompare, TbHeart } from "react-icons/tb";
import ReadMoreReact from "read-more-react";
import Accordion from "../components/Accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaHeart } from "react-icons/fa";
import Container from "../components/Container";


const SingleProduct = () => {
  
  const [ordered, setOrdered] = useState(true);
  const defaultOptions = {
    reverse: false,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <>
      <Meta title={"Dynamic Prod title"} />
      <BreadCrum title={"Dynamic Prod title"} />
      <Container class1="main-product py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="parent">
                  <Tilt options={defaultOptions}>
                    <img
                      src="https://images.unsplash.com/photo-1534970028765-38ce47ef7d8d?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </Tilt>
                </div>
              </div>
              <div className="other-images d-flex flex-wrap gap-2 mt-3">
                <Tilt options={defaultOptions} className="tilt">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1534970028765-38ce47ef7d8d?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                </Tilt>

                <Tilt options={defaultOptions} className="tilt">
                  <div>
                    <img
                      src="../../images/watch.jpg"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                </Tilt>
                <Tilt options={defaultOptions} className="tilt">
                  <div>
                    <img
                      src="../../images/watch.jpg"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                </Tilt>
                <Tilt options={defaultOptions} className="tilt">
                  <div>
                    <img
                      src="../../images/famous-1.webp"
                      className="img-fluid"
                      alt="product"
                    />
                  </div>
                </Tilt>
              </div>
            </div>
            <div className="col-6">
              <div className="product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphone bulk 10 pack multi colored for students
                  </h3>
                </div>
                <div className="border-bottom mt-3 pb-2">
                  <p className="price">$100.00</p>
                  <div className="d-flex gap-2 align-items-center">
                    <ReactStars
                      count={5}
                      size={15}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 review">( Based on 2 Reviews )</p>
                  </div>
                  <div className="mt-1">
                    <a
                      href="#reviewSection"
                      className="review text-dark text-decoration-underline"
                    >
                      Write a review
                    </a>
                  </div>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="mb-0 product-heading">Type </h3>:
                    <p className="mb-0 product-data">GFD</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="mb-0 product-heading">Category </h3>:
                    <p className="mb-0 product-data">GFD</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="mb-0 product-heading">Brand </h3>:
                    <p className="mb-0 product-data">GFD</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="mb-0 product-heading">Tags</h3>:
                    <p className="mb-0 product-data">GFD</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="mb-0 product-heading">Availability</h3>:
                    <p className="mb-0 product-data">GFD</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="mb-0 product-heading">Size</h3>:
                    <SizeSelecter size={["S", "X", "M", "L", "XL", "XXL"]} />
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="mb-0 product-heading">Color</h3>:{" "}
                    <Color selectable={true} colors={["red", "blue", "black", "green"]} />
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="mb-0 product-heading">Quantity </h3>:
                    <div className="quantity">
                      <input
                        className="form-control"
                        type="number"
                        min={0}
                        placeholder="0"
                      />
                    </div>
                    <div className="mt-0 d-flex justify-content-center gap-15 align-items-center ms-3">
                      <button
                        className="button rounded-pill border-0"
                        type="button"
                      >
                        ADD TO CART
                      </button>
                      <button
                        to="#"
                        className=" button orange-button rounded-pill border-0 signup"
                      >
                        BUY IT NOW
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2 ">
                    <div className="d-flex gap-2 align-items-center">
                      <a href="#">
                        <TbGitCompare className="fs-4" />
                        Add to Compare
                      </a>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <a href="#">
                        <TbHeart className="fs-4" />
                        Add to wishlist
                      </a>
                    </div>
                  </div>
                  {/* <Accordion>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What harsh truths do you prefer to ignore?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Is free will real or just an illusion?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          In ad velit in ex nostrud dolore cupidatat consectetur
                          ea in ut nostrud velit in irure cillum tempor laboris
                          sed adipisicing eu esse duis nulla non.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion> */}

                  <Accordion
                    data={[
                      {
                        title: "Shipping & Returns",
                        details:
                          "bkdbskfdksfkjbdskjnkndklndklfnklndfkvnldfnlvnkldfnvklndfklvnlkfdvklndfklvnlfdnvlkdfnvkjndflvnkldfnvklndflnvklfdnbfkjsbdknlncskjdbfbsdbfkjsdkfbjksdbkjfbsdkbfksdkjbfkjsdkufkjsdfudsh",
                      },
                      { title: "Materials", details: "nbkjbdjkbs" },
                      { title: "Share", details: "Product link is here" },
                    ]}
                  />
                </div>
                <div className="border-bottom py-3">
                  <div>
                    Payment Links
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h3 className="title mb-2">Description</h3>

              <div className="product-desc py-3">
                <p>
                  <ReadMoreReact
                    text={
                      "  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Provident quas quasi ea animi ipsam recusandae facilismolestias in ratione, atque quia porro at beatae! Deseruntvoluptatem optio quos beatae quasi. Lorem, ipsum dolor siamet consectetur adipisicing elit. Perspiciatis providenterror similique ipsa voluptatum assumenda fugit eos. Officfugit natus magnam illum, dolore ex corrupti, unde molestiaeinventore voluptates doloribus quae, incidunt nam deseruntodio optio libero similique temporibus soluta iure numquam.Non eos perferendis alias corrupti voluptas. Officiis, quidem?"
                    }
                    readMoreText="Read more"
                  />
                </p>
              </div>
            </div>
          </div>
        
      </Container>
      <section
        className="review-wrapper py-5 home-wrapper-2"
        id="reviewSection"
      >
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="title mb-3">Reviews</h3>
              <div className="product-reviews">
                <div className="review-head d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <div>
                      <h5>Customer Reviews</h5>
                      <div className="d-flex gap-2 align-items-center">
                        <ReactStars
                          count={5}
                          size={15}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 Reviews</p>
                      </div>
                    </div>
                  </div>
                  <div className="pe-4">
                    {ordered && (
                      <a
                        class="text-dark text-decoration-underline"
                        data-toggle="collapse"
                        href="#collapseExample"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Write a review
                      </a>
                    )}
                  </div>
                </div>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    <div className="contact-details-wrapper d-flex justify-content-between py-3 px-4">
                      <div className="w-100">
                        <h3 className="review-title">Write a Review</h3>
                        <form action="#" className="d-flex gap-15 flex-column">
                          <div>
                            <div className="d-flex mt-4 gap-1 mb-3 flex-column">
                              <h6 className="mb-0">Rate the product</h6>
                              <ReactStars
                                count={5}
                                size={25}
                                value={4}
                                activeColor="#ffd700"
                              />
                            </div>
                            <textarea
                              name="comment"
                              id=""
                              className="w-100 form-control"
                              cols="30"
                              rows="10"
                              placeholder="Write down your comments here *"
                              required
                            ></textarea>
                          </div>
                          <div className="d-flex  justify-content-end">
                            <button
                              className="button rounded-pill"
                              type="submit"
                            >
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="reviews">
                  <div className="review">
                    <div className="d-flex align-items-center gap-2">
                      <h5 className="mb-0">Shivuroopesh</h5>
                      <ReactStars
                        count={5}
                        size={25}
                        value={4}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero at, deserunt suscipit quis reprehenderit nesciunt
                      quam dignissimos adipisci, modi magni, architecto vitae id
                      doloribus blanditiis? Natus totam reiciendis quis eius!
                      Doloremque, aliquid. Nostrum iusto minus reiciendis,
                      numquam delectus ea officiis?
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex align-items-center gap-2">
                      <h5 className="mb-0">Shivuroopesh</h5>
                      <ReactStars
                        count={5}
                        size={25}
                        value={4}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero at, deserunt suscipit quis reprehenderit nesciunt
                      quam dignissimos adipisci, modi magni, architecto vitae id
                      doloribus blanditiis? Natus totam reiciendis quis eius!
                      Doloremque, aliquid. Nostrum iusto minus reiciendis,
                      numquam delectus ea officiis?
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex align-items-center gap-2">
                      <h5 className="mb-0">Shivuroopesh</h5>
                      <ReactStars
                        count={5}
                        size={25}
                        value={4}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero at, deserunt suscipit quis reprehenderit nesciunt
                      quam dignissimos adipisci, modi magni, architecto vitae id
                      doloribus blanditiis? Natus totam reiciendis quis eius!
                      Doloremque, aliquid. Nostrum iusto minus reiciendis,
                      numquam delectus ea officiis?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        
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
    </>
  );
};

export default SingleProduct;
