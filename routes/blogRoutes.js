const express = require('express')
const router = express.Router()
const BlogController = require('../controllers/BlogController')


router.get('/home', BlogController.home)
router.get('/', BlogController.showHome)

router.get('/meditacao', BlogController.meditacao)
router.get('/', BlogController.showMeditacao)

router.get('/estresse', BlogController.estresse)
router.get('/', BlogController.showEstresse)

router.get('/ansiedade', BlogController.ansiedade)
router.get('/', BlogController.showAnsiedade)

router.get('/depressao', BlogController.depressao)
router.get('/', BlogController.showDepressao)

router.get('/profissionais', BlogController.profissionais)
router.get('/', BlogController.showProfissionais)



module.exports = router