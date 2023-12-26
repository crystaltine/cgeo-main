import React from 'react';
import '../../styles/arena/OngoingMatch.css';
import { IArenaMatchPreview } from '../../types';

const APOngoingMatch = (props: IArenaMatchPreview) => {

  return (
    <div className='ap-ongoing-match-container'>

      <div style={{height: 120, width: 120, backgroundImage: 'var(--loadingGradient)'}} /> {/* placeholder for game preview */}

      <div className='ap-ongoing-match-info'>
				<div className='ap-ongoing-match-oppname'>{props.opponent.username}</div>
				<div className='flex-row justify-between'>
					<span className='ap-ongoing-match-oppelo'>{props.opponent.eloBeforeMatch}</span>
					<div className='bprof-wdl'>
						<span className='bprof-w'>{props.currentRecord[0] + props.currentRecord[1]/2}</span>-
						<span className='bprof-l'>{props.currentRecord[2] + props.currentRecord[1]/2}</span>
					</div>
				</div>

			</div>

			<button className='button-small button-secondary font-size-14px'>
				Manage
			</button>

    </div>
  );
};

export default APOngoingMatch;