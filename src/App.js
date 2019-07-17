import React, { useState } from 'react';
import './App.css';

import axios from "axios";

function App() {

  const [ recipient, setRecipient ] = useState('');
  const [ sender, setSender ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ text, setText ] = useState('');

  const sendEmail = () => {
    const email = {
      recipient,
      sender,
      subject,
      text
    }
    
    axios.post('http://localhost:5000/sendgrid', email)
    .then(res => {console.log(res)})
    .catch(err => console.error(err));

  }

  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault();
        sendEmail();
      }} >
        <input 
          type="text" 
          onChange={e => setRecipient(e.target.value)} 
          name="recipient" 
          placeholder="recipient" 
          value={recipient} />
        <input 
          type="text" 
          onChange={ e => setSender(e.target.value)} 
          name="sender" 
          placeholder="sender" 
          value={sender} />
        <input 
          type="text" 
          onChange={ e => setSubject(e.target.value)} 
          name="subject" 
          placeholder="subject" 
          value={subject} />
        <input 
          type="text" 
          onChange={ e => setText(e.target.value)} 
          name="text" 
          placeholder="text" 
          value={text} />
          <button>Send email</button>
      </form>
    </div>
  );
}

export default App;
