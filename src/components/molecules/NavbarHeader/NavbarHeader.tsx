import css from './NavbarHeader.module.css'
import Button from "../../atoms/Button/Button";
import BurguerMenu from '../BurguerMenu/BurguerMenu';
import { useState } from 'react';

function NavbarHeader() {
  const[clicked,setClicked]=useState(false);

  function hamburguerClicked(){
    if (clicked==false)
      setClicked(true);

    else
      setClicked(false);
  }

  return (
    <div>
      <header className={css.container}>
        <div>
          <img src="/logo-bookmark.svg" alt="logo de empresa" />
        </div>
        <div className={css.navbarLinks}>
          <Button clas="navbar">FEATURES</Button>
          <Button clas="navbar">PRICING</Button>
          <Button clas="navbar">CONTACT</Button>
          <Button clas="login">LOGIN</Button>
        </div>
      
          <div className={css.iconHamburgerMenu}>
          <span>
            <Button clas="navbar" callback={hamburguerClicked}><img src="/icon-hamburger.svg" alt="menu con icono hamburguesa" /></Button>
          </span>
        </div>
      
        </header>
         <div className={css.burguerMenu}>
         {clicked &&<BurguerMenu/>}
       </div>
    </div>
  );
}

export default NavbarHeader;
