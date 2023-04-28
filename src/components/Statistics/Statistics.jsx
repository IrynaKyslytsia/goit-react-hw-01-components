import PropTypes from 'prop-types';
import data from 'data.json';
import css from './Statistics.module.css';

export const Statistics = (title, stats) => {
    return <section className={css.statistics}>
    <h2 className={css.title}>{title.length > 0 && title}</h2>
  
    <ul className={css.stat_list}>
    {data.map(({ id, label, percentage }) => (
        <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>))}    
    </ul>
  </section>
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
