import React from 'react';
import styled from 'styled-components'


import SelectInput from '../SelectInput';
import AddToCart from '../AddToCart'

const InfoContainer = styled.div`

    display:grid;
    align-items:center;
    justify-content:flex-start;
    width:90%;
    margin:20px auto;
    margin-top:0;

`
const Title = styled.h1`
  font-size:24px;
  font-weight:400;
  color:black;
  text-align:start;

  postition:relative;
`
const TextContainer = styled.div`

`
const Price = styled.div`
  font-size:1.15em;
  color:#b12704;
  text-align:start;
`

const Options = ({item})=>{

  return(
    <InfoContainer>
      <TextContainer>
        <Title>{item.name}</Title>
        <Price>CA ${item.price}</Price>
        <SelectInput options={item.sizeOptions}/>
        <AddToCart item={item}/>
      </TextContainer>
    </InfoContainer>
  )

}

export default Options
