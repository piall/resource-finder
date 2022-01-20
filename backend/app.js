const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv= require('dotenv');

const SignUp = require('./controllers/signup');
const SignIn = require('./controllers/signin');
const Resource = require('./controllers/resource');
const Topic = require('./controllers/topic');
const Vote = require('./controllers/vote');
const User = require('./controllers/user');

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_CONNECTION_URL);

app.post('/api/signup', SignUp);
app.post('/api/signin', SignIn);

app.get('/api/user', User.getUser);
app.post('/api/user/disable', User.disableUser);

app.get('/api/topic', Topic.getTopic);
app.post('/api/topic/add', Topic.addTopic);

app.get('/api/user/resource', Resource.getResoure);
app.post('/api/user/resource/add', Resource.addResource);

app.post('/api/user/resource/vote', Vote.voteResource);

app.delete('/api/admin/resource/:id', Resource.deleteResoure);
app.delete('/api/admin/topic/:id', Topic.deleteTopic);
app.get('/api/user/:id', User.getCurrentUser);

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
