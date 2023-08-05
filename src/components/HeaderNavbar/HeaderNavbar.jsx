import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.scss'
import { DownOutlined } from '@ant-design/icons';
import { Col, Divider, Dropdown, Menu, Row, Space } from 'antd';
import imgDropdown1 from '../../assets/section1/imgDropdown1.png'
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";


function HeaderNavbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false);

    const openMobileMenu = () => {
        setMobileMenu(true)
    }
    const handleOpenModal = () => {
        setIsOpen(!isOpen)
    }


    const navItem = [
        { type: 'Home', key: 'home' },
        {
            type: 'About us',
            key: 'about',
            subItems: [
                {
                    label: 'Introduce',
                    image: imgDropdown1,
                    key: 'about1',
                },
                {
                    label: 'Our People',
                    image: imgDropdown1,
                    key: 'about2',
                },
                {
                    label: 'QHSE',
                    image: imgDropdown1,
                    key: 'about3',
                },
                {
                    label: 'Asset And Facility',
                    image: imgDropdown1,
                    key: 'about4',
                },
            ],
        },
        { type: 'Project', key: 'project' },
        { type: 'Service', key: 'service' },
        { type: 'Careers', key: 'careers' },
        { type: 'News', key: 'news' },
        { type: 'Contact', key: 'contact' }
    ]

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementsByClassName("headerNav")[0].style.top = "0";
        } else {
            document.getElementsByClassName("headerNav")[0].style.top = "-126px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div id='navbar' className='sc1'>

            <ContentWrapper >
                <div className={`headerNav ${mobileMenu ? 'mobileViews' : ''}`}>
                    <div className='headerNav-top'>
                        <img src={logo} alt="logo" />
                        <span>+00 9875446</span>

                    </div>
                    <div className="mobileMenuItems">
                        {
                            mobileMenu
                                ?
                                (<VscChromeClose onClick={() => setMobileMenu(false)} />)
                                :
                                (<SlMenu className='openModalMobile' onClick={openMobileMenu} />)
                        }
                    </div>
                    <nav className='headerNav-bot'>
                        {navItem.map((item, index) => (
                            <>
                                <li className={`nav_${index}`}>
                                    {item.subItems ?
                                        (<a className='list-type' href='#' onClick={handleOpenModal} key={item.key}>{item.type}<DownOutlined onClick={handleOpenModal} /><span className='line'></span></a>)
                                        : (<>
                                            <a className='list-type' key={item.key}>{item.type}<span className='line'></span></a>

                                        </>)}
                                    {index == 1 && (
                                        <div className="subnav">
                                            <div className="subnav_left">
                                                <ul>
                                                    <li>Introduce</li>
                                                    <div className={`subnav_right`}>
                                                        <div className="img">
                                                            <img src={imgDropdown1} alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h1>Introduce</h1>
                                                            <p>The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation</p>
                                                        </div>
                                                    </div>
                                                    <Divider />
                                                    <li>Our People</li>
                                                    <div className={`subnav_right`}>
                                                        <div className="img">
                                                            <img src={imgDropdown1} alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h1>Our People</h1>
                                                            <p> The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation</p>
                                                        </div>
                                                    </div>
                                                    <Divider />

                                                    <li>QHSE</li>
                                                    <div className={`subnav_right`}>
                                                        <div className="img">
                                                            <img src={imgDropdown1} alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h1>QHSE</h1>
                                                            <p> The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation</p>
                                                        </div>
                                                    </div>
                                                    <Divider />

                                                    <li>Asset And Facility</li>
                                                    <div className={`subnav_right`}>
                                                        <div className="img">
                                                            <img src={imgDropdown1} alt="" />
                                                        </div>
                                                        <div className="content">
                                                            <h1>Asset And Facility</h1>
                                                            <p> The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation</p>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                <Divider className='divider' />
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

    )
}

export default HeaderNavbar
