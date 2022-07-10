import React from "react";
import Logo from "../Logo";
import style from "./Input.module.scss"

const Input5 = ()=> {

  

    return <div className={style.input}>
        <div  className={style.input__logo}> 
        <Logo id="settings" />
        </div>
        <p className={style.input__text}>Something else</p>
    </div>
}

export default Input5;