import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header id="header">
            {/* Navbar */}
            <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
                <div className="container header">
                    {/* Navbar Brand*/}
                    <Link className="nav-link" to="/">
                        <img className="navbar-brand-sticky" src="img/support/logo-2.png" alt="sticky brand-logo" />
                    </Link>
                    <div className="ml-auto" />
                    {/* Navbar */}
                    <ul className="navbar-nav items mx-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/explore">Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/activity">Activity</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/face-recognition">Create NFT</Link>
                            {/* <Link className="nav-link" to="/face-recognition">Create NFT</Link> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {/* Navbar Icons */}
                    <ul className="navbar-nav icons">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#search">
                                <i className="fas fa-search" />
                            </a>
                        </li>
                    </ul>
                    {/* Navbar Toggler */}
                    <ul className="navbar-nav toggle">
                        <li className="nav-item">
                            <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                <i className="fas fa-bars toggle-icon m-0" />
                            </a>
                        </li>
                    </ul>
                    {/* Navbar Action Button */}
                    <ul className="navbar-nav action">
                        <li className="nav-item ml-3">
                            <Link className="btn ml-lg-auto btn-bordered-white" to="/wallet-connect"><i className="icon-wallet mr-md-2" />Wallet Connect</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    );
};

export default Header;