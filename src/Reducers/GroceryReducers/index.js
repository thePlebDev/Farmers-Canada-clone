const groceryState ={
  groceries:[
    {
      name:'peas',
      img:'https://images.unsplash.com/photo-1571070703151-4f99fa9cd3b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      price:'2.00',
      id:0,
      sizeOptions: [{option:'1/2 pint'}]
    }
  ]
}

const groceryReducer =(state=groceryState)=>{
  return state
}

export default groceryReducer
