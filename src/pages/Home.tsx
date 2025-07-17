import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}>
      <HomeButton />
      <h1>Willkommen zur Spanisch-Flashcards-App!</h1>
      <div style={{ margin: '2rem 0' }}>
        <button style={{ margin: '0.5rem', padding: '1rem 2rem' }} onClick={() => navigate('/study')}>Study Mode</button>
        <button style={{ margin: '0.5rem', padding: '1rem 2rem' }} onClick={() => navigate('/quiz')}>Quiz Mode</button>
        <button style={{ margin: '0.5rem', padding: '1rem 2rem' }} onClick={() => navigate('/stats')}>Stats Page</button>
      </div>
    </div>
  );
};

export default Home; 