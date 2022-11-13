const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');



app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    key: "userID",
    secret: "tubeswebpro",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24,
    }
}))

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "newsha_user",
});

app.post("/register", (req, res) => {
    const nama = req.body.nama;
    const email = req.body.email;
    const password = req.body.password;
      db.query(
        "INSERT INTO listuser (nama, email, password) VALUES (?,?,?)",
        [nama, email, password],
        (err, result) => {
          console.log(err);
        }
    );

});

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({LoggedIn: true, user: req.session.user})
    } else {
        res.send({LoggedIn: false})
    }
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

      db.query(
        "SELECT * FROM listuser where email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err){
                res.send({err: err});
            }
            
            if (result.length > 0){
                req.session.user = result
                console.log(req.session.user);
                res.send(result)
            } else {
                res.send({message: "Email/Password salah"})
            }
            
        }
    );

});

app.listen(3001, () => {
    console.log("running server");
});