const mongoose = require("mongoose")


mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.db ,{ useNewUrlParser: true, useUnifiedTopology: true }) ;
        console.log("database connected");
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = connect;