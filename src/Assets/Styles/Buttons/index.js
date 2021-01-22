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

const LargeVendor = styled.div`
  background-color:#9c3;
  padding: 10px 50px;
  color:white;
  font-size:22px;
  width:200px;
  margin:30px auto;
  border-radius:30px;
  cursor:pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  transition:0.35s all;

  &:hover{
      box-shadow: 0 5px 30px rgba(0,0,0,0.5);
      transform:scale(1.2);
  }



`


export {Vendor,LargeVendor}
