import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux'

import mobileCartDispatcher from '../../../Dispatchers/MobileCart'

const Container = styled.div`

  display:flex;

  position:relative;
  padding-top:20px;
`
const Image = styled.img`
  width:60px;
  height:60px;
`

const InfoContainer = styled.div`
  margin-left:30px;
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



const CartItem = ({name,option,price,farmName,img,removeItem,productId})=>{

  return(
    <Container>
      <Image al='food' src={img}/>
      <InfoContainer>
        <Info> {name} - {option}</Info>
        <TinyInfo>Sold By:</TinyInfo>
        <TinyInfo>{farmName}</TinyInfo>
        <TinyInfo>1 x <Number>CA ${price}.00</Number></TinyInfo>

        <ButtonContainer onClick={()=>{removeItem(productId,price)}}>
          <CloseIcon style={{color:'#aaa',fontSize:'20px'}}/>
        </ButtonContainer>
      </InfoContainer>
    </Container>
  )
}
const mapDispatchToProps ={
  removeItem:mobileCartDispatcher.removeItem
}

const ConnectedCartItem = connect(null,mapDispatchToProps)(CartItem)


export default ConnectedCartItem
