const jwt = require('jsonwebtoken');
const UserService = require('../services/UserService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const isBodyValid = (email, password) => email && password;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async (req, res) => {
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