const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`Connected to MongoDB ${conn.connection.host}`)
    }
    catch(error){
        console.log(`Error connnecting to MongoDB ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDB;