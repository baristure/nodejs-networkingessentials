const mqtt = require("mqtt");

// MQTT broker address
const brokerUrl = "mqtt://localhost";

// Create an MQTT client
const client = mqtt.connect(brokerUrl);

// When the connection is successful
client.on("connect", () => {
  console.log("Publisher connected to MQTT broker");

  // Publish a message to the "topic/example" topic every second
  setInterval(() => {
    const message = `Hello, MQTT! ${new Date().toLocaleTimeString()}`;
    client.publish("topic/example", message);
    console.log(`Message published: ${message}`);
  }, 1000);
});

// When the connection is closed
client.on("close", () => {
  console.log("Publisher disconnected from MQTT broker");
});
