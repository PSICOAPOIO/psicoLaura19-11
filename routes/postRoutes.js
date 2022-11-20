const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')

//const ComentarioController = require('../controllers/ComentarioController')

//helper
const checkAuth = require('../helpers/auth').checkAuth

router.get('/add', checkAuth,  PostController.createPost)
router.post('/add', checkAuth,  PostController.createPostSave)
router.get('/edit/:id', checkAuth, PostController.editPost)
router.post('/edit/', checkAuth, PostController.editPostSave)
router.get('/forum', checkAuth,  PostController.forum)
router.post('/remove',checkAuth, PostController.removePost)
router.get('/showPost',checkAuth, PostController.showPost)

router.post('/adminRemovePost',checkAuth, PostController.adminRemovePost)

//router.get('/addComentario', checkAuth,  PostController.createComentario)
//router.post('/addComentario', checkAuth,  PostController.createComentarioSave)

router.get('/addComentario/:id', checkAuth,  PostController.createComentario)
router.post('/addComentario/', checkAuth,  PostController.createComentarioSave)

//router.get('/showComentario',checkAuth, PostController.showComentario)

module.exports = router