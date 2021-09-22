import style from "./Preloader.module.css";
import React from "react";

let Preloader = (props) => {
   return (
      <div className={style.container}>
         <div className={`${style.circle} ${style.circle_1}`}></div>
         <div className={`${style.circle} ${style.circle_2}`}></div>
         <div className={`${style.circle} ${style.circle_3}`}></div>
         <div className={`${style.circle} ${style.circle_4}`}></div>
         <div className={`${style.circle} ${style.circle_5}`}></div>
      </div>
   );
};

export default Preloader;
