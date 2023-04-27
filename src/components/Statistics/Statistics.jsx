// import PropTypes from 'prop-types';
import data from '../../../src/data.json';
import { Title } from 'components/Title/Title';
import { StatList } from 'components/StatList/StatList';
import css from './Statistics.module.css';

export const Statistics = (title, stats) => {
    return <section className={css.statistic}>
    <Title
    title = ""
     />
    <StatList
    stats = {data} />
    </section>
};
