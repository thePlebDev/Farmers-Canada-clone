import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

const Dot = styled.div`
  width:20px;
  height:20px;
  background-color:red;
  position:absolute;
  border-radius:50%;
  color:white;
  top:-10px;
  right:-10px;
  display:${({state})=>state ? 'flex' : 'none'};
  font-size:15px;
  padding:2px;
  align-item:center;
  justify-content:center;
  @media only screen and (max-width: 850px) {
    top:-20px;
    right:5px;
}

`



const CartDot =({number})=>{
  const [state,setState] = useState(false)

useEffect(()=>{
  if(number!==0){
    setState(true)
  }else{
    setState(false)
  }
},[state,number])

  return(
    <Dot state={state}>{number}</Dot>
  )
}

const mapStateToProps =(state)=>{
  return{
    number:state.cartReducer.cart.length
  }
}


const ConnectedCartDot = connect(mapStateToProps)(CartDot)

export default ConnectedCartDot
