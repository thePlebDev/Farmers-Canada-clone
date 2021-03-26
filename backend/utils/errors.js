class BadRequestError extends Error{
  constructor(error,code){
    super(error.message);
    this.data ={error}
    this.statusCode = code 
  }
}


module.exports = BadRequestError
