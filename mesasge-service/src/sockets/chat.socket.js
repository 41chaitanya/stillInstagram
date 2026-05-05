import { saveMessage } from "../service/message.service.js";

export const iniSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
        // join room
    socket.on("some room", ({userA, userB}) => {
      const roomId = [userA, userB].sort().join("_");

      socket.join(roomId);
      console.log(`Joined room: ${roomId}`);
    });

    socket.on("send_message", async (data) => {
      const { senderId, receiverId, content } = data;
      const roomId = [senderId, receiverId].sort().join("_");
      const message = await saveMessage(data);
      io.to(roomId).emit("receive_message", message);
    });
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
