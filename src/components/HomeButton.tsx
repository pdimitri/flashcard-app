// HomeButton component for navigating to the home page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const HomeButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button
      className="home-button"
      onClick={() => navigate('/')}
      aria-label="Home"
    >
      <AiOutlineHome size={28} />
    </button>
  );
};

export default HomeButton; 