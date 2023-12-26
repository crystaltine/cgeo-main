import { Route, Routes } from 'react-router-dom';
import './styles/general/prebuilt.css';

import Homepage from './pages/Home';
import ContestPage from './pages/ContestPage';
import ArenaPage from './pages/ArenaPage';
import { IArenaMatchPreview, IArenaMatchResult } from './types';

const devCPC = {
  contestTitle: '2024 Spring: Bullet Chess',
  contestDesc: 'Classic computer chess with 1-minute, no increment time control.',
  explainerVideo: {
    link: "https://www.youtube.com/embed/OCSbzArwB10?si=ukSuecBif7-6GxbR",
    title: "How To Play Chess: The Ultimate Beginner Guide",
    author: "GothamChess",
    description: "How to play chess properly, a guide for beginners. This guide is designed to teach you chess basics, chess openings, endgames, tactics, and strategy."
  },
  rules: {
    maxTokens: 1024,
    timeControl: '1+0',
    startDate: Date.UTC(2024, 0, 1, 0, 0, 0, 0),
    endDate: Date.UTC(2024, 4, 31, 0, 0, 0, 0),
  }
}

const tempBotOverview = {
  botIcon: 'https://th.bing.com/th/id/OIP.O2Y6ld0DoqU08VqMWxFYiAAAAA?rs=1&pid=ImgDetMain',
  botName: 'incompetent bot',
  botElo: 1657,
  botWDL: [26, 54, 20],
  botLastUpdated: Date.UTC(2024, 0, 14, 14, 26, 53, 0),
};

const tempArenaMatchPreview: IArenaMatchPreview[] = [
  {
    opponent: {
      username: 'nemesis bot',
      eloBeforeMatch: 1684,
      version: '1.0.0',
    },
    me: {
      username: 'incompetent bot',
      eloBeforeMatch: 1657,
      version: '1.0.0',
    },
    currentGamestate: null,
    currentRecord: [3, 1, 3],
    gameID: '1234567890',
  },
  {
    opponent: {
      username: 'broke bot',
      eloBeforeMatch: 1222,
      version: '1.0.0',
    },
    me: {
      username: 'incompetent bot',
      eloBeforeMatch: 1657,
      version: '1.0.0',
    },
    currentGamestate: null,
    currentRecord: [5, 0, 0],
    gameID: '23455454',
  },
  {
    opponent: {
      username: 'uhhh bot',
      eloBeforeMatch: 4,
      version: '1.0.0',
    },
    me: {
      username: 'incompetent bot',
      eloBeforeMatch: 1657,
      version: '1.0.0',
    },
    currentGamestate: null,
    currentRecord: [0, 0, 0],
    gameID: '34345345',
  },
  {
    opponent: {
      username: 'hooman',
      eloBeforeMatch: 900,
      version: '1.0.0',
    },
    me: {
      username: 'incompetent bot',
      eloBeforeMatch: 1657,
      version: '1.1.0',
    },
    currentGamestate: null,
    currentRecord: [2, 0, 0],
    gameID: '9999',
  },
]

const tempArenaMatchHistory: IArenaMatchResult[] = [
  {
    opponent: {
      username: 'nemesis bot',
      eloBeforeMatch: 1684,
      version: '1.0.0',
    },
    me: {
      username: 'incompetent bot',
      eloBeforeMatch: 1657,
      version: '1.0.0',
    },
    endGameState: null,
    record: [3, 1, 4],
    gameID: '1234567890',
    finishTimestamp: 1610650000000,
    ratingChange: -3,
  },
] // TODO - decide: should arena be single games or sets of games? 
// single games allow users to debug more easily. if we decide to do this, 
// no need for 'record' field in both IArenaMatchPreview and IArenaMatchResult (fix)
    


function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/contest" element={<ContestPage gameInfo={devCPC} currentBotOverview={tempBotOverview} />} />
      <Route path="/arena" element={<ArenaPage botOverview={tempBotOverview} currentMatches={tempArenaMatchPreview} history={tempArenaMatchHistory} />} />
    </Routes>
  )
}

export default App
