import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <AngryButton />
      <CounterButton />
      <LightSwitchButton light={light} setLight={setLight} />
      <TextRepeaterButton />
    </div>
  );
}
export default App;
