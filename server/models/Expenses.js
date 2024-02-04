const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Expenses extends Model {}

Expenses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    category:{
      type:DataTypes.STRING
    },

    date:{
      type:DataTypes.DATE
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id', 
        onDelete: 'CASCADE', // Move onDelete option here
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'expenses',
  }
);

module.exports = Expenses;
