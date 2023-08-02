// import { Col, Row } from 'antd'
// import './style.scss'
// import imgDropdown1 from '../../assets/section1/imgDropdown1.png'
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import SlideModal from './SlideModal';


// function Modal() {
//     const subItems = [
//         {
//             label: 'Introduce',
//             image: imgDropdown1,
//             key: 'about1',
//         },
//         {
//             label: 'Our People',
//             image: imgDropdown1,
//             key: 'about2',
//         },
//         {
//             label: 'QHSE',
//             image: imgDropdown1,
//             key: 'about3',
//         },
//         {
//             label: 'Asset And Facility',
//             image: imgDropdown1,
//             key: 'about4',
//         },
//     ]
//     return (
//         <div className='modal-dropdown'>
//             <Row>
//                 <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//                     {subItems?.map(({ label, image, key }, index) => (
//                         <SwiperSlide key={index}>
//                             <SlideModal label={label} image={image} />
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//             </Row>

//         </div>
//     )
// }

// export default Modal
