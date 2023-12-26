import React from 'react';
import '../../styles/arena/CompletedMatch.css';
import { IArenaMatchResult } from '../../types';

const APCompletedMatch = (props: IArenaMatchResult) => {

  return (
    <div className='ap-completed-match'>
      temp: {props.gameID}
    </div>
  );
};

export default APCompletedMatch;