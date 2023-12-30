import React from 'react';
import { Container } from '@mui/material';
import BasicList from '../SideMenu';

const InProgressMessage = () => {
  return (
    <div>
    <Container id='main' maxWidth='100vw'></Container>
    <BasicList />
    <div style={styles.container}>
      <p style={styles.message}>Development in Progress</p>
      <p style={styles.subMessage}>This page/component is not completed yet. Implementation is in progress.</p>
    </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '10%',
    display: 'flex',
    'align-items': 'top',
    'justify-content': 'top',
    height: '100vh',
    'text-align': 'center',
  },
  message: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subMessage: {
    fontSize: '14px',
    color: '#888',
  },
};

export default InProgressMessage;
