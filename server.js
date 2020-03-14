const express = require("express");
const logger = require('morgan');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:thisisuser1@ds155674.mlab.com:55674/heroku_jgx0rkmt", 
{
  useMongoClient: true
  // useNewUrlParser: true,
  // useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});