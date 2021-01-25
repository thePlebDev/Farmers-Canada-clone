const sellersState ={
  sellers:[
    {
      0:{
        name:"Frank Farms",
        location:"Alberta, Canada",
        items:[
        {
          name:'Peas',
          img:'https://images.unsplash.com/photo-1571070703151-4f99fa9cd3b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          price:'2.00',
          id:0,
        },
        {
          name:'Corn',
          img:'https://images.unsplash.com/photo-1540040920895-4ed39be080b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          price:'5.00',
          id:1,
        },
        {
          name:'Lettuce',
          img:'https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80',
          price:'2.50',
          id:2,
        },
        {
          name:'Organic spinach',
          img:'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
          price:'5.00',
          id:3,
        },
        {
          name:'Garlic',
          img:'https://images.unsplash.com/photo-1588167109140-e81c3080d557?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2324&q=80',
          price:'3.00',
          id:4,
        },
        {
          name:'Vegtable pack',
          img:'https://images.unsplash.com/photo-1505692794401-b371fa865622?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          price:'9.00',
          id:5,
        }
      ]
    },
    1:{
      name:"Timmothy Collective",
      location:'Moncton, New Brunswick',
      items:[
        {
          name:'Shrimp',
          img:'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          price:'12.00',
          id:0,
        },
        {
          name:' Wild salmon',
          img:'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1663&q=80',
          price:'22.00',
          id:1,
        },
        {
          name:'Wild lobster',
          img:'https://images.unsplash.com/photo-1590759668628-05b0fc34bb70?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
          price:'32.00',
          id:2,
        },
      ]
    }
}
]
}

const sellerReducer =(state=sellersState)=>{
  return state
}

export default sellerReducer
