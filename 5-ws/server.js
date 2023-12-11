const http = require("http");
const WebSocket = require("ws");

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WebSocket Example");
});

// Create a WebSocket server by passing the HTTP server
const wss = new WebSocket.Server({ server });

// WebSocket connection handling
wss.on("connection", (ws) => {
  // Connection opened
  console.log("Client connected");

  // Listen for messages from the client
  ws.on("message", (message) => {
    console.log(`Received message: ${message}`);

    // Send a response back to the client
    ws.send(`Server received: ${message}`);
  });

  // Send updates to the client every second
  const intervalId = setInterval(() => {
    ws.send(`Server time is ${new Date().toLocaleTimeString()}\n\n`);
  }, 1000);

  // Listen for the connection to be closed
  ws.on("close", () => {
    clearInterval(intervalId); // Clear the update interval
    console.log("Client disconnected");
  });
});

// Start the server on a specific port
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
