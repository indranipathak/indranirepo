const router = require('express').Router()
const controllers = require('./controllers')

router.get('/', controllers.getAll)
router.get('/:todoId', controllers.getById)
router.post('/', controllers.create)
router.post('/:todoId', controllers.delete)
router.post('/:todoId/complete', controllers.complete)

module.exports = router 