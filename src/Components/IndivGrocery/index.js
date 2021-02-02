import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import SmallInfo from './SmallInfo'
import LargeInfo from './LargeInfo'
import Pickups from './Pickups'

const Container = styled.div`
  margin-top:20px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
  justify-content:space-between;
`

const Image = styled.img`
    height:168px;
    width:268px;
    margin:0 auto;
    margin-top:30px;
    @media only screen and (min-width: 760px) {
    width:300px;
    height:333px;
};
`



const IndivGrocery =({currentItem,currentSeller})=>{
  // console.log(currentItem)
  // console.log(currentSeller)

  return(
    <>
    <SmallInfo seller={currentSeller}/>
    <Container>
      <Image src={currentItem.img} alt={currentItem.name}/>
      <Pickups farmName={currentSeller.name} item={currentItem}/>
      <LargeInfo seller={currentSeller}/>
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
