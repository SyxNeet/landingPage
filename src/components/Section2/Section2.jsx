import React from "react";
import Masony from "react-masonry-component";
import Ticker from "react-ticker";
import img1 from "../../assets/section2/img1.png";
import imgCenter from "../../assets/section2/img2.png";
import img3 from "../../assets/section2/img3.png";
import img4 from "../../assets/section2/img4.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Fade from "react-reveal/Fade";
import "./style.scss";

// const masonryOptions = {
//     fitWidth: false,
//     columnWidth: 250,
//     gutter: 2,
//     itemSelector: ".photo-item-sc2",
// };

function Section2() {
  const listImg = [img1, imgCenter, img3, img4];
  return (
    <ContentWrapper>
      <div className='section2'>
        <div className='section-top'>
          <div className='content-left'>
            <div className='about-us'>
              <p>ABOUT US</p>
              <p>
                <span> Offshore Energy Installation </span>
                <span>OEI is your gateway to renewable energy and</span>
                <span> Oil</span> & <span>Gas</span> solutions.
              </p>
            </div>

            <div className='seeMore'>
              <span>SEE MORE</span>
            </div>
          </div>
          <div className='content-right'>
            <div className='grid-container'>
              <div className='item1'></div>

              <Fade></Fade>
              <div className='item2'>
                <img src={img4} alt='' />
              </div>

              <div className='item3'>
                <img src={img1} alt='' />
              </div>

              <div className='item4'></div>

              <div className='item5'>
                <img src={img3} alt='' />
              </div>

              <div className='item6'></div>

              <div className='item7'>
                <img src={imgCenter} alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className='section-bot'>
          <Ticker>
            {() => (
              <>
                <p>
                  offshore <span> Energy </span> installation
                </p>
              </>
            )}
          </Ticker>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default Section2;
