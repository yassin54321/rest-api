const mongoose = require("mongoose")
const Schema = mongoose.Schema



const userSchema = new mongoose.Schema({
    fullName :String,
    email : String,
    phone : String,
})
//const User = mongoose.model("User", userSchema);

//module.exports = User;

module.exports = mongoose.model('User',userSchema)