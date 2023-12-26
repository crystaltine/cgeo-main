import React from 'react';
import '../../styles/arena/ArenaPanes.css';
import { IArenaMatchPreview } from '../../types';

interface IAPGamePaneProps {
  gameData: IArenaMatchPreview;
}

const APGamePane = (props: IAPGamePaneProps) => {

  return (
    <div className='ap-game-pane'>
      GAMING
    </div>
  );
};

export default APGamePane;