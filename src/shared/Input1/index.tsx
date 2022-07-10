import React from "react";

import Logo from "../Logo";
import style from "./Input.module.scss"

const Input1 = ()=> {

  

    return <div className={style.input}>
        <div  className={style.input__logo}> 
        <Logo id="month" />
        </div>
        <p className={style.input__text}>Improve sleep quality</p>
    </div>
}

export default Input1;