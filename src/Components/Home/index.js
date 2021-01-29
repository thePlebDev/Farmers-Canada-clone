import React from 'react';
import styled from 'styled-components'

import SearchForm from '../SearchForm'
import TextInputLarge from '../TextInputLarge';
import ImageComponent from '../ImageComponent'
import InfoCard from '../InfoCard';
import SocialMedia from '../SocialMedia'

import useSearchHook from '../../Hooks/UseSearchHook'
import searchUtils from '../../Utils/SearchUtils'

const Container = styled.div`
  position:relative;
  z-index:1;

`

const Image = styled.img`
  object-position: 50% 20%;
  height:350px;
  width:100%;
  object-fit:cover;
  display:block;
  @media only screen and (min-width: 767px){
    height:500px;
  }
`

const SubContainer = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  z-index:9999999999999999;
  color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:rgba(0,0,0,0.3);
  font-family: "Varela Round";
`
const WordContainer = styled.div`

  width:80%;
`

const Word = styled.div`
  text-align:center;
  font-size:1.7rem;
  @media only screen and (min-width: 767px){
    font-size:4rem;
  }
`
const NewThingCOntainer = styled.div`
  background-color:red;
  width:100%;

`

const Home = ()=>{
  const {state,handleSubmit,handleChange,errors} = useSearchHook(searchUtils.validate)

  return(
    <>
      <Container>
        <Image src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80" alt="strawberries" />
        <SubContainer>
          <WordContainer>
              <Word>Fresh local pickups or</Word>
              <Word>Cash on delivery</Word>
              <SearchForm handleSubmit={handleSubmit}>
                <TextInputLarge state={state.search} errors={errors} handleChange={handleChange}/>
              </SearchForm>
          </WordContainer>
        </SubContainer>
      </Container>
      <ImageComponent />
      <InfoCard/>
      <SocialMedia/>
      </>
  )
}

export default Home
