const express = require("express");
const router = require("./router/routes");
const app =express()

app.use('/', router)

app.listen(3000, ()=>{
    console.log("Server running at port 3000")
});