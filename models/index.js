// import all models
const Post = require("./post");
const Category = require("./category");
const User = require("./user");

Post.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
});

Category.hasMany(Post, {
  foreignKey: "category_id",
  as: "posts",
});

User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = {
  Post,
  Category,
  User,
};
