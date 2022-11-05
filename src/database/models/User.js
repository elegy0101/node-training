
const { DataTypes } = require('sequelize')

module.exports = (connection) => {
    const User = connection.define('User', {
            // Model attributes are defined here
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING
            }
        }, {
        underscored: true
    });
    return User
}