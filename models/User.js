const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = db.define('user', {
    name:{
        type: DataTypes.STRING,
        require: true
    },
    email:{
        type: DataTypes.STRING,
        require: true
    },
    senha:{
        type: DataTypes.STRING,
        require: true
    },
    perfil:{
        type:  DataTypes.ENUM,
        values: ['admin', 'psc', 'public']
    }
})


module.exports = User