import React, { useState } from 'react';
import { Container } from '@mui/material';
import BasicList from '../SideMenu';
import '../../components/Home/home.css'
import cronstrue from 'cronstrue'; 

const CronExpressionGenerator = () => {
  const [cronExpression, setCronExpression] = useState('*/2 * * * *');
  const [evaluatedResult, setEvaluatedResult] = useState('Every 2 minutes');

  const handleInputChange = (e) => {
    const inputCronExpression = e.target.value;
    setCronExpression(inputCronExpression);

    try {
      const result = cronstrue.toString(inputCronExpression);
      setEvaluatedResult(result);
    } catch (error) {
      // Handle invalid cron expression
      setEvaluatedResult('Invalid cron expression');
    }
  };

  return (
    <div>
    <Container id='main' maxWidth='100vw'>
    <BasicList />
      <div>
        <label>Cron Expression:</label>
        <input
          type="text"
          value={cronExpression}
          onChange={handleInputChange}
          placeholder="Enter cron expression"
        />
      
        <label>Evaluated Result:</label>
        <p>{evaluatedResult}</p>
      </div>
    </Container>
    </div>
  );
};

export default CronExpressionGenerator;
