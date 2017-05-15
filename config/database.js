const mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST);

mongoose.Promise = Promise;

var db = mongoose.connection;

db.once('open', function() {
  console.log(`Connected to MongoDB at ${db.host}:{db.port}`);
});

db.on('error', function(err) {
  console.error(`Database error:\n${err}`);
});
