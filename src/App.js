import React, { useState } from 'react';
import './App.css';

function App() {

  const [ recipient, setRecipient ] = useState('');
  const [ sender, setSender ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ text, setText ] = useState('');

  return (
    <div className="App">
      <form>
        <input type="text" onChange={setRecipient(e.target.value)} name="recipient" value={recipient} />
        <input type="text" onChange={setSender(e.target.value)} name="sender" value={sender} />
        <input type="text" onChange={setSubject(e.target.value)} name="subject" value={subject} />
        <input type="text" onChange={setText(e.target.value)} name="text" value={text} />
      </form>
    </div>
  );
}

export default App;
