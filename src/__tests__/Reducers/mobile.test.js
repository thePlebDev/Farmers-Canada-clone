import mobileReducer from '../../Reducers/MobileReducers'

describe('testing the mobile navigation reducers',()=>{
  it('should test when we give it no state',()=>{
    expect(mobileReducer(false,{})).toBe(false)
  })

  it('should test with an action of type true',()=>{
    const action ={type:"TRUE"}
    expect(mobileReducer(false,action)).toBe(true);
  })

  it('should test with an action of type false',()=>{
    const action = {type:"FALSE"}
    expect(mobileReducer(false,action)).toBe(true)
  })
})
