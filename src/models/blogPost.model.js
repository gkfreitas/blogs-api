module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('blogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    blogPost_id: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  });
  return blogPost;
};
