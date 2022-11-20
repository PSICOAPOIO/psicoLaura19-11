const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class AuthController{
    
    
    static login(req,res){
        res.render('auth/login')
    }


    //VER ESSE 
    static async loginPost(req,res){

        const {email, senha} = req.body

        //usuario existe
        let user = await User.findOne({where: {email:email}})
        user = user.dataValues
    
        console.log(" PERFIL DO USUARIo: "+user.perfil);

        let publico = false
        let admin = true

        if(user.perfil == 'admin'){
            admin = true
        }else{
            admin = false
            publico= true
        }
       

        if(!user){
            req.flash('message','Usuário não encontrado')
            res.render('auth/login')
            

            return
        }

        //senha valida
        const senhaMatch = bcrypt.compareSync(senha, user.senha)

        if(!senhaMatch){
            req.flash('message','Senha inválida')
            res.render('auth/login')
            
            return 
        }
        
        
        //inicializar a session
        req.session.userid = user.id
        req.flash('message','Login realizado com sucesso!')

        req.session.save(()=>{
            res.redirect('/')
        })
    }




    static cadastro(req,res){
        res.render('auth/cadastro')
    }

    static async cadastroPost(req,res){
        const{name, email, senha, confirmaSenha} = req.body

        //validacao da senha
        if(senha != confirmaSenha){
            //mensagem pela flash message
            req.flash('message','As senhas não conferem, tente novamente!')
            res.render('auth/cadastro')

            return
        }

        //ver se o nome do usuario ja existe
        const checkIfUserExists = await User.findOne({where: {email: email}})
    
        if(checkIfUserExists){
            //mensagem pela flash message
            req.flash('message','O e-mail já está em uso! ')
            res.render('auth/cadastro')

            return
        }

        //criar a senha
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(senha, salt)

        const user = {
            name, 
            email,
            senha: hashedPassword,
            perfil:'public'
        }

        try{
            const createdUser = await User.create(user)
            //inicializar a session
            /*req.session.userid = createdUser.id
            req.body.user.perfil = createdUser.perfil
            req.body.user.email = createdUser.email
            req.body.user.name = createdUser.name*/
            req.flash('message','Cadastro realizado com sucesso!')

            req.session.save(()=>{
                res.redirect('/')
            })


        }catch(err){
            console.log(err)
        }
    }

    static logout(req,res){
        req.session.destroy()
        res.redirect('/login')
    }


    
}