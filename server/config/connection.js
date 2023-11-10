const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:3001/graphql',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

module.exports = mongoose.connection;
