import React from 'react';
import style from "../styles/header.module.css";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className={style.header}>
      <p>Infinity-Collection</p>
      <div className={style.HeaderList}>
        <input className={style.searchInput} type="text" placeholder='Search' />
        <Link to={"/signup"}><p>Sign-up</p></Link>
        <Link to={"/"}><p>login</p></Link>    
      </div>
    </div>
  )
}

export default Header;