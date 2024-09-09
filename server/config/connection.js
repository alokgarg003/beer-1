const mongoose = require('mongoose');

// Replace with your actual MongoDB connection string
const mongoURI = process.env.MONGODB_URI || 'mongodb://atlas-sql-654cbc256357ce4229907eec-cbtip.a.query.mongodb.net/test?ssl=true&authSource=admin';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;
