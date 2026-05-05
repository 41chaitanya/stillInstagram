import http from 'http'
import { Server } from 'socket.io';
import app from './src/app.js';
import { initSocket } from './src/sockets/chat.socket.js';
import { connectDB } from './src/config/db.js';
import { ENV } from './src/config/env.js';

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});
initSocket(io)
const startServer = async () => {
  await connectDB();

  server.listen(ENV.PORT, () => {
    console.log(`Message Service running on ${ENV.PORT}`);
  });
};

startServer();