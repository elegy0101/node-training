
const request = require('supertest')
const app = require('../../../../app')

const { seedUser, getUser } = require('../../util/users')
const { clearDatabase  } = require('../../util/db')


describe('usersController', () => {
    beforeEach(async () => {
        await clearDatabase()
    })
    describe('updateUser', () => {
        test('it should return a 404 if the user is not found', async () => {
            await request(app).put('/api/users/11').send({ name: 'Robin' })
                .expect(404)
        })

    })
})