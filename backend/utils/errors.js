class BadRequestError extends Error{
  constructor(error,code){
    super(error.message);
    this.data ={error}
    this.statusCode = code 
  }
}


module.exports = BadRequestError

// so we make all of our methods async and inside the catch method we go
// next(new BadRequestError(error)); this will let us reuse our error class
