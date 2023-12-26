import React from 'react';
import '../../styles/arena/ArenaPanes.css';
import { IArenaMatchPreview, IArenaMatchResult } from '../../types';
import ContentPanel from '../ContentPanel';
import APOngoingMatch from './APOngoingMatch';

interface IAPMatchPaneProps {
  currentMatches: IArenaMatchPreview[];
  history: IArenaMatchResult[];
  startNewMatch: () => void;
  toggleAutoMode: () => void;
}

const APMatchPane = (props: IAPMatchPaneProps) => {

  return (
    <div className='ap-match-pane'>
      <ContentPanel title={`Your Matches (${props.currentMatches?.length ?? 0})`}>
        <div className='ap-match-current'>
          {props.currentMatches?
            props.currentMatches.map((match, i) => {
              return <APOngoingMatch key={i} {...match} />;
            }) :
            <div>
              No matches currently running
            </div>
          }
        </div>
        <div className='ap-match-controls'>
          <div className='flex-row width-100 flex-gap-10px'>
            <button className='button-medium button-primary' onClick={props.startNewMatch}>
              Start New Match
            </button>
            <button className='button-medium button-secondary' onClick={props.toggleAutoMode}>
              Auto Mode
            </button>
          </div>
        </div>
      </ContentPanel>

      <ContentPanel title='Match History' outerClasses='flex-grow-1'>
        <div className='ap-match-history'>
          {props.history?
          props.history.map((match, i) => {
            return (
              <div key={i}>
                This is a match in history
              </div>
            );
          }) :
          <div>
            No matches recorded!
          </div>
          }
        </div>
      </ContentPanel>

    </div>
  );
};

export default APMatchPane;