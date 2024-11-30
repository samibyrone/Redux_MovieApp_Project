import React from 'react';
import style from "../styles/sideBar.module.css";
import { Link } from 'react-router-dom';

const SideBar = () => {

  return (
    <div className={style.sideBarContainer}>
      <Link to={"/movie/popular"}><button><p>Popular</p></button></Link>
      <Link to={"/movie/upcoming"}><button><p>Upcoming</p></button></Link>
      <Link to={"/movie/toprated"}><button><p>Top-rated</p></button></Link>
      <Link to={"/movie/nowplaying"}><button><p>Now-playing</p></button></Link>
    </div>
  )
}

export default SideBar;