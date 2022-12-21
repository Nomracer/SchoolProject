const express=require("express");
const app=express();
const mongose=require();
const bodyParser=require();
app.use(bodyParser.urlencoded((extended=>true)));

mongoose.connect("mongob")