import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = (friends) => {
    return <ul className="friend-list">
        <FriendListItem
        avatar={friends.avatar}
        name={friends.name}
        isOnline={friends.isOnline} />
  </ul>
};

FriendList.propTypes = {
    friends: PropTypes.array,
}