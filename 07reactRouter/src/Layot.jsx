import React from "react";
import Header from "./assets/components/Header/header";
import Footer from "./assets/components/Footer/Footer";
import { Outlet } from "react-router-dom"
function Layot (){
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}
export default Layot