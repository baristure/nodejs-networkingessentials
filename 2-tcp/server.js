const net = require("net");

// Create a TCP server
const server = net.createServer((socket) => {
  // When a new connection is established
  console.log("Client connected.");

  // Listen for data from the client
  socket.on("data", (data) => {
    console.log(`Received data from client: ${data}`);

    // Send data to the client every second
    setInterval(() => {
      socket.write("Hello from server!");
    }, 1000);
  });

  // When the client connection is closed
  socket.on("end", () => {
    console.log("Client disconnected.");
  });
});

// Listen on a specific port for incoming connections
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`TCP server is listening on port ${PORT}`);
});
