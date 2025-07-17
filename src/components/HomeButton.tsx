import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const HomeButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button
      style={{
        position: 'absolute',
        top: '2rem',
        right: '2rem',
        padding: '0.8rem 2rem',
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        zIndex: 1000,
      }}
      onClick={() => navigate('/')}
      aria-label="Home"
    >
      <AiOutlineHome size={28} />
    </button>
  );
};

export default HomeButton; 