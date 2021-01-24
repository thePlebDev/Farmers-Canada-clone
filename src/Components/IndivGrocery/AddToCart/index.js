import React from 'react';
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

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


const AddToCart = ()=>{



  return(
    <Container>
      <IncreaseContainer>
        <RemoveIcon style={{padding:'4px'}}/>
          <Number>0</Number>
        <AddIcon style={{padding:'4px'}}/>
      </IncreaseContainer>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </Container>
  )
}


export default AddToCart
