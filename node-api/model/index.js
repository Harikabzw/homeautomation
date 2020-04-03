const mongoose = require('mongoose');

// Connecting to MongoDB server
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
  if (!err) {
    console.log('MongoDB connection succeeded.');
  }
  else {
    console.log('Error in MongoDB connection: ' + JSON.stringify(err));
  }
});

require('./user.model');
