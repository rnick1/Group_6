const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Group extends Model {}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    rule_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true, 
        references: {
          model: 'rule',
          key: 'id'
        }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true, 
      references: {
        model: 'user',
        key: 'id'
      }
  },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true, 
      references: {
        model: 'event',
        key: 'id'
      }
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'group'
  }
);

module.exports = Group;
