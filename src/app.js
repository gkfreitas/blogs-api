const express = require('express');

// ...

const app = express();
const userController = require('./controllers/UserController');
const validateNewUser = require('./middlewares/validateNewUser');
const validateJWT = require('./auth/validateJWT');

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', userController.userLogin);
app.post('/user', validateNewUser, userController.createUser);
app.get('/user', validateJWT, userController.showUsers);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
