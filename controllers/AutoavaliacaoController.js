const { autoavaliacao } = require('../routes/autoavaliacaoRoutes')
const Autoavaliacao = require('../models/Autoavaliacao')
const User = require('../models/User')

const {Op} = require('sequelize')

module.exports = class AutoavaliacaoController{
    static async showAutoavaliacao(req,res){
        res.render('autoavaliacao/home')
    }

    static async autoavaliacao(req,res){
        console.log("CHEGUEIIII")
        const userId = req.session.userid
        console.log("USER ID AUTOAVALIACAO "+userId)
        let user = await User.findOne({
            where:{
                id:userId,
            }
        })

        user = user.dataValues
        console.log(" AUTOAVALIAÇÂO"+user.perfil);

        let publico = false
        let admin = true
        if(user.perfil == 'admin'){
            admin = true
        }else{
            admin = false
            publico= true
        }

        
        //ver se o usuario existe
        if(!user){
            res.redirect('/login')
        }

        res.render('autoavaliacao/home',{ admin })

    }

    static async showTesteAnsiedade(req,res){
        res.render('autoavaliacao/testeAnsiedade')
    }

    static async testeAnsiedade(req,res){

        res.render('autoavaliacao/testeAnsiedade',{ autoavaliacao })

    }

    static async showTesteDepressao(req,res){
        res.render('autoavaliacao/testeDepressao')
    }

    static async testeDepressao(req,res){

        res.render('autoavaliacao/testeDepressao',{ autoavaliacao })

    }

    static async showTesteEstresse(req,res){
        res.render('autoavaliacao/testeEstresse')
    }

    static async testeEstresse(req,res){

        res.render('autoavaliacao/testeEstresse',{ autoavaliacao })

    }



}