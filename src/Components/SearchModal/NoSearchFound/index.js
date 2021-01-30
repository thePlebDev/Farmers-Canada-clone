import React from 'react';
import styled from 'styled-components';


const Text = styled.div`
  color:rgba(0,0,0,0.3);

`



const NoSearchFound =({text})=>{
  return(
    <Text>No results matched for your query "{text}"</Text>
  )
}

export default NoSearchFound
