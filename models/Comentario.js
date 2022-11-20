const { DataTypes} = require('sequelize')

const db = require('../db/conn')

const Post = require('./Post')


const Comentario = db.define('comentario',{
    conteudo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
})

Comentario.belongsTo(Post)
Post.hasMany(Comentario)



module.exports = Comentario