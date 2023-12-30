import React from 'react';
import Container from '@mui/material/Container';
import BasicList from '../SideMenu';
import '../container/Container'
import '../../components/Home/home.css'

export default function WelcomeMessage(){

  return (
    <div>
    <Container id='main' maxWidth='100vw'>
    <BasicList />
    <div className='welcomeText'>
    <p>
    <h1>Welcome to Utils For Developers</h1>
        
        A collection of utilities to help engineers deal with common tasks such as
        formatting JSON, identifying or understanding crontab expression, or making
        test HTTP(S) requests.
      
        If you have any suggestions for new tools to add, please reach out to me on{' '}
        <a href="https://www.linkedin.com/in/venotha01/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        </p>
    </div>
    </Container>
    </div>);
};

