const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const Mail = require("./routes/mail");
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/api", Mail);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
