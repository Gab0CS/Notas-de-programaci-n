import express from 'express';
const app = express();
// The second line, it returns an instance of an Express application. 
// This application can then be used to start a server and specify server behavior.

// In order for our server to start responding, we have to tell the server where 
// to listen for new requests by providing a port number argument to a method called app.listen().

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


// To tell our server how to deal with any given request
//  Express routes (including app.get()) usually take two arguments, 
// a path (usually a string), and a callback function to handle the request and send a response.
const moods = [{ mood: 'excited about express!'}, { mood: 'route-tastic!' }];
app.get('/moods', (req, res, next) => {
  // Here we would send back the moods array in response
});
//The route above will match any GET request to '/moods' and call the callback function, 
//passing in two objects as the first two arguments. These objects represent the request 
//sent to the server and the response that the Express server should eventually send to the client.
//If no routes are matched Express server will handle sending a 404 Not Found response to the client.


//Sending a response
//HTTP follows a one request-one response cycle.
//each server should only send a single response back to the client per request.
//Express servers send responses using the .send() method on the response object. 
//.send() will take any input and include it in the response body.
const monsters = [
    { type: 'werewolf' }, 
    { type: 'hydra' }, 
    { type: 'chupacabra' }
];
app.get('/monsters', (req, res, next) => {
    res.send(monsters);
});
// json() can be used to explicitly send JSON-formatted responses. .json()


// Matching route path
// if we send a request to <server address>:<port number>/api-endpoint, 
// the Express server will search through any registered routes  in the order that they 
// are registered in your code and try to match /api-endpoint
// If there are no matching routes registered, or the Express server has not sent a response
// at the end of all matched routes, it will automatically send back a 404 Not Found response

//Getting a single response
//Express servers provide this functionality with named route parameters. Parameters are route 
//path segments that begin with : in their Express route definitions. They act as wildcards, matching any text at that path segment
///monsters/:id will match both/monsters/1 and /monsters/45


const monsters2 = { 
    hydra: { height: 3, age: 4 }, 
    dragon: { height: 200, age: 350 } 
};
// GET /monsters/hydra
app.get('/monsters/:name', (req, res, next) => {
    console.log(req.params); // { name: 'hydra' }
    res.send(monsters2[req.params.name]);
});
// a .get() route is defined to match /monsters/:name path
// When a GET request arrives for /monsters/hydra
// The callback is called. Inside the callback, req.params is an object with the key name and the value hydra
//The appropriate monster is retrieved by name (the object key) from the monsters object and sent back to the client with res.send()

//Setting status codes
//Response codes provide information to clients about how their requests were handled 
//For example, any res.send() has by default sent a 200 OK status code.
//res object has a .status() method to allow us to set the status code, and other methods like .send() can be chained from it
const monsterStoreInventory = { fenrirs: 4, banshees: 1, jerseyDevils: 4, krakens: 3 };
app.get('/monsters-inventory/:name', (req, res, next) => {
    const monsterInventory = monsterStoreInventory[req.params.name];
    if (monsterInventory) {
        res.send(monsterInventory);
    } else {
        res.status(404).send('Monster not found');
    }
});
//we’ve implemented a route to retrieve inventory levels from a Monster Store.
//When a request arrives for /monsters-inventory/mothMen, the route matches and so the callback is invoked.
//req.params.name will be equal to 'mothMen' and so our program accesses monsterStoreInventory['mothMen']
//Since there are no mothMen in our inventory,res.status() sets a 404 status code on the response and .send() sends the response.


// Matching longer paths
// a route matching /monsters/:name would match all the following request paths:
/monsters/hydra
/monsters/jörmungandr
/monsters/manticore
/monsters/123

// More HTTP methods

// PUT
// PUT requests are used for updating existing resources.

//A query string appear at the end of the path in URLs, and they are indicated with a ? character
//in /monsters/1?name=chimera&age=1, the query string is name=chimera&age=1 and the path is /monsters/1/

//Query strings do not count as part of the route path. Instead, the Express server parses them into a JavaScript 
//object and attaches it to the request body as the value of req.query. The key: value relationship is indicated 
//by the = character in a query string, and key-value pairs are separated by &. In the above example route, the 
//req.query object would be { name: 'chimera', age: '1' }

// PUT /monsters/1?name=chimera&age=1
app.put('/monsters/:id', (req, res, next) => {
    const monsterUpdates = req.query;
    monsters[req.params.id] = monsterUpdates;
    res.send(monsters[req.params.id]);
});
//Here, we have a route for updating monsters by ID
//PUT /monsters/1?name=chimera&age=1 request arrives, our callback function is called and, we create a monsterUpdates 
//variable to store req.query.  
//Since req.params.id is '1', we replace monsters['1']‘s value with monsterUpdates . Finally, Express sends back the new 
//monsters['1'].

app.put('/expressions/:id', (req, res, next) => {
    const indexExpression = getIndexById(req.params.id, expressions)
    if( indexExpression !== -1){
        updateElement(req.params.id, req.query, expressions);
        res.send(expressions[indexExpression]);
    } else{
            res.status(404).send();
        }
});
// first we found the index of the expression by checking it with getIndexById
// Accesing req.params.id and expressions (The element of the array and the array itself)
// after checking that the index exist in a if we call updateElement, who takes the id of the element
// to modify, the query of the requests and the array
//We return the updated element in the 

//POST is the HTTP method verb used for creating new resources. 
//POST routes create new data, their paths do not end with a route parameter, but instead end with the type of resource to be created.
//to create a new monster, a client would make a POST request to /monsters
//Express uses .post() as its method for POST requests. POST requests can use many ways of sending data to create new resources, including query strings.
app.post('/expressions', (req, res, next) => {
    const receivedExpression = createElement('expressions', req.query);
    if (receivedExpression) {
        expressions.push(receivedExpression);
        res.status(201).send(receivedExpression);
    } else {
        res.status(400).send();
    }
});

// Delete method
//DELETE routes delete currently existing data, their paths should usually end with a route parameter to indicate which resource to delete
//Servers often send a 204 No Content status code if deletion occurs without error.
app.delete('/expressions/:id', (req, res, next) => {
    const elementIndex = getIndexById(req.params.id, expressions);
    if (elementIndex != -1) {
        expressions.splice(elementIndex, 1);
        res.status(204).send(expressions);
    } else {
        res.status(404).send();
    }
});
