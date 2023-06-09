import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
    return <div>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    
    <Statistics 
    title={data.title} 
    stats={data}
    label={data.label}
    percentage={data.percentage} 
    />

    <FriendList
    friends={friends} 
    />

    <TransactionHistory 
    items={transactions} 
    />

  </div>
};