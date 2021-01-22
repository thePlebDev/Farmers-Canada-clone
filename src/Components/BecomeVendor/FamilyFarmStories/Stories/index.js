import React from 'react';
import styled from 'styled-components';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Container = styled.div`
  border-top:1px solid #333;
  margin-top:40px;
  padding-top:40px;
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(270px,1fr));
  align-items:center;
`
const Image = styled.img`
  width:268px;
  height:205px;
`

const TextContainer = styled.div`

`
const IconContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    color:#9c3;
`

const Text = styled.p`
  font-size:20px;
  font-weight:300;
  color:#333;
  line-height:1.6;
`
const MiniText = styled.p`
  font-weight:300;
  font-size:14px;
  color:#333;
`
const Name = styled.span`
  font-weight:bold;
  font-size:15px;
`
const Profile = styled(Name)`
  color:#9c3;
`





const Stories = ()=>{
  return(
    <Container>
      <Image alt="old farmer" src="https://images.unsplash.com/photo-1509506489701-dfe23b067808?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1668&q=80"/>
      <TextContainer>
        <IconContainer>
            <FormatQuoteIcon style={{fontSize:'60px'}}/>
        </IconContainer>
        <Text>Farmers Canada has saved us hundreds of farmers market hours.
        At this age, we can not run around the city and sell our produce.
        Finding Farmers Canada was like a gift to us.</Text>
        <MiniText>
          <Name>Rob and Susan</Name> from <Profile>Barners Farm</Profile> Elmvale,Ontario
        </MiniText>
      </TextContainer>
    </Container>
  )
}

export default Stories
