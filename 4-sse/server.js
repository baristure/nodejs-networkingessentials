const http = require("http");

const server = http.createServer((req, res) => {
  // Set HTTP headers
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // Send the initial message to the client
  res.write("data: Hello, SSE Client!\n\n");

  // Send updates to the client every 2 seconds
  const intervalId = setInterval(() => {
    res.write(`data: Server time is ${new Date().toLocaleTimeString()}\n\n`);
  }, 2000);

  // When the client connection is closed
  req.on("close", () => {
    clearInterval(intervalId); // Clear the update interval
    console.log("Client disconnected.");
    res.end();
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`SSE server is listening on port ${PORT}`);
});
