import React from 'react';
import styled from 'styled-components'


import { connect } from 'react-redux'

import cartDispatcher from '../../../../Dispatchers/CartDispatcher'

//import useAddToCart from '../../../Hooks/UseAddToCart'

const IncreaseContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid rgba(0,0,0,0.3);
  padding:2px;
  width:60px;
  height:30px;
  margin-top:10px;
  margin-bottom:10px;
  margin:10px auto;

`


const Number = styled.div`

  border-top:none;
  border-bottom:none;
  height:85%;
  padding:5px;
  display:flex;
  align-items:center;
  justify-content:center;
`




const ItemIncreaseButton =({amount,addItem,item})=>{

  return(
    <IncreaseContainer>
        <Number>{amount}</Number>
    </IncreaseContainer>
  )
}

const mapDispatchToProps = {
  addItem:cartDispatcher.addItem
}

const ConnectedItemIncreaseButton = connect(null,mapDispatchToProps)(ItemIncreaseButton)

export default ConnectedItemIncreaseButton
