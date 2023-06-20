const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
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

const getByUserId = async (id) => {
  const user = await User.findOne({ where: { id } });
  return user;
};

module.exports = {
  getAll,
  login,
  create,
  getByUserId,
};