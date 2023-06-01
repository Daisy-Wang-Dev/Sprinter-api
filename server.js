require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 6060;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server has started on port " + PORT);
  });
  