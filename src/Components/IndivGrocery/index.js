import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import SmallInfo from './SmallInfo'
import Options from './Options'
import Pickups from './Pickups'

const Container = styled.div`
  border:2px solid green;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
  justify-content:space-between;
`

const Image = styled.img`
    height:168px;
    width:268px;
    margin:0 auto;
    margin-top:20px;
    @media only screen and (min-width: 760px) {
    width:300px;
    height:333px;
};
`



const IndivGrocery =({currentItem,currentSeller})=>{
  console.log(currentItem)

  return(
    <>
    <SmallInfo seller={currentSeller}/>
    <Container>
      <Image src={currentItem.img} alt={currentItem.name}/>
      <Pickups farmName={currentSeller.name} item={currentItem}/>
    </Container>
    </>
  )
}
const mapStateToProps =(state,ownProps)=>{
  const currentItem = state.groceryReducer.groceries[ownProps.match.params.grocerName]
  //console.log(currentItem.sellerId)

  return{
    currentItem,
    seller:state.groceryReducer.groceries[ownProps.match.params.grocerName].soldBy,
    currentSeller:state.sellersReducer.sellers[0][currentItem.sellerId]
  }
}

const ConnectedIndivGrocery = connect(mapStateToProps)(IndivGrocery)

export default ConnectedIndivGrocery
