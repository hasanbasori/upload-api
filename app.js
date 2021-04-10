const express = require("express");
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const app = express();

const port = 8500;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
