const express = require('express');
const app = express();


// Declare a basic root route 
// for confirming the server works
app.get("/", (req, res) => {

    res.json({
        message: "Hello world"
    })
})


// export the confgurered server for the index.js to use
module.exports = {
    app: app
}