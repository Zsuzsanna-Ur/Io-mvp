# My Express App

The goal with this recipe app is to allow home cooks easy access to all of their favorite recipes. The hope is that people will not have to keep track of an ever-increasing bookmark folder or stack of recipe books.

## Setup

### Dependencies

- Run `npm install` in project directory. This will install server-related dependencies such as `express`.
- `cd client` and run `npm install`. This will install client dependencies (React).
- Run `npm install axios`. This will install client dependencies (Axios).
  - Axios is being used in this project to simplify JSON data handling with defaults, matching HTTP method functions, and for versatile usage in both client and server environments.
  - Axios automates tasks like setting headers and converting request bodies to JSON strings, making it ideal for streamlining recipe data retrieval and management.

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Create a new database called myexpressapp: `create database myexpressapp `
- Add a `.env` file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=myexpressapp
  DB_PASS=YOURPASSWORD
```

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'students' in your database.

- In your MySQL console, you can run `use myexpressapp;` and then `describe recipes;` to see the structure of the recipes table.

### Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

## References

- Online Resources:
  - [MDN docs](https://developer.mozilla.org/en-US/)
  - [Express docs](https://expressjs.com/en/api.html)
  - [MySQL docs](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
  - [React docs](https://reactjs.org/docs/hello-world.html)
  - [Axios docs] (https://axios-http.com/docs/intro)
