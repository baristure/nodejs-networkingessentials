const dgram = require("dgram");

const client = dgram.createSocket("udp4");

setInterval(() => {
  const message = "Hello, UDP Server!";
  const SERVER_PORT = 3000;
  const SERVER_ADDRESS = "localhost";

  client.send(message, SERVER_PORT, SERVER_ADDRESS, (err) => {
    if (err) throw err;
    console.log(`Sent message to server: ${message}`);
  });
}, 1000);
