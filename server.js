
const express = require("express");
const connect = require("./config/conntectDB");
require('dotenv').config({ path: "./config/.env" });

const User = require("./models/User");


var app = express()

// parsing middleware

app.use(express.json())

// database connection
connect()


// CRUD

// add users
app.post('/add', async (req,res) => {
    const { fullName, email, phone } = req.body
    try {
        const newUser = new User({
            fullName,
            email,
            phone
        })
        await newUser.save()
        res.send(newUser)
    } catch (error) {
        console.log(error)
    }
})

// get users

app.get('/get', async(req,res) => {
    const users = await User.find()
    res.send(users);
})

// get a specifc user
app.get('/get/:id', async(req,res) => {
    const users = await User.findById(req.params.id)
    res.send(users);
})

// update 
app.put("/update/:id",async(req,res)=>{
try {
    const editeUser = await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
    res.send(editeUser)
} catch (error) {
    console.log(error)
    
}
})

// delete

app.delete("/delete/:id", async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send("User deleted")
    } catch (error) {
        console.log(error)
        
    }
})

var PORT = process.env.PORT || 5000;


app.listen(PORT, (err) =>
    err ? console.log(err) : console.log(`server is running on port ${PORT}`))