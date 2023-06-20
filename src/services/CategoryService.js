const { Category } = require('../models');

const getAll = async () => {
  const categorys = await Category.findAll({ attributes: { exclude: ['password'] } });
  return categorys;
};

const login = async (email) => {
  const category = await Category.findOne({ where: { email } });
  return category;
};

const create = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getByCategoryId = async (id) => {
  const category = await Category.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  return category;
};

module.exports = {
  getAll,
  login,
  create,
  getByCategoryId,
};