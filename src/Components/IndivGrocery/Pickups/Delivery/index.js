import React from 'react';
import styled from 'styled-components';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const Container = styled.div`
  border:1px solid #0075ff;
  border-radius:4px;
  width:90%;
  margin:10px auto;
`
const LocalButton = styled.button`
  background-color:#0075ff;
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



const Delivery =()=>{

  return(
    <Container>
      <LocalButton>
        <LocalAtmIcon style={{marginRight:'15px',marginLeft:'-10px'}}/>
        Cash on delivery
      </LocalButton>
      <Text>
        Delivery: Estimated delivery in 1 day
        Delivery cost: CA$ 10.00 to your adress.
        Free delivery on orders of CA$ 25.00 or up.
      </Text>
    </Container>
  )
}

export default Delivery
