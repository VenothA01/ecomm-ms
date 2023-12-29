import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import BasicList from '../SideMenu'
import WelcomeMessage from '../Homepage';
import './container.css'

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container id='main' maxWidth='100vw'>
        <BasicList />
        <WelcomeMessage />
      </Container>
    </React.Fragment>
  );
}