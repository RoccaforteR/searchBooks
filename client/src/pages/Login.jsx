import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUserMutation, { loading, error }] = useMutation(LOGIN_USER);

  const handleLogin = async () => {
    try {
      const { data } = await loginUserMutation({
        variables: { email, password },
      });
      
      // Handle successful login, update state, or navigate to another page
      console.log('Successful login:', data.login);
    } catch (err) {
      // Handle login error
      console.error('Login error:', err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin} disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
