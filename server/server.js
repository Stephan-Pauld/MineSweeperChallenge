require("dotenv").config();
const express = require("express");
const cors = require('cors')
const PORT = process.env.PORT || 3001
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

const usersRoutes = require("./routes/users");


app.use("/users", usersRoutes);


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});