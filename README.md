MERN: Book Search Engine
========================

Overview
--------

In this project, we'll be refactoring a book search engine built with the MERN (MongoDB, Express.js, React, Node.js) stack. The existing application uses a RESTful API for fetching and saving book data. Our task is to transform it into a more efficient GraphQL API using Apollo Server.

The book search engine allows users to search for books using the Google Books API and save them to their account. Users can also log in, sign up, view saved books, and remove books from their saved list.

Table of Contents
-----------------

-   [User Story](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#user-story)
-   [Acceptance Criteria](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#acceptance-criteria)
-   [Getting Started](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#getting-started)
    -   [Back-End Specifications](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#back-end-specifications)
    -   [Front-End Specifications](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#front-end-specifications)
-   [Files Structure](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#files-structure)
-   [Dependencies](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#dependencies)
-   [Deployment](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#deployment)
-   [Built With](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#built-with)
-   [Authors](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#authors)
-   [Acknowledgments](https://chat.openai.com/c/6f1bdf6f-6369-4556-a829-2d5d26c25244#acknowledgments)

User Story
----------

mdCopy code

`AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase`

Acceptance Criteria
-------------------

-   Users can search for books using the search input and view the search results.
-   Users can log in or sign up using the authentication modal.
-   Authenticated users can save and remove books from their account.
-   Users can view their saved books and remove them.
-   The application should be deployed to Render with a MongoDB database using MongoDB Atlas.

Getting Started
---------------

To set up the application and deploy it, follow the instructions in the [Deploy with Render and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-render-and-mongodb-atlas) walkthrough.

### Back-End Specifications

1.  auth.js: Update the auth middleware function to work with the GraphQL API.
2.  server.js: Implement the Apollo Server and apply it to the Express server as middleware.
3.  Schemas directory:
    -   index.js: Export typeDefs and resolvers.
    -   resolvers.js: Define query and mutation functionality using Mongoose models.
    -   typeDefs.js: Define necessary Query and Mutation types.

### Front-End Specifications

1.  queries.js: Create a query `GET_ME` to execute the `me` query with Apollo Server.
2.  mutations.js:
    -   Define mutations for user login, signup, saving books, and removing books.
3.  App.jsx: Create an Apollo Provider to handle requests with Apollo Server.
4.  SearchBooks.jsx:
    -   Use the Apollo `useMutation()` Hook for saving books.
    -   Update logic for saving book IDs using state.
5.  SavedBooks.jsx:
    -   Use `useQuery()` Hook for executing the `GET_ME` query.
    -   Use `useMutation()` Hook for removing books.

Files Structure
---------------

-   client: Contains the React front-end files.
-   models: Defines the Mongoose schema for User and Book.
-   routes/api: Defines the user routes and API routes.
-   utils: Contains utility files for authentication, API calls, and local storage.
-   server.js: Entry point for the Node.js server.
-   connection.js: Establishes the connection to the MongoDB database.

Dependencies
------------

-   React: Front-end library for building user interfaces.
-   Apollo Server: GraphQL server for connecting with the front-end.
-   Express.js: Web application framework for Node.js.
-   MongoDB: NoSQL database for storing user and book data.
-   GraphQL: Query language for APIs.
-   jsonwebtoken: Library for generating and verifying JSON Web Tokens.
-   bcrypt: Library for hashing user passwords.

Deployment
----------

This application is deployed using [Render](https://render.com/) with a MongoDB database hosted on MongoDB Atlas.

Follow the [deployment guide](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-render-and-mongodb-atlas) for detailed instructions.

Built With
----------

-   MERN Stack (MongoDB, Express.js, React, Node.js)
-   Apollo Server
-   GraphQL
-   JWT (JSON Web Tokens)
-   Render (for deployment)
-   MongoDB Atlas (for database hosting)

Authors
-------

-   [Reese Roccaforte]