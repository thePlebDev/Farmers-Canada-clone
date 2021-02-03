import React from 'react';
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {connect} from 'react-redux'

import useAddToCart from '../../../Hooks/UseAddToCart'
import cartDispatcher from '../../../Dispatchers/CartDispatcher'

const Container = styled.div`
  display:flex;
  margin-bottom:30px;
`
const IncreaseContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid rgba(0,0,0,0.3);
  padding:2px;
  border-radius:4pxpx;

`
const AddToCartButton = styled.button`
  margin-left:20px;
  border-radius:4px;
  background-color:#d26e4b;
  color:white;
  border:none;
  padding:3px 25px;
  cursor:pointer;

`
const Number = styled.div`
  border:1px solid rgba(0,0,0,0.3);
  border-top:none;
  border-bottom:none;
  height:85%;
  padding:5px;
  display:flex;
  align-items:center;
  justify-content:center;
`


const AddToCart = ({addItem,item})=>{
  //console.log(item)

  const {state,handleClickNegative,handleClickPositive} = useAddToCart()

  return(
    <Container>
      <IncreaseContainer>
          <RemoveIcon onClick={()=>{handleClickNegative()}} style={{cursor:'pointer'}}/>
          <Number>{state}</Number>
        <AddIcon onClick={()=>{handleClickPositive()}} style={{cursor:'pointer'}}/>
      </IncreaseContainer>
      <AddToCartButton onClick={()=>{addItem(state,item)}}>Add to Cart</AddToCartButton>
    </Container>
  )
}

const mapDispatchToState ={
  addItem:cartDispatcher.addItem
}

const ConnectedAddToCart = connect(null,mapDispatchToState)(AddToCart)
export default ConnectedAddToCart
