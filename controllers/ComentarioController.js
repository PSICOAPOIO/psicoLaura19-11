/*
const Post = require('../models/Post')
const User = require('../models/User')
const Comentario = require('../models/Comentario')
//const { comentario } = require('../routes/comentarioRoutes')
//const { post } = require('../routes/postRoutes')
const PostController = require('../controllers/PostController')

const {Op} = require('sequelize')

module.exports = class ComentarioController{

    static createComentario(req, res){
        res.render('post/createComentario')
    }

    static async createComentarioSave(req,res){
        const postId = req.session.postid
        const comentario = {
            conteudo: req.body.conteudo,
            postId: postId
        }

        
        try{
            await Comentario.create(comentario)

            req.flash('message','Post realizado com sucesso!')

            req.session.save(()=>{
                res.redirect('../post/showForum')
            })
        }catch(error){
            console.log(error)
        }
    }


}*/