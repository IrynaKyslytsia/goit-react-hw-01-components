import PropTypes from 'prop-types';
import css from './StatItem.module.css';

export const StatItem = ({ label, percentage }) => {
    return (<div className={css.item}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </div>)
};

StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};