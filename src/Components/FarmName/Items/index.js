import React from 'react';
import styled from 'styled-components'

const Container = styled.div`

  width:50%;
  margin:60px auto;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
  justify-items:center;
  grid-gap:20px;

`
const ImagesContainer = styled.div`
  width:130px;
  border:1px solid rgba(0,0,0,0.1);
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.3);
  border-radius:4px;
  padding:2px;
  cursor:pointer;
  transition: 0.35s all;

  &:hover{
    box-shadow: 0 5px 30px 0 rgba(0,0,0,0.3);
  }

`

const Image = styled.img`
  height:92px;
  width:130px;
  object-fit:center;
  margin: auto;
  margin-top:0;
  border-radius:4px;
`
const Title = styled.p`
  font-weight:500;
  margin-top:0px;
  text-align:center;
  width:80%;
  margin:0px auto;
`
const Price = styled.div`

  color:#b12704;
  font-size:14px;
  width:80%;
  margin:0px auto;
  text-align:center;


`



const Items =()=>{
  return(
    <Container>
      <ImagesContainer>
        <Image alt="corn" src='https://images.unsplash.com/photo-1540040920895-4ed39be080b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
        <Title>Corn</Title>
        <Price>CA $2.00</Price>
      </ImagesContainer>
    </Container>
  )
}

export default Items
