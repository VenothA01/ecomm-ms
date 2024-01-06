import React, { useState } from 'react';

const JsonParserValidator = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [parsedJson, setParsedJson] = useState(null);
  const [validationError, setValidationError] = useState(null);
  const [minifiedJson, setMinifiedJson] = useState('');

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const parseAndValidateJson = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      setParsedJson(parsedData);
      setValidationError(null);
    } catch (error) {
      setParsedJson(null);
      setValidationError('Invalid JSON: ' + error.message);
    }
  };

  const minifyJson = () => {
    try {
      const minifiedData = JSON.stringify(parsedJson);
      setMinifiedJson(minifiedData);
    } catch (error) {
      setMinifiedJson('Unable to minify JSON. Please ensure JSON is valid.');
    }
  };

  const evaluateJsonExpression = () => {
    try {
      // Assuming the JSON expression is a valid JavaScript expression
      const result = eval(`(${jsonInput})`);
      alert('Evaluation Result: ' + result);
    } catch (error) {
      alert('Error evaluating JSON expression: ' + error.message);
    }
  };

  return (
    <div>
      <label>
        Paste JSON here:
        <textarea value={jsonInput} onChange={handleInputChange} rows={5} />
      </label>
      <button onClick={parseAndValidateJson}>Parse and Validate JSON</button>
      <button onClick={minifyJson}>Minify JSON</button>
      <button onClick={evaluateJsonExpression}>Evaluate JSON Expression</button>
      {validationError && <div style={{ color: 'red' }}>{validationError}</div>}
      {parsedJson && (
        <div>
          <strong>Parsed JSON:</strong>
          <pre>{JSON.stringify(parsedJson, null, 2)}</pre>
        </div>
      )}
      {minifiedJson && (
        <div>
          <strong>Minified JSON:</strong>
          <pre>{minifiedJson}</pre>
        </div>
      )}
    </div>
  );
};

export default JsonParserValidator;
