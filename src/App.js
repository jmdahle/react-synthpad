import React from 'react';
import { AMSynth } from 'tone';
import './App.css';

const synth = new AMSynth().toMaster();

function App() {
  return (
    <>
      <button onClick={() => synth.triggerAttackRelease('C4','8n')}>Play</button>
    </>
  );
}

export default App;
