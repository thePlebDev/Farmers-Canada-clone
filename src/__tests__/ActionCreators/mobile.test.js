import mobileViewDispatch from '../../Dispatchers/MobileView'


describe('it should just test the action creators',()=>{

  it('will test the false action creator',()=>{
    expect(mobileViewDispatch.false().type).toBe("FALSE")
  })

  it('will test the true action creator',()=>{
    expect(mobileViewDispatch.true().type).toBe("TRUE")
  })

})
