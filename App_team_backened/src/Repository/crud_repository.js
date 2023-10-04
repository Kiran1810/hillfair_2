class CrudRepository{

    constructor(model){
    this.model=model
}

async create(data){
 const res= await this.model.create(data);
    return res;
}

}

module.exports= CrudRepository