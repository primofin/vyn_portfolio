import React, {useState, useEffect} from 'react';
import PageContainer from './pages/PageContainer';
const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/vynmetropolia')
        .then((res) => res.json())
        .then((user) => {
          setUser(user);
        });
  }, []);
  if (!user) {
    return <div />;
  }
  return <PageContainer user={user} />;
};

export default App;

