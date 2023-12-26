import '../styles/general/LeaderboardProfile.css';
import { ILeaderboardEntry } from '../types';
import { fDate } from '../utils';

const highlightClasses = [
  'lprof-gold',
  'lprof-silver',
  'lprof-bronze'
];

const LeaderboardProfile = (props: ILeaderboardEntry) => {

  return (
    <div className={`lprof-container ${highlightClasses[props.position-1]}`}>

      <div className='lprof-position'> #{props.position} </div>

      <div className='width-100'>
        <div className='lprof-line'>
          <div className='lprof-profile'>
            <img src={props.botIcon} alt='icon' className='lprof-icon' />
            <h3 className='lprof-name'>{props.botName}</h3>
          </div>
          <h1 className='lprof-elo'>{props.botElo}</h1>
        </div>
        <div className='lprof-line'>
          <p className='lprof-timestamp'>Last Submission: {fDate(props.botLastUpdated)}</p>
          <div className='lprof-wdl'>
            <span className='lprof-w'>{props.botWDL[0]}W</span> -
            <span className='lprof-d'>{props.botWDL[1]}D</span> -
            <span className='lprof-l'>{props.botWDL[2]}L</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LeaderboardProfile;