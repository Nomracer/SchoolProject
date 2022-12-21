const express=require("express");
const app=express();
const mongose=require();
const bodyParser=require();
app.use(bodyParser.urlencoded((extended=>true)));

mongoose.connect("mongodb+srv://Nomracer:<password>@cluster0.ms8gvc5.mongodb.net/?retryWrites=true&w=majority",
{ useNewUrlParser:true,
    useUnifiedTopology:true,  
}).then(console.log('connect to mongo db!'))

app.listen(3000,function(){
    console.log("server is running on http://localhost:3000 ")


})