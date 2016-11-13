// Load the necessary extensions
var express = require('express');
var parser = require('body-parser');
var shortid = require('shortid');

// Load datastore
var store = require("./storage.js");

// Load validator, thinking about how I'm going to fix that :(

// Create webservice
var app = express();
app.use(parser.json());



//  01 Drones
// GET requests on /drones
app.get("/drones", function (request, response) {
    response.send(store.listDrones());
});

// GET requests on /drones with specific ID => /drones/:id
app.get("/drones/:id", function (request, response) {
    var drone = store.searchDrones(request.params.id);
    if (drone) {
        response.send(drone); // If a drone is found, return this drone information
    } else {
        response.status(404).send(); // If no drone is found, return code 404 'page not found'
    }
});

// POST requests on /drones
app.post("/drones", function (request, response) {
    var drone = request.body; // Take in the JSON request body from the POST request

    // ID is chosen by the server, it generates a unique ID
    var uniqueID = shortid.generate(); //This line generates the unique ID
    drone.id = uniqueID;

    // Add the measurement to the store
    store.addDrone();
    response.status(201).location("../drones/"+drone.id).send(); //Respond with the 201 status 'Created' and give back the URL of the created drone.
});



app.get("/weer", function (request, response) {
    response.send(store.listweer());
});


app.get("/weer/:id", function (request, response) {
    var weer = store.searchweer(request.params.id);
    if (weer) {
        response.send(weer);
    } else {
        response.status(404).send();
    }
});


app.post("/weer", function (request, response) {
    var weer = request.body;

   
    var uniqueID = shortid.generate(); /
    weer.id = weer.drone.id + uniqueID;


    store.addweer();
    response.status(201).location("../weer/"+weer.id).send(); 
});

app.get("/events", function (request, response) {
    response.send(store.listevents());
});


app.get("/events/:id", function (request, response) {
    var events = store.searcevents(request.params.id);
    if (events) {
        response.send(events);
    } else {
        response.status(404).send();
    }
});


app.post("/events", function (request, response) {
    var events = request.body;

   
    var uniqueID = shortid.generate(); /
    events.id = events.drone.id + uniqueID;


    store.addevents();
    response.status(201).location("../events/"+events.id).send(); 
});





// Start the webservice on port 3000
app.listen(3000);
console.log("The service is now running at http://127.0.0.1:3000");