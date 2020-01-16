import React from 'react';
import './App.css';
import Slideshow from 'react-slidez'
import { microfrontend } from './talks/microfrontend';

function App() {
  const slides = microfrontend()
  return (
    <div className="App">
      <div className="App-header"><Slideshow
      showArrows
      autoplay={false}
      >{slides}</Slideshow></div>

    </div>
  );
}

export default App;
