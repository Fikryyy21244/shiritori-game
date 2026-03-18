import type { Server } from "socket.io";
import { roomController } from "../controllers/room.controllers";

export const initSocket = (io: Server) => {
  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    roomController(io, socket);
  });
};
