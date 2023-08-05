import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";
import img1 from "../../assets/section6/img1.png";
import img2 from "../../assets/section6/img2.png";
import img3 from "../../assets/section6/img3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

function Section6() {
  const slides = [img1, img1, img3, img1, img3, img3, img1, img3, img1];
  return (
    <div className='section6' id="section6">
      <ContentWrapper>
        <p className='title'>NEWS</p>
        <div className='info-feature'>
          <div className='sub-title1'>
            <p>Latest News</p>
          </div>
          <div className='sub-title2'>
            <p>SEE MORE</p>
          </div>
        </div>

        <div className='slides'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
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
            pagination={{
              type: "progressbar",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper'>
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className='about-item'>
                  <div className='img'>
                    <img src={slide} alt='' />
                  </div>
                  <div className='info-bot'>
                    <p className='date'>26.04.2022/EVENT</p>

                    <div className='desc1'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus aspernatur molestiae saepe quaerat expedita.</p>
                    </div>
                    <div className='seemore'>
                      <p>SEE MORE +</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Section6;
