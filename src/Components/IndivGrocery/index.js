import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import SmallInfo from './SmallInfo'
import Options from './Options'
import Pickups from './Pickups'


const Container = styled.div`
  border:2px solid red;
`



const IndivGrocery =({state})=>{
  console.log(state)
  
  return(
    <Container>
      <SmallInfo/>
      <Options/>
      <Pickups/>
    </Container>
  )
}
const mapStateToProps =(state,ownProps)=>{

  return{
    state:state.groceryReducer.groceries[ownProps.match.params.grocerName]
  }
}

const ConnectedIndivGrocery = connect(mapStateToProps)(IndivGrocery)

export default ConnectedIndivGrocery
