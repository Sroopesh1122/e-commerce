import React, { useState } from "react";

const SizeSelecter = (props) => {
  const { size } = props;
  const [sizeSelected, setSize] = useState(null);
  return (
    <div className="d-flex flex-warp gap-10">
      {size.map((val, index) => {
        return (
          <span
            onClick={() => {
              setSize(val);
            }}
            className={
              sizeSelected === val ? "sbadge size-selected " : "sbadge "
            }
            key={index}
          >
            {val}
          </span>
        );
      })}
    </div>
  );
};

export default SizeSelecter;
