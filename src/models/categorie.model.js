module.exports = (sequelize, DataTypes) => {
  const categorie = sequelize.define('categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });

  return categorie;
};
