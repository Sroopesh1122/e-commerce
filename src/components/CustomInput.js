import React from "react";

const CustomInput = (props) => {
  const {name,type,id,placeholder,label,onC,Class}=props
  return (
    <div className={Class}>
      <input
        name={name}
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={onC ? (e)=>{onC(e.target.value)} :()=>{}}
      />
      <label htmlFor={id}>{label}</label>
      {
        props.children
      }
    </div>
  );
};

export default CustomInput;
