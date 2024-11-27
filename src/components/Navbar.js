import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="Yash Graphics Logo" />
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;
