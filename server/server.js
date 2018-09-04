const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

// middleware that parses the body of the request
// makes it available as an object on req.body
app.use(bodyParser.json());

// creating a new todo
app.post('/todos', (req, res) => {
  // create instance of mongoose model
  const todo = new Todo({
    text: req.body.text
  });

  // save the model to database
  todo.save().then((doc) => {
    // sends the doc back as a response
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/123iuibaf

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = { app };