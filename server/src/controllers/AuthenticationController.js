const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
    const one_Week = 60*60*24*7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: one_Week
    })
}

module.exports = {
    async register(req, res, next) {
        try {
            const user = await User.create(req.body) //creates a new user
            res.send(user.toJSON()) //send the error (if any) to user
        }catch(err) {
            res.status(400).send({
                err: 'This email account is already in use!'
            })
            next()
        }
    },

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            }) //finds a user
            if(!user){
                return res.status(403).send({
                    error: 'The email is not registered'
                })
            }

            // const isPasswordValid = password === user.password
            const isPasswordValid = await user.comparePassword(password)
            // console.log(password, user.password)
            if(!isPasswordValid){
                return res.status(403).send({
                    error: 'The password is incorrect'
                })  
            }
            const userJson = user.toJSON()
            console.log(userJson)
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        }catch(err) {
            res.status(403).send({
                err: 'An error has occured trying to login!'
            })
            next()
        }
    }

}