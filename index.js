const express = require('express')
const exphbs= require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

//Models
const Post = require('./models/Post')
const User = require('./models/User')
const Autoavaliacao = require('./models/Autoavaliacao')

/*
const Comentario = require('./models/Comentario')
const comentarioRoutes = require('./routes/comentarioRoutes')
const ComentarioController = require('./controllers/ComentarioController')
*/
//Import Routes
const postRoutes = require('./routes/postRoutes')
const authRoutes = require('./routes/authRoutes')



const autoavaliacaoRoutes = require('./routes/autoavaliacaoRoutes')
const AutoavaliacaoController = require('./controllers/AutoavaliacaoController')



//MEDITACAO//
const blogRoutes = require('./routes/blogRoutes')

//Import controller
const PostController = require('./controllers/PostController')


//MEDITACAO//
const BlogController = require('./controllers/BlogController')

//template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')

//receber resposta do body
app.use(
   express.urlencoded({
      extended: true,
   })
)

app.use(express.json())

// session middleware
app.use(
   session({
      name: "session",
      secret:"nosso_secret",
      resave: false,
      saveUninitialized:false,
      store: new FileStore({
         logFn: function(){},
         path:require('path').join(require('os').tmpdir(),'sessions'),

      }),
      cookie:{
         secure:false,
         maxAge: 360000,
         expires: new Date(Date.now()+36000),
         httpOnly: true,
      },
   }),
)

//flash massages
app.use(flash())

//public path
app.use(express.static("public"))

//set session to res
/*app.use((req,res,next)=>{
   if(req.session.userid){
      res.locals.session = req.session
   }

   next()

})*/
// set session to res
app.use((req, res, next) => {
   // console.log(req.session)
   console.log(req.session.userid);
  
   if (req.session.userid) {
     res.locals.session = req.session;
   }

   if (req.session.user) {
      res.locals.session = req.session;
   }
 

   if (req.session.postid) {
      res.locals.session = req.session;
   }

   if (req.session.post) {
      res.locals.session = req.session;
   }

   console.log("POST ID:"+req.session.postid);
   next();
 });


//Routes
//app.use('/comentario',comentarioRoutes)


//Routes
app.use('/post',postRoutes)
app.use('/',authRoutes)

app.use('/autoavaliacao',autoavaliacaoRoutes)


app.get('/showPost',PostController.showPost ),



app.get('/',BlogController.showHome )

//BLOG///
app.use('/blog',blogRoutes)
app.get('/home',BlogController.showHome )
app.get('/meditacao',BlogController.showMeditacao )
app.get('/estresse',BlogController.showEstresse )
app.get('/ansiedade',BlogController.showAnsiedade )
app.get('/depressao',BlogController.showDepressao )
app.get('/profissionais',BlogController.showProfissionais)

//AUTOAVALIACAO
app.use('/autoavaliacao',autoavaliacaoRoutes)
app.get('/autoavaliacao',  AutoavaliacaoController.showAutoavaliacao)
app.get('/testeAnsiedade',  AutoavaliacaoController.showTesteAnsiedade)




conn
 //.sync({force: true})
 .sync()
 .then(()=>{
    app.listen(3000)
 })
 .catch((err)=>console.log(err))

 