import React from 'react';
import styled from 'styled-components'

import ItemContainer from './ItemContainer';
import BuyInfo from './BuyInfo'

const Container = styled.div`
  width:90%;
  margin:10px auto;
  
  border-radius:4px;
  padding:5px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(290px,1fr));
`
const Title = styled.h3`

  color:#333333;
  font-weight:500;
  text-align:center;
  border-bottom:1px solid #eee;
  font-size:1em;

`

//<Title>Farm Name</Title>
const Cart =()=>{

  return(
    <Container>
      <ItemContainer/>
      <BuyInfo />
    </Container>
  )
}


export default Cart
