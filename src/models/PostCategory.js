module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {},
  {
    timestamps: false,
    tableName: 'post_categories',
    underscored: true,
  });

  PostCategory.associate = ({ BlogPost, Category }) => {
    Category.belongsToMany(BlogPost, {
      through: PostCategory,
      foreignKey: 'postId',
      as:'blogPost'
    });
    BlogPost.belongsToMany(Category, {
      through: PostCategory,
      foreignKey: 'categoryId',
      as:'categories'
    });
  }

  return PostCategory;
};
