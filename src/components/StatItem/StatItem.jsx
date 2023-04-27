import PropTypes from 'prop-types';

export const StatItem = ({ label, percentage }) => {
    return (<div>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </div>)
};

StatItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};