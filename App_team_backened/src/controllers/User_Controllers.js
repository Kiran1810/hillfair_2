const { StatusCodes }=require("http-status-codes");
const {UserService}=require("../services")


const {SuccessResponse,ErrorResponse}=require("../utils/common");

// Request for the signup of the user
async function signUp(req,res){
    try{
const user=await UserService.create({
    email:req.body.email,
    password:req.body.password
})
SuccessResponse.data=user;
return res
.status(StatusCodes.CREATED)
.json(SuccessResponse);
}

catch(error){
     console.log(error)
     ErrorResponse.error=error;
     return res
     .status(StatusCodes.BAD_REQUEST)
     .json(ErrorResponse)
     
    }
}

//Request for the signIn of the user
async function signIn(req,res){
    try{
const user=await UserService.signin({
    email:req.body.email,
    password:req.body.password
})
SuccessResponse.data=user;
return res
.status(StatusCodes.CREATED)
.json(SuccessResponse)
}

catch(error){
     console.log(error)
     ErrorResponse.error=error;
     return res
     .status(StatusCodes.BAD_REQUEST)
     .json(ErrorResponse)
     
    }
}

module.exports= {signUp,signIn}