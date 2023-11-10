const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb:http://localhost:3001/graphql'
);
module.exports = mongoose.connection;
