import React from 'react';
import styled from 'styled-components'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css'

import Modal from '../Modal';
import mobileViewDispatch from '../../Dispatchers/MobileView'
import { Vendor } from '../../Assets/Styles/Buttons'
import CartDot from './CartDot'



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
    cursor:pointer


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
  text-decoration:none;
  margin:0 10px;
  display:none;
  cursor:pointer;
  @media only screen and (min-width: 850px) {
    display:block;
  }
`

const Register = styled(Button)`
  border:1px solid #29b706;
  border-radius:3px;
  transition:0.25s all;

  &:hover{
    background-color:#29b706;
    color:white;
  }
`

const ButtonContainer = styled.div`
position:relative;
display:block;
@media only screen and (max-width: 768px) {
  display:none
}
`

const ButtonContainer2 = styled.div`
position:relative;
  display:none;
  @media only screen and (max-width: 768px) {
    display:block;

  }
`




const Navigation =({mobileView,trueDispatcher,falseDispatcher,openDispatcher,closeDispatcher})=>{
  const handleCart =()=>{
    trueDispatcher()
    openDispatcher()
  }

  const handleNav =()=>{
    closeDispatcher()
    trueDispatcher()
  }

  return(
    <Container>

      <Modal state={mobileView} handleClick={falseDispatcher}/>

      <Section1Container>
        <MenuContainer onClick={()=>{handleNav()}}>
          <MenuIcon data-testid="nav-toggle"/>
        </MenuContainer>
        <Link to='/'>
          <Farmer>F</Farmer>
        </Link>
      </Section1Container>

     <Section1Container>

      <Link to='/becomeVendor'>
        <Vendor>Become a Vendor</Vendor>
      </Link>

        <Link to='/login'>
          <Button>Login</Button>
        </Link>

        <Link to='/register'>
          <Register>Register</Register>
        </Link>

        <ButtonContainer>
            <Link to={'/cart'}>
              <ShoppingContainer>
                  <ShoppingBasketIcon/>
                  <CartDot/>
              </ShoppingContainer>
            </Link>
        </ButtonContainer>

        <ButtonContainer2>
          <ShoppingContainer onClick={()=>{handleCart()}}>
              <ShoppingBasketIcon/>
              <CartDot/>
          </ShoppingContainer>
        </ButtonContainer2>

      </Section1Container>
    </Container>

  )
}


const mapStateToProps =(state)=> {

  return{
    mobileView:state.mobileView
  }
}





const mapDispatchToProps ={
  falseDispatcher:mobileViewDispatch.false,
  trueDispatcher:mobileViewDispatch.true,
  openDispatcher:mobileViewDispatch.openCart,
  closeDispatcher:mobileViewDispatch.closeCart,
}


const ConnectedNavigation = connect(mapStateToProps,mapDispatchToProps)(Navigation)

export default ConnectedNavigation
