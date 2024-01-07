import React, { useState } from "react";

const Color = (props) => {
  const {colors,selectable}=props;
  const [colorSelected,setColor]=useState(null)
  return (
    <div>
      <ul className="colors ps-0 mb-0">
        {
         selectable? colors.map((val,index)=>{return <li key={index} onClick={()=>setColor(val)} className={colorSelected === val ? 'color-not-selected color-selected':'color-not-selected'}><div className="c"  style={{backgroundColor:`${val}`}}></div></li>}): colors.map((val,index)=>{return <li key={index}  className={'color-not-selected no-pointer'}><div className="c"  style={{backgroundColor:`${val}`}}></div></li>})
        }
      </ul>
    </div>
  );
};

export default Color;
