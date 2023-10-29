const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to the DataBase"));

db.once("open", () => {
  console.log("Successfully connected to the DataBase 🥞");
});

module.exports = db;
