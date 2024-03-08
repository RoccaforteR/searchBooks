import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import Auth from '../utils/auth';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);

  const userData = data?.me || {};

  const handleRemoveBook = async (bookId) => {
    try {
      await removeBook({
        variables: { bookId },
        refetchQueries: [{ query: GET_ME }],
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.username}'s saved books:</h2>
      {userData.savedBooks.length ? (
        <div>
          {userData.savedBooks.map((book) => (
            <div key={book.bookId}>
              <h3>{book.title}</h3>
              <p>Authors: {book.authors.join(', ')}</p>
              <p>Description: {book.description}</p>
              <button onClick={() => handleRemoveBook(book.bookId)}>Remove Book</button>
            </div>
          ))}
        </div>
      ) : (
        <h3>You have no saved books!</h3>
      )}
    </div>
  );
};

export default SavedBooks;
