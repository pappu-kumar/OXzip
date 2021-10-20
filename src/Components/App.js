import React, { useState } from 'react';
import Header from './Header';
import Infobox from './Infobox';
import Workarea from './Workarea';

const App = () => {
  const [route, setRoute] = useState('work');
  console.log(route);
  return (
    <div className='container'>
      <Header route={setRoute} />
      {route === 'work' ? <Workarea /> : <Infobox />}
    </div>
  );
};

export default App;
