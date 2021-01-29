import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Container = styled.div`
  border:1px solid #777;
  text-align:center;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Text = styled.div`
  color:#5c5c5c;
  font-weight:500px;
  font-size:25px;
  margin-right:10px;
`



const SocialMedia = () =>{

  return(
    <Container>
      <Text>Find Us On</Text>
      <FacebookIcon style={{fontSize:'60px',color:'#3a589d'}}/>
      <InstagramIcon style={{fontSize:'60px',color:'#dd4e31'}}/>
      <TwitterIcon style={{fontSize:'60px',color:'#2478ba'}}/>
    </Container>
  )
}

export default SocialMedia
