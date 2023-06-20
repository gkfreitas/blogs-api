const { BlogPost, User, Category } = require('../models');

const getAll = async () => {
  const categories = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories', 
      },
    ],
  });
  return categories;
};

module.exports = {
  getAll,
};