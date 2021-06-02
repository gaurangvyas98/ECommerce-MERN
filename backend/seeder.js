const mongoose = require('mongoose')
const User = require('./models/userSchema')
const Product = require('./models/productSchema')
const Order = require('./models/orderSchema')
const productsArray = require('./data/products')
const usersArray = require('./data/user')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()

connectDB()

const importData = async() =>{
    try{
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        const createdUser = await User.insertMany(usersArray)

        const adminUser = createdUser[0]

        const sampleProducts = productsArray.map((product) => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)

        console.log('Data imported!')
        process.exit()
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}

const destroyData = async() =>{
    try{
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        console.log('Data destroyed!')
        process.exit()
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}

//creating a script "node backend/seeder -d for destroying data from terminal"
if(process.argv[2] === '-d'){
    destroyData()
}
else{ 
    //creating a script "node backend/seeder for importing data from terminal"
    importData()
}