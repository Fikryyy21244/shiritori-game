export type Player = {
  id: string;
  socketId: string;
  name: string;
  color: string;
  isHost: boolean;
  isEliminated: boolean;
  isReady: boolean;
};

export type Room = {
  id: string;
  players: Record<string, Player>;
  turnOrder: string[];
  currentActiveTurnPlayerId: string;
  gameState: {
    lastWord: string;
    historyWord: string[];
    startTime: number;
    status: "WAITING" | "PLAYING" | "ENDED";
  };
};

export type Rooms = Record<string, Room>;
