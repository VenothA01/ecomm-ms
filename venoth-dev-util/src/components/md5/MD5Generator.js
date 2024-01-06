import React, { useState } from 'react';
import { Container } from '@mui/material';
import { MD5 } from 'crypto-js';
import BasicList from '../SideMenu';
import '../../components/cron/CronGenerator.css'

const MD5HashGenerator = () => {
  
    const [inputText, setInputText] = useState('');
    const [hashResult, setHashResult] = useState('');
  
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };
  
    const generateHash = () => {
      if (inputText.trim() !== '') {
        const hash = MD5(inputText).toString();
        setHashResult(hash);
      } else {
        setHashResult('Please enter text to generate hash.');
      }
    };
  


  return (
    <div>
    <Container id='main' maxWidth='100vw'>
    <BasicList />
      <div id="cron-component">
        <center>
           <h1> MD5 Hash generator</h1>
        </center>
       
      <label>
        Enter text:
        <input type="text" value={inputText} onChange={handleInputChange} />
      </label>
      <button onClick={generateHash}>Generate MD5 Hash</button>
      <div>
        <strong>MD5 Hash:</strong> {hashResult}
      </div>
      </div>
    </Container>
    </div>
  );
};

export default MD5HashGenerator;
