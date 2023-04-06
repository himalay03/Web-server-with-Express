// Require module
const express = require("express");

// creating express object
const app = express();

// Handling GET request
app.get("/", (req, res) => {
  res.send("Test server is running good !!");
  res.end();
});

// Port Number with process.env
const PORT = process.env.PORT || 8080;

// Server setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
