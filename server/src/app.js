const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json()) //to allow our app any json request that are sent in
app.use(cors()) //to allow any host or client to access

require('./routes')(app)

sequelize.sync({force:true}) 
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
