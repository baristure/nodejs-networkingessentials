// consumer.js

const amqp = require("amqplib");

async function consumeMessage() {
  try {
    const connection = await amqp.connect("amqp://localhost");

    const channel = await connection.createChannel();

    const queueName = "hello";
    await channel.assertQueue(queueName, { durable: false });

    console.log("Waiting for messages. To exit, press CTRL+C");

    channel.consume(queueName, (message) => {
      if (message) {
        console.log(
          `Received message: ${message.content.toString()}-  ${new Date().toLocaleTimeString()}`
        );
        channel.ack(message);
      }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

consumeMessage();
