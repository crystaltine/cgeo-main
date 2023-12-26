export type IBotOverview = {
  botIcon: string;
  botName: string;
  botElo: number;
  botID?: string;
  botWDL: Array<number>;
  botLastUpdated: number;
} | null;

export interface ILeaderboardEntry {
  position: number;
  botIcon: string;
  botName: string;
  botElo: number;
  botWDL: Array<number>;
  botLastUpdated: number;
}

export interface IContestRules {
  maxTokens: number,
  timeControl: string,
  startDate: number,
  endDate: number,
}

export interface IArenaMatchResult {
  opponent: {
    username: string,
    version: string,
    eloBeforeMatch: number,
  },
  me: {
    username: string,
    version: string,
    eloBeforeMatch: number,
  }
  endGameState, // state of the board to display in a little preview
  record: Array<number>, // [your wins, draws, losses]
  finishTimestamp: number,
  ratingChange: number,
  gameID?: string,
}

export interface IArenaMatchPreview {
  opponent: {
    username: string,
    version: string,
    eloBeforeMatch: number,
  },
  me: {
    username: string,
    version: string,
    eloBeforeMatch: number,
  }
  currentGamestate, // state of the board to display in a little preview
  currentRecord: Array<number>, // [your wins, draws, losses]
  gameID?: string,
}