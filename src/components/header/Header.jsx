import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import menus from "../../pages/menu";
import logoheader from "../../assets/images/logo/crazyzoo-logo.png";
import logoheader2x from "../../assets/images/logo/crazyzoo-logo.png";
import logodark from "../../assets/images/logo/crazyzoo-logo.png";
import logodark2x from "../../assets/images/logo/crazyzoo-logo.png";
import { Button } from "react-bootstrap";
import { Web3Button } from "@web3modal/react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";

const Header = () => {
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal();

  const [menuItems, setMenuItems] = useState(menus);

  const nav = useNavigate();

  const { address, isConnecting, isDisconnected } = useAccount()

  function addressAbv(a){
    let result = a.toString().substring(0,5).toString() + "..." + a.toString().substring(a.toString().length - 6)
    return result.toString();
  }


  /*useEffect(() => {
        if (adr && (adr != null)) {
            let connectedWalletMenu = document.getElementById('menu::r0::content');

            let connectedWaletMenuDappLink = htmlToElement(`<li data-scope="menu" data-part="item" role="menuitem" data-ownedby="menu::r0::content" class="css-7issgb">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#ffffff" stroke-width="2"></path> <path d="M16 12L8 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
</svg>Access Dapp</li>`);
            connectedWalletMenu.appendChild(connectedWaletMenuDappLink);
            connectedWaletMenuDappLink.addEventListener('click', ()=>{
                nav('/minting')
            })
        } else {
            console.log('not connected')
        }
    })*/

  const { pathname } = useLocation();

  const headerRef = useRef(null);

  const menuLeft = useRef(null);
  const btnToggle = useRef(null);
  const btnSearch = useRef(null);

  const menuToggle = () => {
    menuLeft.current.classList.toggle("active");
    btnToggle.current.classList.toggle("active");
  };

  const searchBtn = () => {
    btnSearch.current.classList.toggle("active");
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleOnClick = (index) => {
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
                  <div className="headerLogo">
                    <Link to="/" rel="home" className="main-logo">
                      <img
                        className="logo-light"
                        id="logo_header"
                        src={logoheader}
                        srcSet={`${logoheader2x}`}
                        alt="nft-gaming"
                      />
                    </Link>
                  </div>
                  <div className="navBox">
                    <nav id="main-nav" className="main-nav" ref={menuLeft}>
                      <ul id="menu-primary-menu" className="menu">
                        {menuItems.map((data, index) => (
                          <li
                            key={index}
                            onClick={() => handleOnClick(index)}
                            className={`menu-item ${
                              data.namesub ? "menu-item-has-children" : ""
                            } ${activeIndex === index ? "active" : ""} `}
                          >
                            <Link to={data.links}>{data.name}</Link>
                            {data.namesub && (
                              <ul className="sub-menu">
                                {data.namesub.map((submenu) => (
                                  <li
                                    key={submenu.id}
                                    className={
                                      pathname === submenu.links
                                        ? "menu-item current-item"
                                        : "menu-item"
                                    }
                                  >
                                    <Link to={submenu.links}>
                                      {submenu.sub}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="ctaWrapper">
                    <Button
                      className="polygonBtn"
                      onClick={() => {
                        window.open("https://polygonscan.com/", "_blank");
                      }}
                    >
                        <img style={{height: "3vh", marginRight: "5%"}} src="https://ipfs.thirdwebcdn.com/ipfs/QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png" alt="" />
                     Arbitrum
                    </Button>
                    <Button
                      className="connectWalletBtn"
                      onClick={async () => {
                        await open();
                      }}
                    >
                      {
                        address != null && address != "" && address != " " ? (addressAbv(address.toString())) : ("Connect Wallet")
                      }
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
