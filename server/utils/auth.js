const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

const signToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

const authMiddleware = (context) => {
  let token = context.req.headers.authorization || '';

  if (token) {
    token = token.split('Bearer ')[1];
  }

  if (!token) {
    throw new AuthenticationError('You have no token!');
  }

  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    context.user = data;
  } catch {
    throw new AuthenticationError('Invalid token!');
  }

  return context;
};

module.exports = { signToken, authMiddleware };
