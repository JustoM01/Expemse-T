const sequelize = require('../config/connection');
const {Model, DataTypes} = require('sequelize');


class User extends Model{};


User.init(
    {
        username:DataTypes.STRING
    },
    {    // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        timestamps: false,
        underscored: true,
        modelName: 'user'}
)


module.exports = User