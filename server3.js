var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object

// Endpoint to Get a list of users
app.get('/', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // can also use res.send()
    });
})

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("server started", host, port)
})
var user = {
    "user5": {
        "id":5,
        "name":"Mobile"
         },
} 

//The addUser endpoint
app.post('/addUser', function(req, res){
    // read existing users
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        // append user variable to list
        data["user5"] = user["user5"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

 app.delete('/deleteUser', function (req, res) {
    // First retrieve existing users
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 3];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })