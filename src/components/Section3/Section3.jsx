import { Col, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import './style.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import subTrac1 from '../../assets/section3/Subtract1.png'
import subTrac2 from '../../assets/section3/Subtract2.png'
import subTrac3 from '../../assets/section3/Subtract3.png'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import ContentWrapper from '../contentWrapper/ContentWrapper'
function Section3() {

    const [selected, setSelected] = useState(0)

    const [count, setCount] = useState(0)
    useEffect(() => {
        const element = document.getElementById('flag');

        const handleScroll = () => {
            if (window.scrollY > element.offsetTop) {
                for (let i = 1; i <= 20; i++) {
                    setTimeout(() => {
                        setCount(i);
                    }, i * 50);
                    if (i === 20) {
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    const handleSlideChange = (index) => {
        setSelected(index)
    }

    const slides = [
        {
            img: subTrac1,
            desc: 'A business development organisation helping to make valuable between businesses in the global energy sector.'
        },
        {
            img: subTrac2,
            desc: 'A business development organisation helping to make valuable between businesses in the global energy sector.'

        },
        {
            img: subTrac3,
            desc: 'A businesssssss development organisation helping to make valuable between businesses in the global energy sector.'

        }
    ]

    // const pagination = slides.length
    return (
        <div className='section3'>
            <ContentWrapper>
                <Row id='flag'>

                    <Col xs={24} sm={12} md={12} lg={12} xl={12} className='content-left-sc3'>
                        <Space className='title-sc3'>
                            <p>WE ARE <br /> <span>A Member Of</span></p>
                        </Space>
                        <Space className='desc-sc3'>
                            <p>{slides[selected].desc}</p>
                        </Space>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={12} xl={12} className='list-slideImg'>
                        {slides.map((slide, index) => (
                            <Space
                                onClick={() => handleSlideChange(index)}
                                key={index}
                                className={`slideImg ${index === selected ? 'active' : ''}`}
                            >
                                <img src={slide.img} alt="" />
                            </Space >

                        ))}


                    </Col>

                </Row>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={() => { handleSlideChange(selected - 1) }}
                        disabled={selected == 0}
                        className='btn-switch'
                    >
                        <LeftOutlined />
                    </button>

                    <button
                        onClick={() => { handleSlideChange(selected + 1) }}
                        disabled={selected >= 2}
                        className='btn-switch'
                    >
                        <RightOutlined />
                    </button>

                </div>

                <Row id='countNumber'>
                    <Col span={24} >
                        <p>
                            Company value reflects its ability to generate future profits, management, and market position.
                        </p>
                    </Col>
                    <Row style={{ width: '100%' }} className='mb'>
                        <Col xs={12} sm={12} md={6} lg={6} >
                            <div className='count-number'>
                                <span className='number'>{count}</span>
                                <span className='plus'>+</span>
                                <p>FOUNDED YEAR</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className='mb-spr2' >
                            <div className='count-number'>
                                <span className='number'>{count}</span>
                                <span className='plus'>+</span>
                                <p>PERSONEL</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className='mt8' >
                            <div className='count-number'>
                                <span className='number'>{count}</span>
                                <span className='plus'>+</span>
                                <p>PROJECTS</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className='mt8 mb-spr4'>
                            <div className='count-number'>
                                <span className='number'>{count}</span>
                                <span className='plus'>+</span>
                                <p>CLINETS & PARTNERS</p>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </ContentWrapper >
        </div >
    )
}
export default Section3
