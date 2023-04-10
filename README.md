# Web Server
Web server created using Express with Node.js


## Run Locally

### Clone the project

  git clone
```bash
https://github.com/himalay03/Web-server-with-Express.git
```
  
### Install dependencies

 ```bash
 npm install
 ```
  
### Start the server

 ```bash
 nodemon index.js
 ```
  
## About The Project

To create a web server with Express, you'll first need to set up a basic Node.js project. Here are the steps you can follow:

1. Create a new directory for your project and navigate to it in your terminal:

mkdir my-express-app

cd my-express-app

2. Initialize a new Node.js project by running npm init and following the prompts:

npm init

3. Install the express package using npm:

npm install express

4. Create a new file named server.js in your project directory.

5. Import the express module and create a new app instance:

const express = require('express');

const app = express();

6. Define a route for your web server by using the app.get() method:

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

This route responds to GET requests to the root URL (i.e., http://localhost:3000/) by sending the text "Hello, World!" back to the client.

7. Start the web server by calling the app.listen() method:

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
This code starts the web server on port 3000 and logs a message to the console when the server is ready.

## Tech Stack

- Express module
- Nodemon


## 🛠 Skills

- Javascript


## Project Created By

Himalaya Sundi
