import React from 'react';
import styled from 'styled-components'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';


const Container = styled.div`
  border:1px solid red;
  height:70px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const Vendor = styled.div`
  background-color:#29b706;
  padding:6px 10px;
  color:white;
  width:120px;
  height:20px;
  border-radius:4px;
  font-weight:bold;
  margin-left:5px;
  margin-right:5px;
`
const ShoppingContainer = styled.div`
  font-size:20px;
  color:rgba(102,102,102,0.85);
  margin-left:5px;
  margin-right:5px;
`
const MenuContainer = styled.div`
  color:#999;
  border:1px solid #999;
  height:25px;
  padding:2px 3px;
  display:flex:
  align-items:center;
  justify-content:center;
  border-radius:4px;
  margin-left:5px;
  margin-right:5px;

`
const Farmer = styled.div`
    background-color:#29b706;
    color:white;
    font-size:35px;
    margin:0 3px;
    font-weight:bold;
    padding:1px 13px;
    border-radius:5px;
    margin-left:5px;
    margin-right:5px;

`

const Section1Container = styled.div`

  display:flex;
  align-items:center;
`




const Navigation =()=>{

  return(
    <Container>
      <Section1Container>
        <MenuContainer>
          <MenuIcon/>
        </MenuContainer>
        <Farmer>F</Farmer>
      </Section1Container>

     <Section1Container>
        <Vendor>Become a Vendor</Vendor>
        <ShoppingContainer>
            <ShoppingBasketIcon/>
        </ShoppingContainer>
      </Section1Container>

    </Container>
  )
}

export default Navigation
