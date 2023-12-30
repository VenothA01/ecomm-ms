import React from 'react';
import { Container } from '@mui/material';
import BasicList from '../SideMenu';
import '../../components/Home/home.css'

const InProgressMessage = () => {
  return (
    <div>
    <Container id='main' maxWidth='100vw'>
    <BasicList />
    <div className='welcomeText'>
    <p>
    <h1>Development in Progress</h1>
    This page/component is not completed yet. Implementation is in progress.
    </p>
    </div>
    </Container>
    </div>
  );
};

export default InProgressMessage;