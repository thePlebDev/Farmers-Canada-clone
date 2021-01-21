import React from 'react';
import styled from 'styled-components'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';


const cardsData = [
  {
    title:'What is listing?',
    body:'You will fill out a title, pick a price, and upload photos. Your listing helps customers get a sense of what you produce and how you produce'
  },
  {
    title:'What can you sell?',
    body:'Sell anything that is locally grown or cultivated by you. Including bakery,eggs,dairy,meat,honey,beverages,CSA basket or even farm tours.'
  },
  {
    title:'How do you get paid?',
    body:'Just like Farmers Markets, you get paid directly from customers in cash. Offer either Local Pickups or Cash on Delivery to home, restaurants or stores.'
  },
]

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

const IconContainer = styled.div`
  display:flex;
  align-self:center;
  align-items:center;
  color:#29b706;


`




const Cards =()=>{

  return(

    <Container>
      <div>
        <IconContainer>
          <RestaurantIcon style={{fontSize:'40px'}}/>
        </IconContainer>
        <Title>{cardsData[0].title}</Title>
        <Body>{cardsData[0].body}</Body>
      </div>

      <div>
        <IconContainer>
          <ShoppingBasketIcon style={{fontSize:'40px'}}/>
        </IconContainer>
        <Title>{cardsData[1].title}</Title>
        <Body>{cardsData[1].body}</Body>
      </div>

      <div>
        <IconContainer>
          <LocalAtmIcon style={{fontSize:'40px'}}/>
        </IconContainer>
        <Title>{cardsData[2].title}</Title>
        <Body>{cardsData[2].body}</Body>
      </div>
    </Container>
  )
}

export default Cards
