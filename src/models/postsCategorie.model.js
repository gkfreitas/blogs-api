module.exports = (sequelize, DataTypes) => {
  const postCategorie = sequelize.define('postCategorie', 
  {},
  {
    timestamps: false,
    tableName: 'post_categories',
    underscored: true,
  });
  postCategorie.associate = (models) => {
    models.categorie.belongsToMany(models.blogPost, {
      as: 'blogPost',
      through: postCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    });

    models.blogPost.belongsToMany(models.categorie, {
      as: 'categories',
      through: postCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

  }

  return postCategorie;
};
