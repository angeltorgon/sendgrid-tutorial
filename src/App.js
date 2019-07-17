import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" onChange={changeHandler()} name="" value="" />
        <input type="text" onChange={changeHandler()} name="" value="" />
        <input type="text" onChange={changeHandler()} name="" value="" />
        <input type="text" onChange={changeHandler()} name="" value="" />
      </form>
    </div>
  );
}

export default App;
