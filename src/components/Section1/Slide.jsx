import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";

export const Slide = ({ title, subTitle, desc, bg }) => {
  const Container = styled.div`
        background-image: url(${bg});
        background-size: cover;
        background-position: center;
        width: 100%;
  }
`;

  return (
    <Container className='slide-item'>
      <div className='title' dangerouslySetInnerHTML={{ __html: title }}></div>
      <p className='descs1'>{desc}</p>
    </Container>
  );
};
