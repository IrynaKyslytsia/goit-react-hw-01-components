import PropTypes from 'prop-types';
import { StatItem } from 'components/StatItem/StatItem';

export const StatList = ({ stats }) => {
  console.log(stats)
    return (
    <ul className="stat-list">
    {stats.map(({ id, label, percentage }) => (
    <li key={id}
    className="item">
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