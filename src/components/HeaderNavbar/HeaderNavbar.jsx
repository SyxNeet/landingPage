import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";
import { DownOutlined } from "@ant-design/icons";
import { Col, Divider, Dropdown, Menu, Row, Space } from "antd";
import imgDropdown1 from "../../assets/section1/imgDropdown1.png";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";

function HeaderNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // const [prevScrollpos, setPrevScrollpos] = useState(0);
  const openMobileMenu = () => {
    setMobileMenu(true);
  };
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const navItem = [
    { type: "Home", key: "home" },
    {
      type: "About us",
      key: "about",
      subItems: [
        {
          label: "Introduce",
          image: imgDropdown1,
          key: "about1",
        },
        {
          label: "Our People",
          image: imgDropdown1,
          key: "about2",
        },
        {
          label: "QHSE",
          image: imgDropdown1,
          key: "about3",
        },
        {
          label: "Asset And Facility",
          image: imgDropdown1,
          key: "about4",
        },
      ],
    },
    { type: "Project", key: "project" },
    { type: "Service", key: "service" },
    { type: "Careers", key: "careers" },
    { type: "News", key: "news" },
    { type: "Contact", key: "contact" },
  ];

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (prevScrollpos > currentScrollPos) {
      const headerNav = document.getElementsByClassName("headerNav")[0];
      headerNav.style.top = "0";
      headerNav.style.background = "linear-gradient(180deg, #4CA757 0%, #16A571 100%)";
      // headerNav.classList.add = 'scrolled'
      if (currentScrollPos === 0) {
        headerNav.style.background = 'transparent'
      }
    } else {
      document.getElementsByClassName("headerNav")[0].style.top = "-172px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div id='navbar' className='sc1'>
      <ContentWrapper>
        <div className={`headerNav ${mobileMenu ? "mobileViews" : ""}`}>
          <div className='headerNav-top'>
            <img src={logo} alt='logo' />
            <span>+00 9875446</span>
          </div>
          <div className='mobileMenuItems'>{mobileMenu ? <VscChromeClose onClick={() => setMobileMenu(false)} /> : <SlMenu className='openModalMobile' onClick={openMobileMenu} />}</div>
          <nav className='headerNav-bot'>
            {navItem.map((item, index) => (
              <>
                <li className={`nav_${index} nav_link`}>
                  {item.subItems ? (
                    <a className='list-type' href='#' onClick={handleOpenModal} key={item.key}>
                      {item.type}
                      <DownOutlined onClick={handleOpenModal} />
                    </a>
                  ) : (
                    <>
                      <a className='list-type' key={item.key}>
                        {item.type}
                      </a>
                    </>
                  )}
                </li>
                {index == 1 && (
                  <div className='subnav'>
                    <div className='subnav_left'>
                      <ul>
                        <li>Introduce</li>
                        <div className={`subnav_right`}>
                          <div className='img'>
                            <img src={imgDropdown1} alt='' />
                          </div>
                          <div className='content'>
                            <h1>Introduce</h1>
                            <p>The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation</p>
                            <p className='more'>See more +</p>
                          </div>
                        </div>
                        <li>Our People</li>
                        <div className={`subnav_right`}>
                          <div className='img'>
                            <img src={imgDropdown1} alt='' />
                          </div>
                          <div className='content'>
                            <h1>Our People</h1>
                            <p> The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation</p>
                            <p className='more'>See more +</p>
                          </div>
                        </div>
                        <li>QHSE</li>
                        <div className={`subnav_right`}>
                          <div className='img'>
                            <img src={imgDropdown1} alt='' />
                          </div>
                          <div className='content'>
                            <h1>QHSE</h1>
                            <p> The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation</p>
                            <p className='more'>See more +</p>
                          </div>
                        </div>
                        <li>Asset And Facility</li>
                        <div className={`subnav_right`}>
                          <div className='img'>
                            <img src={imgDropdown1} alt='' />
                          </div>
                          <div className='content'>
                            <h1>Asset And Facility</h1>
                            <p> The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation</p>
                            <p className='more'>See more +</p>
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                )}
              </>
            ))}
            <div className='about_mobile'>
              <div className='about_mobile-left'>
                <p>CONTACT</p>
                <p>FAQ</p>
                <p>SUSTAINBABILITY</p>
              </div>
              <div className='about_mobile-right'>
                <p>PRIVACY POLICY</p>
                <p>DISCLAIMER</p>
                <p>DOWNLOAD PROFILE</p>
              </div>
            </div>

            <div className='about_contact_mobile'>
              <p>Email: info@gmail.com.vn</p>
              <div>
                <p>Security Hotline :(+84) 254 3526981</p>
              </div>
            </div>
          </nav>
        </div>
      </ContentWrapper>

    </div>
  );
}

export default HeaderNavbar;
