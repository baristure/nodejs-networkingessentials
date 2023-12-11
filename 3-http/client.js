const http = require("http");

// Make an HTTP request to the server
const SERVER_PORT = 3000;
const SERVER_ADDRESS = "localhost";

http
  .get(`http://${SERVER_ADDRESS}:${SERVER_PORT}`, (res) => {
    // Listen for the response from the server
    let data = "";

    // When data is received, append it to the 'data' variable
    res.on("data", (chunk) => {
      console.log("chunk :>> ", chunk);
      data += chunk;
    });

    // When the response is complete, log the received data
    res.on("end", () => {
      console.log(`Received response from server: ${data}`);
    });
  })
  .on("error", (err) => {
    // If there's an error with the HTTP request, log the error message
    console.error(`HTTP request failed: ${err.message}`);
  });
