import { FaShoppingCart } from 'react-icons/fa';
import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {

    const stateCart = useSelector(state => state);

    const getQuantity = () => {
        return stateCart.cart.reduce((accumulator, object) => {
            return accumulator + object.quantity;
        }, 0);
    }
    return (
        <>
            <header>
                <span>ShoppingKart.com</span>
                <span className="cart-icon"><Link to="/cart"><button className="btn-cart"><FaShoppingCart /><sup className="cart-quantity">{getQuantity()}</sup></button></Link></span>
            </header>
        </>
    );
}

export default Header;