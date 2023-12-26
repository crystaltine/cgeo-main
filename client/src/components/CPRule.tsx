import '../styles/contest/CPRule.css';
import calendar from '../assets/icons/calendar.svg';
import token from '../assets/icons/token.svg';
import stopwatch from '../assets/icons/stopwatch.svg';

const icons: { [key: string]: string } = { calendar, token, stopwatch };

interface CPRuleProps {
  iconFilename: string;
  name: string;
  description?: string;
  value: number | string;
}

const CPRule = (props: CPRuleProps) => {

  return (
    <div className='cp-rule-container'>

      <div className='cp-rule-left'>
        <div className='cp-rule-icon'>
          <img src={icons[props.iconFilename]} alt='icon' className='cp-rule-icon-img' />
          <h3 className='cp-rule-title'>{props.name}</h3>
        </div>
        <p className='cp-rule-desc' dangerouslySetInnerHTML={
          { __html: props.description ? props.description : '' }
        } />
      </div>

      <div className='cp-rule-value'>{props.value}</div>

    </div>
  );
};

export default CPRule;