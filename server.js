const express = require("express");
const app = express();
const PORT = process.env.PORT || 6000;
const IP = process.env.IP;

app.get("/", function (req, res) {
  res.send("API Running");
});

//per scripts in package.json run server with command: npm run server

app.listen(PORT, function () {
  console.log(
    `Server started and listening intenely on port ${PORT} and ip ${IP}`
  );
});
