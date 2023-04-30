const express = require("express");
const app = express();
const path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const multer = require("multer");
const fs = require('fs');
const PORT = 8000;


// Things to study before starting ye wala kaam ====> What? Why? how?
// 1. JSON objects?
// 2. What is an API? In technical terms.
// 3. Middleware?
// 4. Github commands to know
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/0xsaad/App.git
// git push -u origin main

app.get("/", (req, res) => {
       // 1. 
  });

app.post("/", (req,res) => {
    // 1. Get keys from body. =========> body main jo elem, wo req main sy kesy get krny hain
    // 2. Save them in DB. ========> database main save kesy krna h
    /**
     * response =====> {
     *  message: "Song uploaded!"
     *  data: songObj
     * }
     */
})
  
  app.listen(PORT, () => console.log(`Server Started at PORT:8000`));
  