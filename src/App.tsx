import React from 'react';
import Dashboard from './components/Dashboard';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  );
};

export default App;
