import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId='formUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            name='username'
            onChange={handleChange}
            value={formState.username}
            required
          />
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            onChange={handleChange}
            value={formState.email}
            required
          />
        </Form.Group>
        <Form.Group controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            onChange={handleChange}
            value={formState.password}
            required
          />
        </Form.Group>
        <Button variant='success' type='submit'>
          Sign Up
        </Button>
      </Form>
      {error && <div>Sign up failed</div>}
    </>
  );
};

export default SignupForm;
