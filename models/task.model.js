module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    taskDescription: {
      type: DataTypes.STRING,
    },
    taskType: {
      type: DataTypes.ENUM('a-task', 'b-task', 'c-task', 'd-task', 'e-task'),
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
  });

  return Task;
};
