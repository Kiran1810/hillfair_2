const CrudRepository=require('./crud_repository');
const { User2 } = require('../models/userModel');

class UserRepository extends CrudRepository{
constructor(){
    super(User2)
}

async getUserByEmail(email){
    const response= await User2.findOne({email:email})
    return response;
}
}

module.exports = UserRepository;



