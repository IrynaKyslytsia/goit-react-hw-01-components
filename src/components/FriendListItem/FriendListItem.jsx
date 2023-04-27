import PropTypes from 'prop-types';
import friends from 'friends.json';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className="item">
            <span className="status">{isOnline}</span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>
    ))
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}