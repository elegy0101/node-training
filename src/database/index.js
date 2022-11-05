
const { Sequelize, DataTypes } = require('sequelize');

const db = { connection: false }
const models = {}
function getConnection () {
    if (db.connection) {
        return db
    }
    db.connection = new Sequelize('training', 'root', 'admin', {
        host: 'localhost',
        dialect: 'mysql'
    });

    db.models = {
        User: require('./models/User')(db.connection)
    }
    return db
}

function getModel (modelName) {
    getConnection()
    const model = db.models[modelName]
    if(model === undefined) throw new Error('Unable to get model!')
    return model

}

module.exports = {
    getConnection,
    getModel
}
