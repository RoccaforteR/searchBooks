import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [addUserMutation, { loading, error }] = useMutation(ADD_USER);

  const handleSignup = async () => {
    try {
      const { data } = await addUserMutation({
        variables: { username, email, password },
      });
      
      // Handle successful signup, update state, or navigate to another page
      console.log('Successful signup:', data.addUser);
    } catch (err) {
      // Handle signup error
      console.error('Signup error:', err.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleSignup} disabled={loading}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
