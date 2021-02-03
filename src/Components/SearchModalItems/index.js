import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const ItemContainer = styled.div`
  margin:10px 0;
  border-bottom:1px solid rgba(0,0,0,0.2);
  padding:2px;
  padding-bottom:10px;
  display:flex;
  align-items:center;
  cursor:pointer;

`

const Image = styled.img`
  width: 40px;
  height:40px;
  @media only screen and (min-width: 770px) {
    width:60px;
    height:60px;

}
`
const TextContainer =styled.div`

`

const Text = styled.div`
  font-weight:600;
  color:#333;
  font-size:11px;
  margin-left:10px;
  @media only screen and (min-width: 770px) {
    font-size:14px;

}
`

const Text2 = styled(Text)`
margin-top:5px;
  color:rgba(0,0,0,0.3);
  font-weight:300;
`



const SearchModalItems = ({search})=>{

  return(
    search.map((item,index)=>{
      return(
        <Link to={`food/${item.id}`} key={index}>
          <ItemContainer>
            <Image alt={item.name} src={item.img}/>
            <TextContainer>
              <Text>{item.name}</Text>
              <Text2>sold by {item.soldBy}</Text2>
            </TextContainer>
          </ItemContainer>
        </Link>
      )
    })
  )
}


export default SearchModalItems
