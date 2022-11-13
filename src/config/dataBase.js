const mongoose = require("mongoose");

const { config } = require("dotenv");

config();

//Connecting to the dataBase...

async function connect(uri) {
  try {
    mongoose.connect(uri || process.env.MONGO_DB_LOCAL);
    console.log("Connected to MongoDB ");
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connect;
