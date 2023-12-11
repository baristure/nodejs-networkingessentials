// publisher.js

const amqp = require("amqplib");

async function publishMessage() {
  try {
    const connection = await amqp.connect("amqp://localhost");

    const channel = await connection.createChannel();

    const queueName = "hello";
    await channel.assertQueue(queueName, { durable: false });

    const message = `Hello, RabbitMQ! ${new Date().toLocaleTimeString()}`;
    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Message sent: ${message}`);
    const intervalId = setInterval(() => {
      channel.sendToQueue(queueName, Buffer.from(message));
      console.log(`Message sent: ${message}`);
    }, 1000);

    // await channel.close();
    // await connection.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

publishMessage();
