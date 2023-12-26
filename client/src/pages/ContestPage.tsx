import '../styles/contest/ContestPage.css'
import GenericPage from './GenericPage';
import ContentPanel from '../components/ContentPanel';
import CPRule from '../components/CPRule';
import React from 'react';
import { IBotOverview, IContestRules } from '../types';
import BotProfile from '../components/BotProfile';
import { fDate } from '../utils';
import LeaderboardProfile from '../components/LeaderboardProfile';
import tempLbData from '../tempdata/temp_leaderboard_data.json';

interface ContestPageProps {
  gameInfo: {
    contestTitle: string,
    contestDesc: string,
    explainerVideo: {
      link: string,
      title: string,
      author: string,
      description: string
    }
    rules: IContestRules
  },
  currentBotOverview: IBotOverview
}

const ContestPage = (props: ContestPageProps) => {

  // This should be fetched from the server
  const [currentUserSubmission, setCurrentUserSubmission] = React.useState<IBotOverview>(props.currentBotOverview);

  return (
    <GenericPage selected='Contest'>
      <div className='cp-main'>
        <div>
          <h1 className='cp-header'>{props.gameInfo.contestTitle}</h1>
          <h3 className='cp-subheader'>{props.gameInfo.contestDesc}</h3>
        </div>
        <div className='cp-section-container'>

          <div className='cp-left-section'>

            <ContentPanel title='Explainer Video' sectionID='explainervideo'>

              <div className='cp-explainervideo-panel'>
                <iframe 
                width="100%" 
                height="320"
                style={{fontSize: 0}}
                src={props.gameInfo.explainerVideo.link} 
                title="YouTube video player" 
                frameBorder={0}
                allowFullScreen
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />

                <div className='cpev-info'>
                  <h3 className='cpev-author'>{props.gameInfo.explainerVideo.author}</h3>
                  <h2 className='cpev-title'>{props.gameInfo.explainerVideo.title}</h2>
                  <p className='cpev-desc'>
                    {props.gameInfo.explainerVideo.description}
                  </p>
                  <a target='_blank' rel='noopener noreferrer' href={props.gameInfo.explainerVideo.link}>Watch on YouTube</a>
                </div>
              </div>

            </ContentPanel>

            <ContentPanel clear title='Participate' sectionID='getstarted'>
              <div className='cp-getstarted-buttons'>
                <button className='button-large button-primary width-100'>Download Contest Files</button>
                <button className='button-large button-secondary width-100'>Play Online</button>
              </div>
            </ContentPanel>

            <ContentPanel title='Game Details' sectionID='gamedetails'>
              <h3>History</h3>
              <p>
                Chess is a two-player strategy board game played on a checkered board with 64 squares arranged in an 8x8 grid.
                The game is played by millions of people worldwide. Chess is believed to have originated in India sometime before the 7th century.
                The game was derived from the Indian game chaturanga, which is also the likely ancestor of the Eastern strategy games xiangqi, janggi, and shogi.
                Chess reached Europe by the 9th century, due to the Umayyad conquest of Hispania.
                <br /><br />
                The pieces assumed their current powers in Spain in the late 15th century; the rules were standardized in the 19th century.
                The first generally recognized World Chess Champion, Wilhelm Steinitz, claimed his title in 1886.
                Since 1948, the World Championship has been regulated by the Fédération Internationale des Échecs (FIDE), the game's international governing body.
              </p>
              <h3>Computers</h3>
              <p>
                The first chess machines capable of playing chess or reduced chess-like games were software programs running on digital computers early in the vacuum-tube computer age (1950s). The early programs played so poorly that even a beginner could defeat them. Within 40 years, in 1997, chess engines running on super-computers or specialized hardware were capable of defeating even the best human players. By 2006, programs running on desktop PCs had attained the same capability. In 2006, Monty Newborn, Professor of Computer Science at McGill University, declared: "the science has been done". Nevertheless, solving chess is not currently possible for modern computers due to the game's extremely large number of possible variations.
              </p>
            </ContentPanel>

          </div>

          <div className='cp-right-section'>

            <ContentPanel 
            clear
            headerObjects={<a href='/leaderboard#yoursubmission' className='button-secondary button-medium hover-text-decoration-none'>Detailed View</a>}
            title='Your Active Bot' 
            sectionID='yourcurrentsubmission'>
              <div className='cpcs-container'>
                <BotProfile {...currentUserSubmission} />
              </div>
            </ContentPanel>

            <div className='flex-row flex-gap-20px width-100'>
              <button className='button-primary button-large width-100'>Submit New Engine</button>
              <button className='button-secondary button-large width-100'>Manage</button>
            </div>

            <ContentPanel title='Contest Specifics' sectionID='rules' outerClasses='cp-hr-colorer'>

              <CPRule
              iconFilename='calendar'
              name='Start Date'
              description='Submissions open at 12:00 AM UTC'
              value={fDate(props.gameInfo.rules.startDate)} />

              <hr />

              <CPRule
              iconFilename='calendar'
              name='End Date'
              description='Submissions close after 11:59 PM UTC'
              value={fDate(props.gameInfo.rules.endDate)} />

              <hr />

              <CPRule
              iconFilename='token'
              name='Max Tokens'
              description='The maximum number of compiler tokens allowed in your code. <a target="_blank" rel="noopener noreferrer" href="/about/tokens">Learn more</a>'
              value={props.gameInfo.rules.maxTokens} />

              <hr />

              <CPRule
              iconFilename='stopwatch'
              name='Time Control'
              description='One minute per player, with no extra time or delay.'
              value={props.gameInfo.rules.timeControl} />

            </ContentPanel>

            <ContentPanel title='Scoring' sectionID='scoring'>
              <p>todo: 1 = win, 0.5 = draw, 0 = loss</p>
            </ContentPanel>

            <ContentPanel title='Leaderboard' sectionID='leaderboard'>
              <div className='cp-lb-container'>
                {tempLbData.map((bot, index) => {
                    return (
                      <LeaderboardProfile
                      key={index}
                      position={bot.position}
                      botIcon={bot.botIcon}
                      botName={bot.botName}
                      botElo={bot.botElo}
                      botWDL={bot.botWDL}
                      botLastUpdated={bot.botLastUpdated} />
                    );
                  })}
              </div>
            </ContentPanel>

            <ContentPanel title='Resources' sectionID='resources'>
            <p>too lazy to finish for now</p>
            </ContentPanel>

          </div>

        </div>
      </div>
    </GenericPage>
  );
};

export default ContestPage;