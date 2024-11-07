const express = require("express");

//create new instance of an new express js application
const app = express();

//To handle the req or listen 
app.use("/test",(req,res) =>{             //function is known as Request handler
    res.send("Hello from the server");

});

//call listen() on some port so that anyone can request or listen 
app.listen(3000,()=>{
    console.log("Successfully listening to the port 3000");
});