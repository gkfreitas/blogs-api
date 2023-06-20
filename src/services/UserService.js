const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const login = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const create = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = {
  getAll,
  login,
  create,
};