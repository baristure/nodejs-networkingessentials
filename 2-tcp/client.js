const net = require("net");
// Create TCP client
const client = new net.Socket();

// Connect to the server
const SERVER_PORT = 3000;
const SERVER_ADDRESS = "localhost";

client.connect(SERVER_PORT, SERVER_ADDRESS, () => {
  console.log("Connected to server.");

  // Send data to server
  client.write("Hello, TCP Server!");

  // Close the client
  client.end();
});

// Listen data from server
client.on("data", (data) => {
  console.log(`Received data from server: ${data}`);
});

// Close the client when server disconnect
client.on("close", () => {
  console.log("Connection to server closed.");
});
