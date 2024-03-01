const mongoose = require("mongoose");
const connect = mongoose.connect('mongodb://127.0.0.1:27017/Login');

connect.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("Database cannot connect to database");
})

const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        requires:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection = new mongoose.model("users",LoginSchema);
module.exports=collection;