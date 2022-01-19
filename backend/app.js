const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const SignUp = require('./controllers/signup');
const SignIn = require('./controllers/signin');
const Resource = require('./controllers/resource');
const Topic = require('./controllers/topic');
const Vote = require('./controllers/vote');
const User = require('./controllers/user');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb+srv://pial:resource-finder@resource-finder.4ck71.mongodb.net/resource-finder?retryWrites=true&w=majority'
);

app.post('/api/signup', SignUp);
app.post('/api/signin', SignIn);

app.get('/api/user', User.getUser);
app.post('/api/user/disable', User.disableUser);

app.get('/api/topic', Topic.getTopic);
app.post('/api/topic/add', Topic.addTopic);

app.get('/api/user/resource', Resource.getResoure);
app.delete('/api/admin/resource/:id', Resource.deleteResoure);
app.post('/api/user/resource/add', Resource.addResource);

app.post('/api/user/resource/vote', Vote.voteResource);

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
