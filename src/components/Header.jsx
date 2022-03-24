import React from "react";
import '../styles/components/Header.css';
import { Link } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

const Header = () => {

    const { state } = React.useContext(AppContext);
    const { cart } = state;
    return(
        <header className="header">
            <Link to='/'>
                <h1 className="header__title">PlatzaConf Merch</h1>
            </Link>
            <div className="header__checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket" />
                </Link>
                {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
            </div>
        </header>
    );
}

export {Header};