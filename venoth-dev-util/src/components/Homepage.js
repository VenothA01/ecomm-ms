import React from 'react';

export default function WelcomeMessage(){

  return (
    <div>
      <h1>Welcome to Utils For Devs</h1>
      <p>
        A collection of utilities to help engineers deal with common tasks such as
        formatting JSON, identifying or understanding crontab expression, or making
        test HTTP(S) requests.
      </p>
      <p>
        This is a work in progress, built using React, NextJS, and Typescript (and
        styled with MUI), primarily as a way of learning how to use them on a
        real-world project.
      </p>
      <p>
        If you have any suggestions for new tools to add, please reach out to me on{' '}
        <a href="https://www.linkedin.com/in/venotha01/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
};

