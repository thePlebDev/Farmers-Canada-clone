import React from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux'

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
const Nothing = styled.h1`
font-weight:500;

text-align:center;
width:80%;
margin:10px auto;
padding:13px;

border-bottom:1px solid #eee;



`


const Cart =({cart})=>{
  console.log(cart)
  return(
    <Container>
      <div>
        {
          cart[0]
            ?
            cart.map((item,index)=>{
              return <ItemContainer key={index} item={item}/>
            })
            :
            <Nothing>Cart is empty</Nothing>
        }
        </div>

      <BuyInfo />
    </Container>
  )
}

const mapStateToProps =(state)=>{

  return{
    cart:state.cartReducer.cart
  }
}


const ConnectedCart = connect(mapStateToProps)(Cart)
export default ConnectedCart
