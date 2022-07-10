import React from 'react';
import style from './Header.module.scss';


const Header = () => {
  return <div className={style.page_header}>

<img src="https://www.calm.com/_n/images/calm-logo.png" alt="logo" className={style.header__logo}/>
<nav className={style.header__nav}>
<div className={style.header__link}>For Business</div>
<div className={style.header__link}>Log in</div>
<div className={style.header__link}>Try Calm for Free</div>
</nav>
</div>;
};

export default Header;
