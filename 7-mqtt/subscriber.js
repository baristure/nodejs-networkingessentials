const mqtt = require("mqtt");

// MQTT broker address
const brokerUrl = "mqtt://localhost";

// Create an MQTT client
const client = mqtt.connect(brokerUrl);

// When the connection is successful
client.on("connect", () => {
  console.log("Subscriber connected to MQTT broker");

  // Subscribe to the "topic/example" topic
  client.subscribe("topic/example", (err) => {
    if (!err) {
      console.log('Subscriber is now listening to "topic/example"');
    }
  });
});

// When a message is received
client.on("message", (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

// When the connection is closed
client.on("close", () => {
  console.log("Subscriber disconnected from MQTT broker");
});
