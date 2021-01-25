import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import SmallInfo from './SmallInfo'
import Options from './Options'
import Pickups from './Pickups'

const Container = styled.div`
  border:2px solid red;
`



const IndivGrocery =({currentItem,currentSeller})=>{


  return(
    <Container>
      <SmallInfo seller={currentSeller}/>
      <Options/>
      <Pickups/>
    </Container>
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
