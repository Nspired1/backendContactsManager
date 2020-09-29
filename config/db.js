const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.set("useFindAndModify", false);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("ERROR:", err.message);
  });

module.exports.Contact = require("../models/contactSchema");
