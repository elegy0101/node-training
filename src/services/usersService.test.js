
const Boom = require('@hapi/boom')
const UserService = require('./usersService')
describe('usersService', () => {
    describe('updateUser', () => {
        test('It should return a 404 if user is not found!', async () => {
            const userId= 99
            const service = new UserService()
            service.getUser = jest.fn(() => undefined);

            // If the method throws an exception the assertion on the catch should be called!
            expect.assertions(5)
            try {
                await service.updateUser(userId, 'name', 'email')
            }
            catch (ex) {
                expect(service.getUser.mock.calls.length).toBe(1)
                expect(service.getUser.mock.calls[0][0]).toBe(userId)
                expect(ex.isBoom).toBeTruthy()
                expect(ex.output).toBeDefined()
                expect(ex.output.statusCode).toEqual(404)
            }
        })
    })
})