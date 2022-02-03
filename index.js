const express = require("express")

const app = express();

const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const router = require("./src/routes/routes");

const port = 3000;

//db connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "naim12345",
    database: "test",
    port: 3306
  });

    connection.connect(function(err) {
        console.log("Connection established");
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        console.log("connected as id " + connection.threadId);
    });


  //listen to port
    app.listen(3000, () => {
        console.log(`Server is running on port ${port}`);
    });

    //setting up the environment
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    //making our db accessible to our router
    app.use((req, res, next) => {
        req.connection = connection;
        next();
    });

    //routes

  app.use("/customer", router)

    module.exports = app;