import { Outlet } from "react-router-dom";
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import style from "../styles/layout.module.css";

const Layout = () => {
  
    return (
        <>
        <div className={style.wrapper}>
            <Header/>
            <div className={style.outletContainer}>
                <SideBar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Layout;