import React from 'react';
import styled from 'styled-components';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Container = styled.div`
  border:1px solid #29b706;
  border-radius:4px;
  width:90%;
  margin:10px auto;
`

const LocalButton = styled.button`
  background-color:#29b706;
  border-radius:4px;
  color:#fff;
  padding:5px 20px;
  font-size:1em;
  font-weight:bold;
  border:none;
  margin:20px 5px;
  display:flex;
  align-items:center;
  justify-content:space-around;

`
const Text = styled.div`
  font-size:13px;
  font-weight:300;
  color:#333;
  margin:20px 5px;
  line-height:1.6;
`


const Local =()=>{

  return(
    <Container>
      <LocalButton>
        <ShoppingBasketIcon style={{marginRight:'15px',marginLeft:'-10px'}}/>
        Free Local pickup
      </LocalButton>
      <Text>Available on weekdays and Saturdays from 08:00 AM to 8:00 PM</Text>
    </Container>
  )
}

export default Local
