const UserService = require('../services/UserService');

module.exports = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  const messageName = '"displayName" length must be at least 8 characters long';
  if (displayName.length < 8) return res.status(400).json({ message: messageName });

  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const messageEmail = '"email" must be a valid email';
  if (!email.match(regex)) return res.status(400).json({ message: messageEmail });

  const messagePassword = '"password" length must be at least 6 characters long';
  if (password.length < 6) return res.status(400).json({ message: messagePassword });

  const users = await UserService.getAll();
  const usersEmails = users.map((e) => e.email);

  const messageRegister = 'User already registered';
  if (usersEmails.includes(email)) return res.status(409).json({ message: messageRegister });
  next();
};