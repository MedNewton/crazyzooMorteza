import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import menus from "../../pages/menu";
import dappMenus from '../../pages/dappMenus';
import DarkMode from './DarkMode';
import logoheader from '../../assets/images/logo/crazyzoo-logo.png'
import logoheader2x from '../../assets/images/logo/crazyzoo-logo.png'
import logodark from '../../assets/images/logo/crazyzoo-logo.png'
import logodark2x from '../../assets/images/logo/crazyzoo-logo.png'

import { Web3Button } from "@web3modal/react";

const DappHeader = () => {

    const nav = useNavigate();

    

    

    const { pathname } = useLocation();

    const headerRef = useRef(null)


    const menuLeft = useRef(null)
    const btnToggle = useRef(null)
    const btnSearch = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }

    const searchBtn = () => {
        btnSearch.current.classList.toggle('active');
    }

    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index);
    };



    return (
        <header id="header_main" className="header_1 js-header" ref={headerRef}>
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="site-header-inner">
                            <div className="wrap-box flex">
                                <div className="row headerWrapper">
                                    <div className="col-2 logoWrapper">
                                        <div id="site-logo-inner">
                                            <Link to="/" rel="home" className="main-logo">
                                                <img className='logo-dark' id="logo_header" src={logodark} srcSet={`${logodark2x}`} alt="nft-gaming" />
                                                <img className='logo-light' id="logo_header" src={logoheader} srcSet={`${logoheader2x}`} alt="nft-gaming" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-8 navWrapper">
                                        <nav id="main-nav" className="main-nav" ref={menuLeft} >
                                            <ul id="menu-primary-menu" className="menu">
                                                {
                                                    dappMenus.map((data, index) => (
                                                        <li key={index} onClick={() => handleOnClick(index)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === index ? 'active' : ''} `}   >
                                                            <Link to={data.links}>{data.name}</Link>
                                                            {
                                                                data.namesub &&
                                                                <ul className="sub-menu" >
                                                                    {
                                                                        data.namesub.map((submenu) => (
                                                                            <li key={submenu.id} className={
                                                                                pathname === submenu.links
                                                                                    ? "menu-item current-item"
                                                                                    : "menu-item"
                                                                            }><Link to={submenu.links}>{submenu.sub}</Link></li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            }

                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-2 ctaWrapper">
                                    <Web3Button icon='hide' className="connectWalletButton" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default DappHeader;
