import React from 'react';
import '../../styles/arena/ArenaPanes.css';
import { IBotOverview } from '../../types';
import ContentPanel from '../ContentPanel';
import BotProfile from '../BotProfile';

interface IAPBotPaneProps {
  botData: IBotOverview;
  pastSubmissions: IBotOverview[];
}

const APBotPane = (props: IAPBotPaneProps) => {

  return (
    <div className='ap-bot-pane'>

      <ContentPanel title='Bot Overview'>
				<div className='ap-bot-overview'>
					{props.botData?
						<BotProfile {...props.botData} />	:
						<div>
							No engine is currently selected! (todo)
						</div>	
					}
				</div>
			</ContentPanel>

			<ContentPanel title='Submission History' outerClasses='flex-grow-1'>
				<div className='ap-bot-prevs'>
					{props.pastSubmissions?
						props.pastSubmissions.map((bot, i) => {
							return (
								<div key={i}>
									This is a previous submission
								</div>
							);
						}) :
						<div>
							No previous submissions!
						</div>
					}						
				</div>
			</ContentPanel>

    </div>
  );
};

export default APBotPane;