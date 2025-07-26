const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const UserModel = require('./user.model');
const TaskModel = require('./task.model');


const User = UserModel(sequelize, DataTypes);
const Task = TaskModel(sequelize, DataTypes);


User.hasMany(Task, { foreignKey: 'userId' });
Task.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Task,
};
