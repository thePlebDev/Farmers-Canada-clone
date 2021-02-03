import React from 'react';

import styled from 'styled-components';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import cardsData from './cardData.js'

const Container = styled.div`
  width:80%;
  margin:0 auto;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  padding:0 10px;
  grid-gap:80px;



`

const Title = styled.h3`
color:#555;
margin-bottom:0px;
font-family: "Varela Round";
font-size:1em;
line-height:1.6;
font-weight:300;
`
const Body = styled.p`
  margin-top:0px;
  font-weight:300;
  font-family: "Varela Round";
  line-height:1.6;
  color:#333;
  margin-bottom:40px;
`





const Cards =()=>{

  return(

    <Container>
      <div>
          <RestaurantIcon style={{fontSize:'40px',color:'#29b706'}}/>
        <Title>{cardsData[0].title}</Title>
        <Body>{cardsData[0].body}</Body>
      </div>

      <div>

          <ShoppingBasketIcon style={{fontSize:'40px',color:'#29b706'}}/>

        <Title>{cardsData[1].title}</Title>
        <Body>{cardsData[1].body}</Body>
      </div>

      <div>

          <LocalAtmIcon style={{fontSize:'40px',color:'#29b706'}}/>

        <Title>{cardsData[2].title}</Title>
        <Body>{cardsData[2].body}</Body>
      </div>
    </Container>
  )
}

export default Cards
