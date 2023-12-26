import '../styles/general/BotProfile.css';
import { IBotOverview } from '../types';
import { fDate } from '../utils';

const BotProfile = (props: IBotOverview) => {

  return (
    <div className='bprof-container'>

      <div className='bprof-line'>
        <div className='bprof-profile'>
          <img src={props.botIcon} alt='icon' className='bprof-icon' />
          <h3 className='bprof-name'>{props.botName}</h3>
        </div>
        <h1 className='bprof-elo'>{props.botElo}</h1>
      </div>

      <div className='bprof-line'>
        <p className='bprof-timestamp'>Last Submission: {fDate(props.botLastUpdated)}</p>
        <div className='bprof-wdl'>
          <span className='bprof-w'>{props.botWDL[0]}W</span> -
          <span className='bprof-d'>{props.botWDL[1]}D</span> -
          <span className='bprof-l'>{props.botWDL[2]}L</span>
        </div>
      </div>

    </div>
  );
};

export default BotProfile;