import React from 'react';
import HomeButton from '../components/HomeButton';

const Stats: React.FC = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }}>
    <HomeButton />
    <h2>Statistik</h2>
    <p>Hier werden später die Statistiken angezeigt.</p>
  </div>
);

export default Stats; 