import React from 'react';
import Logo from '../Logo';
import style from './Footer.module.scss';

const Footer = () => {
  return <section className={style.footer_page}>
    <div className={style.footer__links}>
    <div className={style.footer__item}>
      <p>Company</p>
      <p><Logo id="arrow"/></p>
    </div>
    <div className={style.footer__item}>
      <p>Offers</p>
      <p><Logo id="arrow"/></p>
    </div>
    <div className={style.footer__item}>
      <p>Help</p>
      <p><Logo id="arrow"/></p>
    </div>
    <nav className={style.footer__nav}>
    <div className={style.footer__img}><Logo id="facebook"/></div>
    <div className={style.footer__img}><Logo id="instagram"/></div>
    <div className={style.footer__img}><Logo id="twitter"/></div>
    </nav>
    </div>
    <div className={style.footer__signature}>Copyright &copy; 2022 Calm. All rights reserved</div>
      </section>;
};

export default Footer;
