const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const IP = process.env.IP;

//bodyParser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//allow cross origin resource sharing
app.use(cors());

//connect to database
connectDB;

//routes
const contactRoutes = require("./routes/api/contacts");

app.get("/", (req, res) => {
  res.send(`API Running from Root Route`);
});

app.use("/api/contacts", contactRoutes);

//run nodemon server with command: npm run server as per scripts in package.json
app.listen(PORT, () => {
  console.log(
    `Server started and listening intenely on port ${PORT} and ip ${IP}`
  );
});
