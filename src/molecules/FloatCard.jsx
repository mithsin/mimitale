import React from 'react';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';
import { CardWrap } from 'atoms';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-top: 8rem;
`;

export const FloatCard = ({children, title}) => {

  return (
    <Container>
      <CardWrap variant="outlined">
      <Link to="/">
       <img src="https://res.cloudinary.com/paf1david/image/upload/v1599395992/pafpay/oljxozj8fby4beaefipe.png" alt="mimitale" />
      </Link>
      <h2>{title}</h2>
        {children}
      </CardWrap>
    </Container>
  );
}


export default FloatCard;