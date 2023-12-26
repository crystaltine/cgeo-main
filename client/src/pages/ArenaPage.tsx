import GenericPage from './GenericPage';
import '../styles/arena/ArenaPage.css';
import APMatchPane from '../components/arena/APMatchPane';
import APBotPane from '../components/arena/APBotPane';
import APGamePane from '../components/arena/APGamePane';
import { IBotOverview, IArenaMatchPreview, IArenaMatchResult } from '../types';

interface IArenaPageProps {
	botOverview: IBotOverview;
	currentMatches: IArenaMatchPreview[];
	history: IArenaMatchResult[];
}

const ArenaPage = (props: IArenaPageProps) => { 

  return (
    <GenericPage>
			<div className='arena-page'>
				<APGamePane />
				<APMatchPane currentMatches={props.currentMatches} history={props.history} />
				<APBotPane botData={props.botOverview} />
			</div>
    </GenericPage>      
  );
};

export default ArenaPage;