import React from 'react';
import Hero from './components/hero';
import Clock from './components/clock';
import WeatherWidget from './containers/weather';
import GiphyWidget from './containers/giphy';
import CodDashboard from './containers/codStats';

function App() {
  return (
    <div>
      <Hero title='Playground Site v1.0' />
      <div className="container">
        <Clock />
        <WeatherWidget />
        <GiphyWidget />
        <CodDashboard/>
      </div>
    </div>
  );
}

export default App;
