import React from 'react';
import styled from 'styled-components'


import SelectInput from '../SelectInput';
import AddToCart from '../AddToCart'


const Image = styled.img`
    height:198px;
    width:298px;
`
const InfoContainer = styled.div`

    display:grid;
    align-items:center;
    justify-content:center;
`
const Title = styled.h1`
  font-size:24px;
  font-weight:400;
  color:black;

  postition:relative;
`
const TextContainer = styled.div`

`
const Price = styled.div`
  font-size:1.15em;
  color:#b12704;
`

const Options = ()=>{

  return(
    <InfoContainer>
      <Image  alt="food" src='https://images.unsplash.com/photo-1540040920895-4ed39be080b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
      <TextContainer>
        <Title>Corn</Title>
        <Price>CA $2.00</Price>
        <SelectInput/>
        <AddToCart/>
      </TextContainer>
    </InfoContainer>
  )

}

export default Options
