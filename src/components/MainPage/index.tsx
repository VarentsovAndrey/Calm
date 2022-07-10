import React from 'react';
import Input1 from '../../shared/Input1';
import Input2 from '../../shared/Input2';
import Input3 from '../../shared/Input3';
import Input4 from '../../shared/Input4';
import Input5 from '../../shared/Input5';

import MainLayout from '../../shared/layouts/MainLayout';
import style from "./MainPage.module.scss";


const MainPage = () => {

return (
<MainLayout>
  <div className={style.main}>
    <div className={style.main__title}>
    <h1>Find Your Calm</h1>
    <h2>Our goal is to help you improve your health and happiness.</h2>
    <h2>What can we help with today?</h2>
    </div>
    <Input1/>   
    <Input2/>
    <Input3/>  
    <Input4/>  
    <Input5/>    
  </div>
  </ MainLayout>
)

 
};


export default MainPage;
