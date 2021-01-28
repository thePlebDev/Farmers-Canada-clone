import React from 'react';
import styled from 'styled-components';

import CartItem from './CartItem'


const Container = styled.div`

`
const Title = styled.h4`
  text-transform:uppercase;
  text-align:center;
  color:#555;
  padding-bottom:10px;
`

const Total = styled.p`
  font-weight:bolder;
  text-align:center;
  font-weight:300;
  border-top:1px solid rgba(0,0,0,0.3);
  border-bottom:1px solid rgba(0,0,0,0.3);
  padding:10px 0;
`
const Number = styled.span`
  color:#b12704;
`

const Button = styled.div`
  background-color:#29b706;
  border-radius:4px;
  padding:5px 30px;
  width:40%;
  margin:10px auto;
  text-align:center;
  color:white;
`

const Button2 = styled(Button)`
  background-color:#E62E04;
`

const MobileCart =()=>{

  return(
    <Container>
      <Title>Cart</Title>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <Total>SubTotal: <Number>CA $14.00</Number></Total>
      <Button>View cart</Button>
      <Button2>Cechkout</Button2>
    </Container>
  )
}

export default MobileCart
