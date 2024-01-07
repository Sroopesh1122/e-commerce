import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import wishlist from '../images/wish.svg'

const ProductCard = (props) => {
  let location = useLocation();
  const { grid } = props;
  return (
    <motion.div
    transition={{duration:"0.2"}}
      layout
      className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <Link onClick={()=>{window.scrollTo(0,0)}} className="product-card position-relative" to={"/store/product/:id"}>
        <div className="wishlist-icon position-absolute">
          <button className="link-button">
            <img src={wishlist} alt="wishlist" />
          </button>
        </div>
        <div className="product-img">
          <img src="/images/watch.jpg" className="img-fluid" alt="product" />
          <img src="/images/watch.jpg" className="img-fluid" alt="product" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for student
          </h5>
          <ReactStars
            count={5}
            size={location.pathname === "/store" ? 19 : 24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`desc ${grid === 1 ? '':'d-none'}`}>This is product description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in nostrum quod porro eum? Accusamus recusandae distinctio nulla earum. Dignissimos!</p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute ">
          <div className="d-flex flex-column gap-15">
            <button className="link-button">
              <img src="/images/prodcompare.svg" alt="compare" />
            </button>
            <button className="link-button">
              <img src="/images/view.svg" alt="view" />
            </button>
            <button className="link-button">
              <img src="/images/add-cart.svg" alt="addcart" />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
