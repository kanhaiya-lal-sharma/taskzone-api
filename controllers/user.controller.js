const { User } = require('../models');

exports.addUser = async (req, res) => {
  try {
    const { name, email, gender, role, createdBy, password } = req.body;

    const image = req.file ? req.file.filename : null;

    const newUser = await User.create({
      name,
      email,
      gender,
      role,
      createdBy,
      password,
      image,
    });

    res.status(201).json({ message: 'User added', user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding user' });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};
