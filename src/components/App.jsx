import user from '../user.json';
import data from '../data.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics'

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
    stats={data} />
  </div>
};