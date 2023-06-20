const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const login = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  getAll,
  login,
};