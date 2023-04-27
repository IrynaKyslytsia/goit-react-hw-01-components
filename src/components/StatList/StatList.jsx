import PropTypes from 'prop-types';
import { StatItem } from 'components/StatItem/StatItem';
import css from './StatList.module.css';

export const StatList = ({ stats }) => {
    return (
    <ul className={css.stat_list}>
    {stats.map(({ id, label, percentage }) => (
    <li key={id}>
      <StatItem
      label = {label}
      percentage = {percentage} 
      />
    </li>
    ))}    
  </ul>)
}

StatList.propTypes = {
  stats: PropTypes.array
};