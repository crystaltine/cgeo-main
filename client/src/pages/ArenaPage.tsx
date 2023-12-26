import GenericPage from './GenericPage';
import '../styles/arena/ArenaPage.css';
import APMatchPane from '../components/arena/APMatchPane';
import APBotPane from '../components/arena/APBotPane';
import APGamePane from '../components/arena/APGamePane';
import { IBotOverview, IArenaMatchPreview } from '../types';

interface IArenaPageProps {
	botOverview: IBotOverview;
	currentMatches: IArenaMatchPreview[];
}

const ArenaPage = (props: IArenaPageProps) => { 

  return (
    <GenericPage>
			<div className='arena-page'>
				<APGamePane />
				<APMatchPane currentMatches={props.currentMatches} />
				<APBotPane botData={props.botOverview} />
			</div>
    </GenericPage>      
  );
};

export default ArenaPage;