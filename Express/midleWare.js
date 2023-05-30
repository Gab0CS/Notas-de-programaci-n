// Middleware is code that executes between a server receiving a request and sending a response.
// Middleware can perform logic on the request and response objects,
    // inspecting a request, performing some logic based on the request, 
    // attaching information to the response, 
    // attaching a status to the response, 
    // sending the response back to the user, 
    // or simply passing the request and response to another middleware
app.use((req, res, next) => {
        console.log('Request received');
});
// app.use() takes a callback function that it will call for every received request.
// every time the server receives a request, it will find the first registered middleware function and call it.

app.use((req, res, next) => {
    console.log(`${req.method} Request Received`);
});

// Usign the property of the req.method to extract the method of the request

