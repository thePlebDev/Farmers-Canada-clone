import React from 'react';
import styled from 'styled-components'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';

import Modal from '../Modal'
import mobileViewDispatch from '../../Dispatchers/MobileView'


const Container = styled.div`

  height:70px;
  padding-top:20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  @media only screen and (min-width: 850px) {
    padding-top:0;
    width:90%;
    margin:0 auto;
  }

`

const Vendor = styled.div`
  background-color:#29b706;
  padding:6px 10px;
  color:white;
  width:140px;
  height:20px;
  border-radius:4px;
  font-weight:bold;
  margin-left:5px;
  margin-right:5px;
  text-align:center;

  @media only screen and (min-width: 850px) {

    width:160px;
  }
`
const ShoppingContainer = styled.div`
  font-size:20px;
  color:rgba(102,102,102,0.85);
  margin-left:5px;
  margin-right:5px;
  border-left:1px solid #29b706;
  padding-left:10px;
  cursor:pointer;
  @media only screen and (min-width: 850px) {
    color: #29b706;
  }
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
  @media only screen and (min-width: 850px) {
    display:none;
  }

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
  position:relative;

`

const Button = styled.div`
  color:#29b706;
  padding:5px 11px;
  font-size:18px;
  font-weight:500px;
  margin:0 10px;
  display:none;
  @media only screen and (min-width: 850px) {
    display:block;
  }
`

const Register = styled(Button)`
  border:1px solid #29b706;

  border-radius:3px;
`






const Navigation =({mobileView,trueDispatcher,falseDispatcher})=>{

  return(
    <Container>

      <Modal state={mobileView} handleClick={falseDispatcher}/>

      <Section1Container>
        <MenuContainer onClick={()=>{trueDispatcher()}}>
          <MenuIcon data-testid="nav-toggle"/>
        </MenuContainer>
        <Farmer>F</Farmer>
      </Section1Container>

     <Section1Container>
        <Vendor>Become a Vendor</Vendor>
        <Button>Login</Button>
        <Register>Register</Register>
        <ShoppingContainer>
            <ShoppingBasketIcon/>
        </ShoppingContainer>
      </Section1Container>

    </Container>
  )
}


const mapStateToProps =(state)=> ({mobileView:state.mobileView})
const mapDispatchToProps ={
  falseDispatcher:mobileViewDispatch.false,
  trueDispatcher:mobileViewDispatch.true
}


const ConnectedNavigation = connect(mapStateToProps,mapDispatchToProps)(Navigation)

export default ConnectedNavigation
