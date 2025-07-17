import React from 'react';
import HomeButton from '../components/HomeButton';

const Quiz: React.FC = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }}>
    <HomeButton />
    <h2>Quiz Mode</h2>
    <p>Hier kommt später der Quizmodus hin.</p>
  </div>
);

export default Quiz; 