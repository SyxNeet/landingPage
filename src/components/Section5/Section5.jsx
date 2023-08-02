import { Col, Row, Space } from 'antd'
import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import './style.scss'
import img1 from '../../assets/section5/img1.png'
import img2 from '../../assets/section5/img2.png'
import img3 from '../../assets/section5/img3.png'
import img4 from '../../assets/section5/img4.png'
import img5 from '../../assets/section5/img5.png'
import img6 from '../../assets/section5/img6.png'


function Section5() {
    const listImage = [img1, img2, img3, img4, img5, img6]

    return (
        <div className='section5'>
            <ContentWrapper>
                <div className='pd'>
                    <Row justify='center' align='middle'>
                        <Col span={24}>
                            <p className='title'>our clients & partners</p>
                        </Col>
                    </Row>
                    <Row justify='center' align='middle' style={{ width: '90%', margin: '2rem auto' }}>
                        <Col span={24} className='desc'>
                            “Our customers come from various industries, and we focus on meeting their needs and demands."
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} justify='space-between' align='middle' wrap={true} style={{ display: 'flex' }} >
                        {listImage.map((src, index) => (
                            <Col xs={8} sm={8} md={8} lg={6} xl={4}  >
                                <img style={{ width: '100%' }} key={index} src={src} alt="" />
                            </Col>
                        ))}
                    </Row>
                </div>

            </ContentWrapper>
        </div>
    )
}
export default Section5
