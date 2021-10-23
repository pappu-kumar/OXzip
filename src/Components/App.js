import React, { useState } from 'react';
import Header from './Header';
import Infobox from './Infobox';
import Workarea from './Workarea';

const App = () => {
  const [route, setRoute] = useState('work');
  const [theme, setTheme] = useState('light');

  const handleRoute = (newValue) => {
    setRoute(newValue);
  };

  const handleTheme = (newValue) => {
    setTheme(newValue);
  };
  return (
    <div className='container'>
      <Header
        route={route}
        change={handleRoute}
        theme={theme}
        changeTheme={handleTheme}
      />
      {route === 'work' ? (
        <Workarea theme={theme} />
      ) : (
        <Infobox theme={theme} />
      )}
    </div>
  );
};

export default App;
