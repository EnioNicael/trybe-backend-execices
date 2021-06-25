const express = require('express');
const bodyParser = require('body-parser');
const { uid } = require('uid');

const app = express();
app.use(bodyParser.json());

const generateToken = () => uid(12);

const emailAndPasswordValidation = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  const emailIsValid = emailRegex.test(email);
  const passwordIsValid = ((password.length >= 4) && (password.length <= 8));

  return emailIsValid && passwordIsValid;
};

app.post('/login', (req, res, next) => {
  const token = generateToken();
  const { email, password } = req.body;

  if (!emailAndPasswordValidation(email, password)) {
     return next(err);
  }
  
  res.status(200).json({ token });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Email or password is incorrect' });
});

app.listen(3000, () => console.log('Server running...'));
