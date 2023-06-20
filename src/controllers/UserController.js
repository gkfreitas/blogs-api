const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const userLogin = async (req, res) => {
  const isBodyValid = (email, password) => email && password;

  const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await UserService.login(email);
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return res.status(200).json({ token });
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await UserService.create(displayName, email, password, image);
  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
  return res.status(201).json({ token });
};

const showUsers = async (_req, res) => {
  const users = await UserService.getAll();
  return res.status(200).json(users);
};

module.exports = {
  userLogin,
  createUser,
  showUsers,
};