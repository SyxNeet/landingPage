import React from "react";
import "./style.scss";
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "../../assets/section4/img1.png";
import img2 from "../../assets/section4/img2.png";
import img3 from "../../assets/section4/img3.png";
import img4 from "../../assets/section4/img4.png";
import img5 from "../../assets/section4/img5.png";
import img7 from "../../assets/section4/img7.png";
import img8 from "../../assets/section4/img8.png";
import img9 from "../../assets/section4/img9.png";
import img10 from "../../assets/section4/img10.png";
import item1 from '../../assets/section4/item1.png';
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Ticker from "react-ticker";
import { Image } from "antd";

function Section4() {

  const listImg = [img5, img2, img3, img4, img5, img7, img8, img9];
  return (
    <div className='section4'>
      <ContentWrapper>
        <div className='flex-containersc4'>
          <div className='flex-top'>
            <div className='item1'>
              <Fade left>
                <img src={item1} alt="" />
              </Fade>
            </div>
            <div className='item2'>
              <Fade left>
                <img src={img8} alt="" />
              </Fade>
            </div>
            <div className='item3'>
              <Fade right>
                <img src={img7} alt="" />
              </Fade>
            </div>
            <div className='item4'>
              <Fade right>
                <img src={img5} alt="" />
              </Fade>
            </div>
          </div>
          <div className='flex-bot'>
            <div className='item5'>
              <Fade left>
                <img src={img7} alt="" />
              </Fade>
            </div>
            <div className='flex-bot-right'>
              <div className='flex-bot-right-top'>
                <div className='item6'>
                  <Fade left>
                    <img src={img3} alt="" />
                  </Fade>
                </div>
                <div className='item7'>
                  <Fade right>
                    <img src={img4} alt="" />
                  </Fade>
                </div>
                <div className='item8'>
                  <Fade right>
                    <img src={img1} alt="" />
                  </Fade>
                </div>
              </div>
              <div className='flex-bot-right-bot'>
                <div className='item9'>
                  <Fade left>
                    <img src={img2} alt="" />
                  </Fade>

                </div>
                <div className='item10'>
                  <Fade right>
                    <img src={img9} alt="" />
                  </Fade>

                </div>
                <div className='item11'></div>
              </div>
            </div>
          </div>
        </div>

      </ContentWrapper>

      <ContentWrapper>
        <div>
          <div className='title'>
            <p>we provide service</p>
          </div>

          <div className='subtitle'>
            <p>epowring Sustainability</p>
          </div>

          <Swiper className='mySwiper'
            slidesPerView={1.2}
            spaceBetween={12}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}

          >
            {listImg.map((img, index) => (
              <SwiperSlide key={index}>
                <Image style={{ objectFit: 'cover' }} preview={true} src={img} alt='' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <div className='sec4-bot' style={{ marginLeft: "10px" }}>
          <Ticker>
            {() => (
              <>
                <p>
                  building for <span> green </span> energy
                </p>
              </>
            )}
          </Ticker>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Section4;
