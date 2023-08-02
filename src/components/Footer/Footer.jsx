import { Col, Divider, Row, Space } from 'antd'
import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.scss'
import logo from '../../assets/logo.png'
import { ArrowRightOutlined, FacebookOutlined, GooglePlusOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
function Footer() {
    const listContent = ['ABOUT', 'PROJECTS', 'CLIENTS & PARTNERS', 'NEWS & EVENT', 'SUITAINABILITY', 'DOWNLOAD PROFILE COMPANY']

    const listAbout = ['CAREERS', 'CONTACT', 'BLOG', 'FAQ', 'DISCLAIMER', 'PRIVACY POLICY']
    return (
        <footer>
            <ContentWrapper>
                <Row className='top' >
                    <Space direction='vertical' className='logo'>
                        <img src={logo} alt="img" />
                        <span className='logo-title'>Offshore Energy Installation JSC</span>
                    </Space>

                    <div className='content'>
                        <Space direction='vertical' align='start' className='content_left' >
                            {listContent.map((content, index) => (
                                <span className='list-content' key={index}>{content}</span>
                            ))}
                        </Space>

                        <Space direction='vertical' align='start' className='content_right'>
                            {listAbout.map((about, index) => (
                                <span className='list-about' key={index}>{about}</span>
                            ))}
                        </Space>
                    </div>

                    <Space direction='vertical'>

                        <Space className='title-top'><p>Sign up for email to receive the latest information</p></Space>
                        <Space className='title-bot'><p>Lorem ipsum dolor sit amet consectetur. Aliquam sed blandit rhoncus id dictum.</p></Space>

                        <input type="email" placeholder='Your email' prefix={<ArrowRightOutlined />} />

                        <div className='layout'></div>

                        <div className='social'>
                            <FacebookOutlined />
                            <YoutubeOutlined />
                            <TwitterOutlined />
                            <InstagramOutlined />
                            <GooglePlusOutlined />
                        </div>
                    </Space>
                </Row>

                <Divider style={{ background: 'rgba(255,255,255,0.3)', opacity: '0.9' }} />
                <Space className='address' >
                    <p className='info-address'>ADDRESS</p>
                    <p>2nd floor, No.44, 30/4 Rd., Ward 9, Vung Tau City, Vietnam</p>
                </Space>
                <Divider style={{ background: 'rgba(255,255,255,0.3)', opacity: '0.9' }} />
                <Space className='contact' >
                    <div className='info-contact'>
                        <p>CONTACT</p>
                    </div>

                    <div className='info-bot'>
                        <p>(+84) 254 6295268</p>
                        <p>info@oei.com.vn</p>
                    </div>
                </Space>
            </ContentWrapper>
        </footer>
    )
}
import './style.scss'
export default Footer
