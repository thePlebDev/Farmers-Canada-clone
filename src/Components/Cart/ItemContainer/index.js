import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux'

import ItemIncreaseButton from './ItemIncreaseButton'
import mobileCartDispatcher from '../../../Dispatchers/MobileCart'



const Container = styled.div`


  margin-bottom:10px;
  padding-top:8px;
  border-bottom:1px solid #eee;
`
const InfoContainer = styled.div`
  width:100%;
`


const Image = styled.img`
  width:91px;
  height:100px;
  border-radius:4px;
  box-shadow:1px 2px 2px 1px rgba(0, 0, 0, 0.15);
`
const Name = styled.div`
  color:#333333;
  font-weight:300;
  margin-top:5px;
  font-size:13px;
  margin-left:10px;

`

const Price = styled.div`
  color:#b12704;
  margin-left:10px;
`

const Price2= styled(Price)`
  margin-left:0;
    &:before{
      content:'(';
      color:black;
    };
    &:after{
      content:'each )';
      color:black;
    }
`

const PriceContainer = styled.div`

  @media only screen and (max-width: 500px) {
    display:none;
}
`

const SubContainer = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  margin-bottom:20px;
  position:relative;
`

const ButtonContainer = styled.div`
  position:absolute;
  top:0;
  right:10px;
  cursor:pointer;
`




const ItemContainer =({item,removeItem})=>{

  return(
    <>
      <Container>
        <SubContainer>
              <div style={{display:'flex'}}>
                <Image alt={item.name} src={item.img}/>
                <InfoContainer>
                  <Name>{item.name}</Name>
                  <Name>Size: {item.sizeOptions[0].option}</Name>
                </InfoContainer>
              </div>
              <ItemIncreaseButton amount={item.amount} item={item}/>
              <PriceContainer>
                <Price>CA$ {item.price}.00</Price>
                <Price2> CA$ {item.price}.00 </Price2>
              </PriceContainer>
              <ButtonContainer onClick={()=>{removeItem(item.id,item.amount,item.price)}}>
                <CloseIcon style={{color:'red',fontSize:'20px'}}/>
              </ButtonContainer>
          </SubContainer>
      </Container>

    </>
  )
}

const mapDispatchToProps ={
  removeItem:mobileCartDispatcher.removeItem
}

const ConnectedItemContainer = connect(null,mapDispatchToProps)(ItemContainer)




export default ConnectedItemContainer;
