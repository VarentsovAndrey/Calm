import React from "react";
import Logo from "../Logo";
import style from "./Input.module.scss"

const Input4 = ()=> {

  

    return <div className={style.input}>
        <div  className={style.input__logo}> 
        <Logo id="leaves" />
        </div>
        <p className={style.input__text}>Self-improvement</p>
    </div>
}

export default Input4;