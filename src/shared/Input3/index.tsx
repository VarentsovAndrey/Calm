import React from "react";
import Logo from "../Logo";
import style from "./Input.module.scss"

const Input3 = ()=> {

  

    return <div className={style.input}>
        <div  className={style.input__logo}> 
        <Logo id="stones" />
        </div>
        <p className={style.input__text}>Improve focus</p>
    </div>
}

export default Input3;