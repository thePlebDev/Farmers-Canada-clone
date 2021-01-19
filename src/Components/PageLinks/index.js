import React from 'react';
import styled from 'styled-components'

import {Vendor} from '../../Assets/Styles/Buttons'


const Container = styled.div`

  margin-top:10px;
`
const Item = styled.div`

  padding-left:20px;
  padding-top:15px;
  padding-bottom:15px;
  font-size:0.8em;
  text-transform:uppercase;
  letter-spacing:0.2em;
  font-weight:bolder;
  color:rgba(102,102,102,0.85);
  border-top:1px solid #ececec;
  border-bottom:1px solid rgb(215, 215, 215);
  margin-top:10px;
  margin-bottom:10px;
  font-family: "Varela Round";
`


const PageLinks =()=>{

  return(
    <Container>
        <Item>Features</Item>
        <Item>Network</Item>
        <Item>Careers</Item>
        <Item>Terms and conditions</Item>
        <Item>Register</Item>
        <Item>Login</Item>

        <Vendor>Become a Vendor</Vendor>

    </Container>
  )
}

export default PageLinks
