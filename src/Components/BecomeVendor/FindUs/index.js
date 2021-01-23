import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Container = styled.div`
  width:80%;
  display:flex;
  margin:20px auto;
  align-items:center;
  justify-content:center;
  padding:20px 0;
  border-top:1px solid #333;
  border-bottom:1px solid #333;
`





const FindUs =()=>{

  return(
    <Container>

      <FacebookIcon style={{fontSize:'60px',color:'#3a589d'}}/>
      <InstagramIcon style={{fontSize:'60px',color:'#dd4e31'}}/>
      <TwitterIcon style={{fontSize:'60px',color:'#2478ba'}}/>
    </Container>
  )
}

export default FindUs
