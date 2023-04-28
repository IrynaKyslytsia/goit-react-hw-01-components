import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from '../../src/transactions.json';
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
    title="" 
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