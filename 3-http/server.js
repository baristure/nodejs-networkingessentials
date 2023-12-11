const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle incoming requests from the client
  // Log request header information to the console
  console.log(`Received HTTP request: ${req.method} ${req.url}`);

  // Set response headers
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response
  res.end("Hello, HTTP Client!");
});

// Listen on a specific port for incoming HTTP requests
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`HTTP server is listening on port ${PORT}`);
});
