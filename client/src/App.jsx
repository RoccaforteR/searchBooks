import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import Header from './components/Header';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Login from './pages/LoginForm';
import Signup from './pages/SignupForm';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
