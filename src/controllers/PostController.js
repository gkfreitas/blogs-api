const PostService = require('../services/PostService');

const showPosts = async (req, res) => {
  const posts = await PostService.getAll();
  return res.status(200).json(posts);
};

module.exports = {
  showPosts,
};