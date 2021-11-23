const express = require('express')
const app = express()
var cors = require('cors')
const port = 5001

const dbConnection = require('./db')

app.use(cors())
app.use('/api/cars',require('./routes/carsRoute'))
    

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Node server started on${port}!`))