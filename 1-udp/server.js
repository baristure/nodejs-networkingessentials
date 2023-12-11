const dgram = require("dgram");

const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
  console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${msg}`);
});

const PORT = 3000;
server.bind(PORT);

console.log(`UDP server is listening on port ${PORT}`);
