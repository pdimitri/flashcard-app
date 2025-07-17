import React, { useState, useEffect } from 'react';

interface FlashcardProps {
  spanish: string;
  english: string;
  resetTrigger?: any;
}

const cardStyle: React.CSSProperties = {
  width: '320px',
  height: '200px',
  perspective: '1000px',
  margin: '2rem auto',
  cursor: 'pointer',
};

const innerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.5s',
  transformStyle: 'preserve-3d',
};

const sideStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  color: '#222',
  borderRadius: '16px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
  fontSize: '2rem',
  backfaceVisibility: 'hidden',
  userSelect: 'none',
};

const backStyle: React.CSSProperties = {
  ...sideStyle,
  background: '#8E92FF',
  color: '#fff',
  transform: 'rotateY(180deg)',
};

const Flashcard: React.FC<FlashcardProps> = ({ spanish, english, resetTrigger }) => {
  const [flipped, setFlipped] = useState(false);
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    setFlipped(false);
    setShowBack(false);
  }, [resetTrigger]);

  useEffect(() => {
    if (flipped) {
      const timeout = setTimeout(() => setShowBack(true), 250);
      return () => clearTimeout(timeout);
    } else {
      setShowBack(false);
    }
  }, [flipped]);

  return (
    <div style={cardStyle} onClick={() => setFlipped((f) => !f)}>
      <div
        style={{
          ...innerStyle,
          transform: flipped ? 'rotateY(180deg)' : 'none',
        }}
      >
        <div style={sideStyle}>{spanish}</div>
        <div style={backStyle}>{showBack ? english : ''}</div>
      </div>
    </div>
  );
};

export default Flashcard; 