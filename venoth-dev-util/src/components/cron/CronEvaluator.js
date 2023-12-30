import React, { useState } from 'react';
import cronParser from 'cron-parser';

const CronEvaluator = () => {
    
  const [cronExpression, setCronExpression] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setCronExpression(value);
  };

  const handleEvaluateClick = () => {
    try {
      cronParser.parseExpression(cronExpression);
      setIsValid(true);
    } catch (error) {
      console.error(`Invalid cron expression: ${error.message}`);
      setIsValid(false);
    }
  };

  return (
    <div>
      <h2>Cron Expression Validator</h2>
      <label>
        Enter Cron Expression:
        <input type="text" value={cronExpression} onChange={handleInputChange} />
      </label>
      <button onClick={handleEvaluateClick}>Evaluate</button>

      {isValid !== null && (
        <div>
          {isValid ? (
            <p>The cron expression "{cronExpression}" is valid.</p>
          ) : (
            <p>The cron expression "{cronExpression}" is invalid.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CronEvaluator;
