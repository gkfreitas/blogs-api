const CategoryService = require('../services/CategoryService');

const showCategories = async (req, res) => {
  const allCategories = await CategoryService.getAll();
  return res.status(200).json(allCategories);
}; 

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  const category = await CategoryService.create(name);
  return res.status(201).json(category);
};

module.exports = {
  createCategory,
  showCategories,
};