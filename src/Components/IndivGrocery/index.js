import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  margin-top:20px;
`

const TextContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;


`

const Image = styled.img`
  width:60px;
  height:60px;
  padding:2px;
  margin-right:10px;
  box-shadow: 1px 1px 1px rgba(115, 115, 115, 0.17);
  border:3px solid #fff;
  border-radius:3px;
`

const Title = styled.h6`
  text-transform:uppercase;
  margin: 0 auto;
  font-size:14px;
  font-weight:300;
  opacity:0.7;
`
const Location = styled.p`
  margin:0 auto;
  color:#333;
  font-weight:300;
  font-size:12px;
`

const TitleContainer = styled.div`
align-self:center;
`

const Connected = styled.div`
  display:flex;
  justify-content:center;
  margin-top:10px;
`

const ItemsBox = styled.div`
  display:flex;
  flex-direction:column;
  width: 60px;
  height:60px;
  box-shadow: 1px 1px 1px rgba(115, 115, 115, 0.17);
  border:3px solid #fff;
  border-radius:3px;
  align-items:center;
  justify-content:flex-start;
`
const Number = styled.span`
  color:#29b706;
  font-size:22px;
  font-weight:400;
  padding-top:10px;
`

const More = styled.span`
  color:#bdbdbd;
  font-size:14px;
`








const IndivGrocery =()=>{
  return(
    <Container>
      <TextContainer>
        <Image alt="farm logo" src='https://images.unsplash.com/photo-1549924231-f129b911e442?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'/>
        <TitleContainer>
          <Title>Easter Valley Grower</Title>
          <Location> British Columbia, CANADA</Location>
        </TitleContainer>
      </TextContainer>
      <Connected>
        <Image src='https://images.unsplash.com/photo-1560963805-6c64417e3413?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1621&q=80' alt="food logo"/>
        <Image src='https://images.unsplash.com/photo-1560963805-6c64417e3413?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1621&q=80' alt="food logo"/>
        <ItemsBox>
          <Number>6</Number>
          <More>More</More>
        </ItemsBox>
      </Connected>
    </Container>
  )
}

export default IndivGrocery
