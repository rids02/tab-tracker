const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json()) //to allow our app any json request that are sent in
app.use(cors()) //to allow any host or client to access

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world! Riddhi here!'
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered!`
    })
})

app.listen(process.env.PORT || 8081)