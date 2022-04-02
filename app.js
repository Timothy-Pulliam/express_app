const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const EXPRESS_PORT = process.env.EXPRESS_PORT
const EXPRESS_HOST = process.env.EXPRESS_HOST

// Database / MongoDB
const mongodb = require('mongodb');
const mongoose = require('mongoose');
// Database / mongodb
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_USER = encodeURIComponent(process.env.MONGO_USER);
const MONGO_PASSWORD = encodeURIComponent(process.env.MONGO_PASSWORD);
const authMechanism = 'DEFAULT';
const mongoURI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:27017/admin`;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(function(reason) {
  console.log('Unable to connect to the mongodb instance. Error: ', reason);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(EXPRESS_PORT, EXPRESS_HOST, () => {
  console.log(`Example app listening at ${EXPRESS_HOST}:${EXPRESS_PORT}`)
})