import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrum title={"Dynamic Blog Name"} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card px-5 py-2 rounded-3">
              <h3 className="title mb-5 mt-3">
                Dynamic title Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.
              </h3>
              <img
                src="../images/blog-1.jpg"
                className="img-fluid"
                alt="blog"
              />
              <p className="mt-3 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, consequatur. Debitis, cumque hic? Totam placeat quod
                debitis ut? Nihil aliquid ab magni exercitationem enim
                cupiditate fuga eligendi quos sunt laborum eveniet provident
                neque, voluptatibus earum eos aut nobis veritatis debitis
                molestias ipsam! Nam totam natus eum in iste illo repellendus?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                id odio ad repudiandae numquam praesentium excepturi veniam
                nobis esse dolorum deserunt, iste odit a repellendus error
                voluptatum consequuntur aliquid! Fugit similique voluptatem
                commodi, eum officia quos quia nemo inventore! Aliquid quidem
                soluta perferendis culpa voluptates earum architecto, iusto
                accusantium officiis.
              </p>
              <Link to={"/blogs"} className="d-flex align-items-center gap-1">
                <HiOutlineArrowLeft />
                GoBack to Blogs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
