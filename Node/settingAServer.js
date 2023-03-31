// http module comes with various methods that are useful when engaging with HTTP network requests.
// .createServer() method. This method is responsible for doing exactly what its namesake implies; 
// it creates an HTTP server. To implement this method to create a server, the following code can be used:

const server1 = http.createServer((req, res) => {
    res.end('Server is running!');
});   
server.listen(8080, () => {
    const { address, port } = server.address();
    console.log(`Server is listening on: http://${address}:${port}`);
})
// Method takes a single argument in the form of a callback function. 
// This callback function has two primary arguments; the request 
// (commonly written as req) and the response (commonly written as res).
    //req object contains all of the information about an HTTP request ingested by the server.
    //information such as the HTTP method (GET, POST, etc.), the pathname, headers, body, and so on.

    //res object contains methods and properties pertaining to the generation of a response by the HTTP server. 
    //This object contains methods such as .setHeader() (sets HTTP headers on the response), 
    //.statusCode (set the status code of the response), and .end() (dispatches the response to the client who made the request).

// listen method takes a port number as the first argument, which tells the server to listen for connections at the given port number.
// .listen() method takes an optional callback function as a second argument, allowing it to carry out a task after the server 
// shas successfully started.


// URL module
// Node.js provides the built-in url module. The core of the url module revolves around the URL class. 
// A new URL object can be instantiated using the URL class as follows:

const url = new URL('https://www.example.com/p/a/t/h?query=string');

// different parts of the URL can be accessed and modified via various properties

//hostname: Gets and sets the host name portion of the URL.
//pathname: Gets and sets the path portion of the URL.
//searchParams: Gets the search parameter object representing the query 
    //parameters contained within the URL. Returns an instance of the URLSearchParams class.

const host = url.hostname; // example.com
const pathname = url.pathname; // /p/a/t/h
const searchParams = url.searchParams; // {query: 'string'}
//Using these properties, one can break the URL down into easily usable parts for processing the request.

// url module can be used to deconstruct a URL into its constituent parts, it can also be used to construct a URL.

// This can be done by setting each of these values equal to a value for the newly constructed URL. Once all parts of 
// the URL have been added, the composed URL can be obtained using the .toString()
const createdUrl = new URL('https://www.example.com');
createdUrl.pathname = '/p/a/t/h';
createdUrl.search = '?query=string';

createdUrl.toString(); // Creates https://www.example.com/p/a/t/h?query=string

// QueryString module
// querystring module is dedicated to providing utilities solely focused on parsing and formatting URL query strings.

// .parse(): This method is used for parsing a URL query string into a collection of key-value pairs. The .decode() method does the same.
// const str = 'prop1=value1&prop2=value2';
// querystring.parse(str); // Returns { prop1: value1, prop2: value2}

// .stringify(): This method is used for producing a URL query string from a given object via iteration of the object’s “own properties.” 
//  The .encode() method does the same.
// const props = { "prop1": value1, "prop2": value2};
// querystring.stringify(props); // Returns 'prop1=value1&prop2=value2'

// .escape(): This method is used for performing percent-encoding on a given query string.
// .unescape(): This method is used to decode percent-encoded characters within a given query string.

// The querystring module is focused solely on manipulating URL query strings, so it requires the query 
// string to have already been isolated from an incoming URL as part of a request.


// server needs to maintain a way to handle each request based on specific criteria such as method, pathname
// process of handling requests in specific ways based on the information provided within the request is known as routing.

//HTTP request contains a method such as GET and POST, usefull to discern different classes of requests 
//based on the action intended for the server to carry out. Thus, all GET requests could be routed to a 
//specific function for handling, while all POST requests are routed to another function to be handled. 
//This also allows for the logical co-location of processing code with the specific verb to be handled.

const server = http.createServer((req, res) => {
    const { method } = req;
    switch(method) {
        case 'GET':
            return handleGetRequest(req, res);
        case 'POST':
            return handlePostRequest(req, res);
        case 'DELETE':
            return handleDeleteRequest(req, res);
        case 'PUT':
            return handlePutRequest(req, res);
        default:
            throw new Error(`Unsupported request method: ${method}`);
    }
})
// We can distinguish one request from another of the same method through the use of the pathname.
// The pathname allows the server to understand what resource is being targeted.

// We can distinguish one request from another of the same method through the use of the pathname. 
// The pathname allows the server to understand what resource is being targeted.

async function handleGetRequest(req, res) {
    const { pathname } = new URL(req.url);
    let data = {};

    if (pathname === '/projects') {
        data = await getProjects();
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(data));
    }

    res.statusCode = 404;
    return res.end('Requested resource does not exist');

}

// HTTP response status code
// response must be returned to the client to inform it of what happened.
// Response status codes are grouped into five classes:

// 1) Informational: Range from 100 to 199.

// 2) Successful: Range from 200 to 299.

// 3) Redirects: Range from 300 to 399.

// 4) Client Errors: Range from 400 to 499.

// 5) Server Errors: Range from 500 to 599.


const handleGetRequest = (req, res) => {
    // Set GET status code here
    res.statusCode = 200;
    return res.end(JSON.stringify({ data: [] }));
}  
const handlePostRequest = (req, res) => {
    // Set POST status code here
    res.statusCode = 500;
    return res.end("Unable to create record");
}

// Interacting with the database
// Databases usually have their own Software Development Kits (SDKs) and Object-Relational Mapping (ORMs)

function makeDatabaseRequest(type, cb) {
    fs.readFile('./database.json', 'utf8', function (err, payload) {
        if (err) {
            cb(err, null); 
        } else {
            cb(null, JSON.parse(payload)[type]);
            console.log(JSON.parse(payload)[type]);
        }
    });
}

// Interacting with another Backend API
// The request() method takes two arguments; it takes a configuration object containing 
// details about the request as well as a callback to handle the response.
const options = {
    hostname: 'example.com',
    port: 8080,
    path: '/projects',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

const request = http.request(options, res => {
    // Handle response here
})

// http module provides  method for making GET requests in the form of the get() 
// method. This method differs from the request() method in that it automatically 
// sets the method to GET and calls req.end() automatically.

// servers can make HTTP requests to other services opens up possibilities for different architecture designs for back-ends.
// Microservice architectures divide needs into separate lightweight services that communicate via HTTP over a network.
// A single application can be comprised of dozens of microservices, which could all be written in different programming 
// languages, but work together by communicating over HTTP.


