const mongoose = require("mongoose");
const DB = process.env.DB_STRING;
async function connectMongoDB() {
  return mongoose.connect(DB);
}

module.exports = { connectMongoDB };
