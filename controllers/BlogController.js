
const { blog } = require('../routes/blogRoutes')

module.exports = class BlogController{


    static async showHome(req,res){
        res.render('blog/home')
    }

    static async home(req,res){

        res.render('blog/home',{ blog })

    }

    static async showMeditacao(req,res){
        res.render('blog/meditacao')
    }

    static async meditacao(req,res){

        res.render('blog/meditacao',{ blog })

    }

    static async showEstresse(req,res){
        res.render('blog/estresse')
    }

    static async estresse(req,res){

        res.render('blog/estresse',{ blog })

    }

    static async showAnsiedade(req,res){
        res.render('blog/ansiedade')
    }

    static async ansiedade(req,res){

        res.render('blog/ansiedade',{ blog })

    }

    static async showDepressao(req,res){
        res.render('blog/depressao')
    }

    static async depressao(req,res){

        res.render('blog/depressao',{ blog })

    }

    static async showProfissionais(req,res){
        res.render('blog/profissionais')
    }

    static async profissionais(req,res){

        res.render('blog/profissionais',{ blog })

    }

    
}
