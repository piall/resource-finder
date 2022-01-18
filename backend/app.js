const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const SignUp = require('./methods/signup');
const SignIn = require('./methods/signin');
const Resource = require('./methods/resource');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb+srv://pial:resource-finder@resource-finder.4ck71.mongodb.net/resource-finder?retryWrites=true&w=majority'
);

app.post('/api/signup', SignUp);
app.post('/api/signin', SignIn);

app.post('/api/user/resource/add', Resource.addResource);

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
