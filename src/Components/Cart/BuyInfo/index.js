import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Delivery from '../../IndivGrocery/Pickups/Delivery'
import Local from '../../IndivGrocery/Pickups/Local'


const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:auto;

    @media only screen and (min-width: 860px) {
      width:500px
}
`

const Title = styled.div`
  font-weight: 500;
  margin:10px 0;
  font-size:0.96em;

`
const InfoContainer = styled.div`
  display:flex;
  justify-content:space-between;
  border-bottom: 1px solid #eee;
`
const Item = styled(Title)`
  font-size:0.8em

`
const Item2 = styled(Item)`
  color:#b12704;

`
const Info = styled.h5`
  font-size:13px;
  font-weight:300;
  border-bottom: 1px solid #eee;
  padding-bottom:15px;
`


const BuyInfo =({amount})=>{

  return(
    <Container>
      <Title> How you will pay</Title>

      <InfoContainer>
        <Item>Item(s) total:</Item>
        <Item2>CA ${amount}.00</Item2>
      </InfoContainer>

      <Info> Processing time: Ready to pickup or deliver in one day </Info>

      <InfoContainer>
        <Item>Pickup Order total:</Item>
        <Item2>CA ${amount}.00</Item2>
      </InfoContainer>

      <Local/>
      <Delivery/>

    </Container>
  )
}

const mapStateToProps =(state)=>{
  //console.log(state.cartReducer)
  return{
    amount:state.cartReducer.amount.finalValue
  }
}

const ConnectedBuyInfo = connect(mapStateToProps)(BuyInfo)

export default ConnectedBuyInfo
