import { Player, Room, Rooms } from "../types/game.types";
import { PLAYER_COLORS } from "../utils/playerColors";

export class RoomService {
  private rooms: Rooms = {};

  createRoom(roomId: string, player: Player): Room {
    const newRoom: Room = {
      id: roomId,
      players: {
        [player.id]: {
          ...player,
          color: PLAYER_COLORS[0],
          isHost: true,
          isEliminated: false,
          isReady: false,
        },
      },
      turnOrder: [player.id],
      currentActiveTurnPlayerId: player.id,
      gameState: {
        lastWord: "",
        historyWord: [],
        startTime: Date.now(),
        status: "WAITING",
      },
    };

    this.rooms[roomId] = newRoom;
    return newRoom;
  }

  joinRoom(roomId: string, player: Player): Room {
    const room = this.rooms[roomId];
    if (!room) throw new Error("Room ot found");

    const isNameTaken = Object.values(room.players).some(
      (p) => p.name === player.name,
    );

    if (isNameTaken) throw new Error("Player name already taken");

    const assignedColor =
      PLAYER_COLORS[Object.keys(room.players).length] || PLAYER_COLORS[0];

    room.players[player.id] = {
      ...player,
      color: assignedColor,
      isHost: false,
      isEliminated: false,
      isReady: false,
    };

    room.turnOrder.push(player.id);
    return room;
  }

  leaveRoom(roomId: string, playerId: string): Room | null {
    const room = this.rooms[roomId];
    if (!room) return null;

    const isHost = room.players[playerId]?.isHost;

    delete room.players[playerId];
    room.turnOrder = room.turnOrder.filter((id) => id !== playerId);

    if (room.turnOrder.length === 0) {
      delete this.rooms[roomId];
      return null;
    }

    if (isHost) {
      const newHost = room.turnOrder[0];
      room.players[newHost].isHost = true;
    }

    if (room.currentActiveTurnPlayerId === playerId) {
      room.currentActiveTurnPlayerId = room.turnOrder[0];
    }

    return room;
  }

  getRoom(roomId: string): Room | undefined {
    return this.rooms[roomId];
  }
}
