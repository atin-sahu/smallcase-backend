const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json());
app.use(cors());

const {register,login, generateToken} = require("./controllers/auth_controller");
const smallcasecontroller= require("./controllers/smallcasecont")
const special_controller = require("./controllers/special_controller");
const collection_Controller = require("./controllers/all_collection_controller");

const passport = require("./configs/google-oauth")




// const static_path = path.join(__dirname, "../public");
// const static_re = path.join(__dirname, "../public/index.html")
// app.use(express.static(static_path));

// app.get("", (req, res) => {
//   try {
//       res.send("homepage");
//   } catch (error) {
//       res.send(error);
//   }
// });
app.get("/", (req, res) => {
  try {
      res.status(200).send("welcome to smallcase");
  } catch (error) {
      res.send(error);
  }
});

app.post("/register", register)

app.post("/login", login)

app.use("/smallcase",smallcasecontroller)
app.use("/specials", special_controller)
app.use("/collections", collection_Controller);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false } ),

  function(req, res) {
    const token = generateToken(req.user)
    return res.status(200).send({user:req.user, token})
  }
)

module.exports = app;