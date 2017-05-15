const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mealticket');
const dotenv = require('dotenv');
dotenv.connect('')

mongoose.Promise = Promise;

var db = mongoose.connection;
var env = require('env')
env.connect({
  host: process.env.mongodb:'//mealticket:mealticket@ds141401.mlab.com:41401/meal-ticket',
  username: process.env.mealticket,
  password: process.env.mealticket
})

db.once('open', function() {
  console.log(`Connected to MongoDB at ${db.host}:{db.port}`);
});

db.on('error', function(err) {
  console.error(`Database error:\n${err}`);
});
