import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
            <header className="header-section">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 text-center text-lg-left">
                                <NavLink to='/' exact className="site-logo">
                                    <img src="img/logo.png" alt="main logo"/>
                                </NavLink>
                            </div>
                            <div className="col-xl-6 col-lg-5">
                                <form className="header-search-form">
                                    <input type="text" placeholder="Search on divisima ...."/>
                                        <button> <i className="flaticon-search"> </i> </button>
                                </form>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="user-panel">
                                    <div className="up-item">
                                        <i className="flaticon-profile"> </i>
                                        <NavLink to='/checkout' exact>Sign</NavLink> In or <NavLink to='/checkout' exact>Create Account</NavLink>
                                    </div>
                                    <div className="up-item">
                                        <div className="shopping-card">
                                            <i className="flaticon-bag"> </i>
                                            <span>0</span>
                                        </div>
                                        <NavLink to='/cart' exact>Shopping Cart</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-navbar">
                    <div className="container">
                        <ul className="main-menu">
                            <li><NavLink to='/' exact>Home</NavLink></li>
                            <li><NavLink to='/catalog' exact>Women</NavLink></li>
                            <li><NavLink to='/catalog' exact>Men</NavLink></li>
                            <li><NavLink to='/catalog' exact>Jewelry
                                <span className="new">New</span>
                            </NavLink></li>
                            <li><NavLink to='/catalog' exact>Shoes</NavLink>
                                <ul className="sub-menu">
                                    <li><NavLink to='/catalog' exact>Sneakers</NavLink></li>
                                    <li><NavLink to='/catalog' exact>Sandals</NavLink></li>
                                    <li><NavLink to='/catalog' exact>Formal Shoes</NavLink></li>
                                    <li><NavLink to='/catalog' exact>Boots</NavLink></li>
                                    <li><NavLink to='/catalog' exact>Flip Flops</NavLink></li>
                                </ul>
                            </li>
                            <li><a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li><NavLink to='/product' exact>Product Page</NavLink></li>
                                    <li><NavLink to='/catalog' exact>Category Page</NavLink></li>
                                    <li><NavLink to='/cart' exact>Cart Page</NavLink></li>
                                    <li><NavLink to='/checkout' exact>Checkout Page</NavLink></li>
                                    <li><NavLink to='/contact' exact>Contact Page</NavLink></li>
                                </ul>
                            </li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

    );
}

export default Header;