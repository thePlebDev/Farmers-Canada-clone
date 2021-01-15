import React,{useState} from 'react';
import styled from 'styled-components'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


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

const Modal = styled.div`
  visibility:${({state})=>state ? 'visible' : 'hidden'};
  width:100vw;
  height:100%;
  background-color:black;
  opacity:0;
  position:absolute;
  left:0;
  top:0;
  z-index:9;
  transition:0.35s all;
  opacity:${({state})=>state ? '0.7':'0'};

`

const CloseContainer = styled.div`

color:white;
z-index:99;
position:absolute;
right:0%;
top:0%;
transition:0.35s all;
transform:${({state})=>state ? 'translateY(0px)':'translateY(15px)'}

`


const Navigation =()=>{
  const [state,setState] = useState(false)

  const handleClick =()=>{
    setState(!state)
  }

  return(
    <Container>

      <Modal state={state}>
        <CloseContainer onClick={()=>handleClick()} state={state}>
          <CloseIcon style={{fontSize:'40px'}}/>
        </CloseContainer>
      </Modal>

      <Section1Container>
        <MenuContainer onClick={()=>{handleClick()}}>
          <MenuIcon/>
        </MenuContainer>
        <Farmer>F</Farmer>
      </Section1Container>

     <Section1Container  >
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

export default Navigation
