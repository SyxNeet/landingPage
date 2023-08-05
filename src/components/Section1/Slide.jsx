import { memo } from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
const Slide = ({ title, subTitle, desc, bg }) => {
  const Container = styled.div`
        background-image: url(${bg});
        background-size: cover;
        background-position: center;
        width: 100%;
  }
`;

  return (
    <Container className='slide-item'>
      <Fade bottom>
        <div className='title' dangerouslySetInnerHTML={{ __html: title }}></div>
      </Fade>
      <Fade right>
        <p className='descs1'>{desc}</p>
      </Fade>
    </Container>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Slide);
