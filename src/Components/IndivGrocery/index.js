import React from 'react'
import styled from 'styled-components'

import SmallInfo from './SmallInfo'
import Options from './Options'
import Pickups from './Pickups'


const Container = styled.div`
  border:2px solid red;
`



const IndivGrocery =()=>{
  return(
    <Container>
      <SmallInfo/>
      <Options/>
      <Pickups/>
    </Container>
  )
}

export default IndivGrocery
