const express = require('express');
const bodyParser = require('body-parser');

const Post = require('./models/post');
const app = express();

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://tikhon:369174@cluster0.pdeld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log('Logged in database');
  }).catch(() => {
  console.log('connection failed');
});

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
  post.save();
  console.log(post);
  res.status(201).json({
    message: 'Все окей'
  });
})

app.use('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
    console.log(documents);
    res.status(200).json({
      message: 'Posts fetching successfully',
      posts: documents,
    });
  });
})

app.delete('/api/post/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    res.status(200).json({message: 'Post deleted'});
  });
})

module.exports = app;
