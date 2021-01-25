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

const Options = ({item})=>{

  return(
    <InfoContainer>
      <Image  alt={item.name} src={item.img} />
      <TextContainer>
        <Title>{item.name}</Title>
        <Price>CA ${item.price}</Price>
        <SelectInput options={item.sizeOptions}/>
        <AddToCart/>
      </TextContainer>
    </InfoContainer>
  )

}

export default Options
