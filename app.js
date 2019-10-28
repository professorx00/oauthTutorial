const express = require('express');
const authroutes = require("./routes/auth");
const app = express();

app.set("view engine", 'ejs');

app.get('/', (req,res)=>{
  res.render("home")
});

app.use('/auth',authroutes);


app.listen(3000,()=>{
  console.log("App now listening to request on port 3000")
})