const { Task } = require('../models');

exports.addTask = async (req, res) => {
  try {
    const { taskName, taskDescription, taskType, createdBy, startDate, endDate, userId } = req.body;

    const newTask = await Task.create({
      taskName,
      taskDescription,
      taskType,
      createdBy,
      startDate,
      endDate,
      userId,
    });

    res.status(201).json({ message: 'Task added', task: newTask });
  } catch (err) {
    res.status(500).json({ message: 'Error adding task' });
  }
};

exports.listTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ include: ['User'] });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};
