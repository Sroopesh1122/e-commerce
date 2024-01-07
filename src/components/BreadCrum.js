import React from "react";
import { Link } from "react-router-dom";

const BreadCrum = (props) => {
  const { title } = props;
  return (
    <div className="breadcromb mb-0 py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="link-path text-center mb-0">
              <Link to="/" className="text-dark font-weight-normal">
                Home{" "}
              </Link>{" "}
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrum;
