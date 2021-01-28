import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

const Container = styled.div`

  display:flex;
  justify-content:space-around;
  position:relative;
  padding-top:20px;
`
const Image = styled.img`
  width:60px;
  height:60px;
`

const InfoContainer = styled.div`

`
const Info = styled.div`
  margin-bottom:5px;
  font-size:0.7em;
  color:#333333;
  font-weight:300;
`
const TinyInfo = styled(Info)`
  font-size:0.7em;
  color:#333;

`

const Number = styled.span`
  color:#b12704

`
const ButtonContainer = styled.div`
  position:absolute;
  top:0;
  right:0;

`



const CartItem = ()=>{

  return(
    <Container>
      <Image al='food' src='https://images.unsplash.com/photo-1540040920895-4ed39be080b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'/>
      <InfoContainer>
        <Info> Snow Peas - 1/2 pint</Info>
        <TinyInfo>Sold By:</TinyInfo>
        <TinyInfo>Timmothy Collective</TinyInfo>
        <TinyInfo>1 x <Number>CA $4.00</Number></TinyInfo>

        <ButtonContainer>
          <CloseIcon style={{color:'#aaa',fontSize:'20px'}}/>
        </ButtonContainer>
      </InfoContainer>
    </Container>
  )
}


export default CartItem
