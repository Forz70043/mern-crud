const express = require("express");
const cors = require("cors");
require('dotenv').config();
const app = express();
const db = require("./app/models");
const cookieSession = require("cookie-session");
const tutorialController = require("./app/controllers/tutorial.controller");
const Role = db.role;
const User = db.User;



var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "app-session",
    secret: process.env.APP_SECRET || "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

const run = async () => {
    /*
    const tut1 = await tutorialController.createTutorial({
        title: "Tut#1",
        description: "Tut#1 Description",
    });

    const tut2 = await tutorialController.createTutorial({
        title: "Tut#2",
        description: "Tut#2 Description",
    });

    const comment1 = await tutorialController.createComment(tut1.id, {
        name: "bezkoder",
        text: "Good job!",
      });

    await tutorialController.createComment(tut1.id, {
    name: "zkoder",
    text: "One of the best tuts!",
    }); 
    
    await tutorialController.createComment(tut1.id, {
        name: "zkoder",
        text: "One of the best tuts!",
    });

    await TagController.addTutorial(tag1.id, tut1.id);



    */
    const tut1Data = await tutorialController.findAll();
        console.log(
        //">> Tutorial id=" + tut1Data.id,
        JSON.stringify(tut1Data, null, 2)
    );
    const _tag1 = await TagController.findById(tag1.id);
    console.log(">> tag1", JSON.stringify(_tag1, null, 2));

};

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

db.sequelize.sync(
  //{ force: true }
).then(() => {
  console.log("re-sync db if not exist table");
  //run();
  //initial();
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to XXXXX application." });
});


// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
