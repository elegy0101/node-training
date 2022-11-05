
const { Router } = require('express')
const router = new Router({})

const {
    createUser,
    listUsers,
    getUser,
    updateUser,
    destroyUser
} = require('../controllers/usersController')

router.get('/', listUsers)
router.get('/:id', getUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', destroyUser)

module.exports = router