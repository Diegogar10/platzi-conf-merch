import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import '../styles/components/Layout.css';

const Layout = ({children}) => {
    return(
        <div className="main">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}

export {Layout};