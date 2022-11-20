const { DataTypes} = require('sequelize')

const db = require('../db/conn')



const User = require('./User')


const Post = db.define('post',{
    conteudo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
})

Post.belongsTo(User)
User.hasMany(Post)



module.exports = Post