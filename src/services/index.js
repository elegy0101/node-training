const { getModel } = require('../database')
const User = getModel('User')

const UsersService = require('./usersService')

const services = {
    UsersService
}

class ServiceFactory {
    static createUsersService () {
        return new UsersService(User)
    }
}

module.exports = ServiceFactory