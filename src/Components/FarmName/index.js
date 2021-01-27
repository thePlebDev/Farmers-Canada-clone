import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FarmInfo from './FarmInfo'
import Items from './Items'



const Banner = styled.img`
  height:230px;
  width:100%;
  object-fit:cover;
`


const FarmName =({sellerInfo})=>{
  console.log(sellerInfo)

  return(
    <>
      <Banner alt='farm' src='https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'/>
      <FarmInfo location={sellerInfo.location} name={sellerInfo.name}/>
      <Items food={sellerInfo.items}/>
    </>
  )
}

const mapStateToProps =(state,ownProps) =>{
  const id = ownProps.match.params.farmId
  return{
    sellerInfo:state.sellersReducer.sellers[0][id]
  }
}

const ConnectedFarmName = connect(mapStateToProps)(FarmName)

export default ConnectedFarmName
