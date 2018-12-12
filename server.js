const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');


app.use(bp.json());
app.use(express.static( __dirname + '/public/dist/public'));


require("./routes")(app)

app.listen(8888,function(){
    console.log("listening on port 8888");
})