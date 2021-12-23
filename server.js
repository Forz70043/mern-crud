const express = require("express");
const cors = require("cors");
const env = require('dotenv').config();
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync(
    //{ force: true }
    ).then(() => {
        console.log("Drop and re-sync db.");
    });




// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to XXXXX application." });
});

//console.log("ENV : ",process.env);
//console.log("ENV : ",env);

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
