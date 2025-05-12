const express = require('express');
const app = express();


app.use(express.json());

// Declare a basic root route 
// for confirming the server works
app.get("/", (req, res) => {

    res.json({
        message: "Hello world"
    })
})

app.post("/post-test", (req, res) => {
    console.log("We received this body data: " + JSON.stringify(req.body));
    res.json({
        recievedData: req.body
    })
})


// export the confgurered server for the index.js to use
module.exports = {
    app: app
}