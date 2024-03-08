const { User, Book } = require('./models');

const seedDatabase = async () => {
  await User.deleteMany();
  await Book.deleteMany();

  // Create users
  const users = await User.create([
    {
      username: 'user1',
      email: 'user1@example.com',
      password: 'password1',
    },
    {
      username: 'user2',
      email: 'user2@example.com',
      password: 'password2',
    },
  ]);

  // Create books
  const books = await Book.create([
    {
      authors: ['Author1'],
      title: 'Book1',
      description: 'Description for Book1',
      image: 'https://example.com/book1.jpg',
      link: 'https://example.com/book1',
      bookId: 'bookId1',
      user: users[0]._id,
    },
    {
      authors: ['Author2'],
      title: 'Book2',
      description: 'Description for Book2',
      image: 'https://example.com/book2.jpg',
      link: 'https://example.com/book2',
      bookId: 'bookId2',
      user: users[0]._id,
    },
    {
      authors: ['Author3'],
      title: 'Book3',
      description: 'Description for Book3',
      image: 'https://example.com/book3.jpg',
      link: 'https://example.com/book3',
      bookId: 'bookId3',
      user: users[1]._id,
    },
  ]);

  console.log('Seeds have been planted successfully!');
  process.exit(0);
};

seedDatabase();
