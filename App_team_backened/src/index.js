
const express=require('express');
const {connect} = require("./Database/db");
const { ServerConfig } = require('./config');

const apiRoute=require('./routes')
const app=express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoute)

app.listen(ServerConfig.PORT, async()=>{
    console.log(`server started on PORT:${ServerConfig.PORT}`)
    connect();
    console.log("connect")
})