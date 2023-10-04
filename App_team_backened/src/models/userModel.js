const mongoose=require("mongoose");
const bcrypt=require("bcrypt")

const userSchema = new mongoose.Schema({

email:{
 type:String,
 required:true,
 unique:true
},

password:{
type: String}

})

userSchema.pre("save",function(next){
const user=this
const encryptedPassword= bcrypt.hashSync(user.password,8)
user.password= encryptedPassword;
next();

})

const User2= mongoose.model("User2",userSchema)

module.exports= {User2}