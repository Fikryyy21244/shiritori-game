import { Server, Socket } from "socket.io";
import { Player } from "../types/game.types";
import { RoomService } from "../services/room.services";
import { generateRoomId } from "../utils/generateRoomId";

const roomService = new RoomService();

export const roomController = (io: Server, socket: Socket) => {
  socket.on("room:create", (player: Player) => {
    try {
      const roomId = generateRoomId();
      const newPlayer: Player = {
        ...player,
        socketId: socket.id,
        id: socket.id,
      };

      const room = roomService.createRoom(roomId, newPlayer);
      socket.join(roomId);

      socket.emit("room:updated", room);
      console.log(`Room ${roomId} dibuat oleh ${player.name}`);
    } catch (err: any) {
      socket.emit("room:error-message", err.message);
    }
  });

  socket.on("room:join", (roomId: string, player: Player) => {
    try {
      const joiningPlayer: Player = {
        ...player,
        socketId: socket.id,
        id: socket.id,
      };

      const room = roomService.joinRoom(roomId, joiningPlayer);
      socket.join(roomId);

      io.to(roomId).emit("room:updated", room);
      socket
        .to(roomId)
        .emit("room:notification", `${player.name} bergabung ke room!`);
    } catch (err: any) {
      socket.emit("room:error-message", err.message);
    }
  });

  socket.on("room:leave", (roomId: string, playerId: string) => {
    try {
      const room = roomService.getRoom(roomId);
      const playerWhoLeft = room?.players[playerId];

      const updatedRoom = roomService.leaveRoom(roomId, playerId);

      if (updatedRoom) {
        io.to(roomId).emit("room:updated", updatedRoom);

        if (playerWhoLeft) {
          socket
            .to(roomId)
            .emit(
              "room:notification",
              `${playerWhoLeft.name} telah meninggalkan room`,
            );
        }
      }
    } catch (err: any) {
      socket.emit("room:error-message", err.message);
    }
  });
};
