import styled from 'styled-components'




const Vendor = styled.div`
  background-color:#29b706;
  border:1px solid #29b706;
  padding:6px 10px;
  color:white;
  width:140px;
  height:20px;
  border-radius:4px;
  font-weight:bold;
  margin-left:5px;
  margin-right:5px;
  text-align:center;
  cursor:pointer;
  transition:0.25s all;

  @media only screen and (min-width: 850px) {

    width:160px;
  };

  &:hover{
    color:#29b706;
    background-color:white;
  };
`

export {Vendor}
