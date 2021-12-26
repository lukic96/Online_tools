// Setting parametars for backend NODE

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req,res) {
  res.setHeader("Access-Control-Allow-Orin", "app2.js")
  res.sendFile(__dirname + "/index.html");
});

app.post("/textEditor",function(req,res) {
  res.redirect("/index2");
});

app.post("/back",function(req,res) {
  res.redirect("/");
});

app.get("/index2", function(req,res) {
  res.sendFile(__dirname + "/index2.html");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started running on port 3000");
});
