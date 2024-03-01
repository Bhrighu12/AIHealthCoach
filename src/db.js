const express = require('express');
const bcrypt = require("bcrypt");
const path = require('path')
const collection = require("./config");

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended:false}));


app.set("view engine","ejs")
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname,'..public')));


app.get("/",(req,res)=>{
    res.render('login');
});

app.get("/signup",(req,res)=>{
    res.render("signup");
});


app.post("/signup",async(req,res)=>{
    const data={
        name:req.body.username,
        password:req.body.password
    }

    const existingUser = await collection.findOne({name:data.name});

    if(existingUser){
        res.send("User already exists .please choose a different username");
    }
    else{
        res.render("login")
           //hash the password
        const saltRounds = 10;
        const hasedPassword = await bcrypt.hash(data.password,saltRounds);

        data.password=hasedPassword;

        const userdata = await collection.insertMany(data);
        console.log(userdata);
    }

    const userdata = await collection.insertMany(data);
    console.log(userdata);
});

app.post("/login",async(req,res)=>{
    try{
        const check = await collection.findOne({name:req.body.username});
        if(!check){
            res.send("user name cannot found");
        }
        const isPassword = await bcrypt.compare(req.body.password,check.password);
        if(isPassword){
            res.redirect('http://localhost:3000');
        }
        else{
            req.send("Wrong password");
        }

    }catch{
        res.send("Wrong details");

    }
});

const port = 5001;
app.listen(port,()=>{
    console.log('Server running on port: ${port}');
})

