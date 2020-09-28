const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 6000;
const IP = process.env.IP;

//connect to database
connectDB;

app.get("/", (req, res) => {
  res.send(`API Running`);
});

//as per scripts in package.json run nodemon server with command: npm run server
app.listen(PORT, IP, () => {
  console.log(
    `Server started and listening intenely on port ${PORT} and ip ${IP}`
  );
});
