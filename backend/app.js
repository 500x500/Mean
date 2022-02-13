const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/post');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);
  res.status(201).json({
    message: 'Все окей'
  });
})

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {id: 1, title: 'title', content: 'content'},
    {id: 2, title: 'title', content: 'content'},
    {id: 3, title: 'title', content: 'content'},
  ];
  res.status(200) .json(posts);
})

module.exports = app;
