import React from 'react'
import styled from 'styled-components'


export const Slide = ({ title, subTitle, desc, bg }) => {

    const Container = styled.div`
        background-image: url(${bg});
        background-size: cover;
        background-position: center;
        width: 100%;
        padding: 18rem 0;
  }
`;

    return (
        <Container className="slide-item">
            <p className='title'>{title}
                <span>{subTitle}</span>
            </p>
            <p className='descs1'>{desc}</p>
        </Container>
    );
}
