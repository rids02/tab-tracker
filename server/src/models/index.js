const fs = require('fs') //provides useful functionalities to access and interact with the file system
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {} //export later on

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs
    .readdirSync(__dirname) //used to synchronously read the contents of a given directory.
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db