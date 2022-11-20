const { DataTypes} = require('sequelize')

const db = require('../db/conn')



const User = require('./User')


const Autoavaliacao = db.define('autoavaliacao',{
    pergunta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    alternativa:{
        type:  DataTypes.STRING,
        allowNull: false,
    },
    resultado: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
     
      
})

Autoavaliacao.belongsTo(User)
User.hasMany(Autoavaliacao)