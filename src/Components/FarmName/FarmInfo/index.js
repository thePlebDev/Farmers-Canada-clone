import React from 'react';
import styled from 'styled-components'

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  justify-items:center;
`

const Title = styled.h2`
  text-align:center;
`

const Location = styled.div`
  font-size:15px;
  font-weight:500;
  text-align:center;
  color:#333;
  border-bottom:1px solid rgba(0,0,0,0.46);
  width:60%;
  padding-bottom:10px;
  margin:10px auto;
`

const Contact = styled.div`
  background-color: #0075FF;
  color:white;
  padding:8px 15px;
  border-radius:4px;
  width:100px;
  margin:10px auto;
  text-align:center;
  position:relative;
`

const ChatContainer = styled.div`
  position:absolute;
  left:5px;
  top:5px;
  display:flex;
  align-items:center;

`
const InfoContainer = styled.div`

`

const MediaContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width:150px;
  padding:5px 20px;
  margin:10px auto;
  font-weight:300;
`



const FarmInfo =({name,location})=>{

  return(
    <Container>
        <InfoContainer>
            <Title>{name}</Title>
            <Location>{location}</Location>
            <Contact>
              <ChatContainer><ChatBubbleOutlineIcon/></ChatContainer>
              Contact
            </Contact>
        </InfoContainer>

        <MediaContainer>
          Share: <FacebookIcon style={{fontSize:'40px',color:'#0075FF'}}/> <TwitterIcon style={{fontSize:'40px',color:'#2478ba'}}/> <InstagramIcon style={{fontSize:'40px',color:'#dd4e31'}}/>
        </MediaContainer>
    </Container>
  )
}

export default FarmInfo
