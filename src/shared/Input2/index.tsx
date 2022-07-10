import React from "react";
import Logo from "../Logo";
import style from "./Input.module.scss"

const Input2 = ()=> {

  

    return <div className={style.input}>
        <div  className={style.input__logo}> 
        <Logo id="drop" />
        </div>
        <p className={style.input__text}>Reduce stress or anxiety</p>
    </div>
}

export default Input2;