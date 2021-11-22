const mongoose = require('mongoose')

function connectDB() {
    mongoose.connect('mongodb+srv://vaishp19:Smokyfold32@cluster0.uznpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

    const connection = mongoose.connection

    connection.on('connected', ()=>{
        console.log('mongo db connection successful')

    })

    connection.on('error',()=>{
        console.log('connection error')
    })
}


connectDB()

module.exports = mongoose