// Flashcard component for displaying a Spanish-English card with flip animation
import React, { useState, useEffect } from 'react';

interface FlashcardProps {
  spanish: string;
  english: string;
  // Used to reset the card from parent, e.g. when switching cards
  resetTrigger?: number;
}

const Flashcard: React.FC<FlashcardProps> = ({ spanish, english, resetTrigger }) => {
  // State to track if the card is flipped
  const [flipped, setFlipped] = useState(false);
  // State to delay showing the back side (for animation)
  const [showBack, setShowBack] = useState(false);

  // Reset the card when resetTrigger changes
  useEffect(() => {
    setFlipped(false);
    setShowBack(false);
  }, [resetTrigger]);

  // Show the back side with a delay after flipping
  useEffect(() => {
    if (flipped) {
      const timeout = setTimeout(() => setShowBack(true), 250);
      return () => clearTimeout(timeout);
    } else {
      setShowBack(false);
    }
  }, [flipped]);

  return (
    <div
      className="flashcard"
      onClick={() => setFlipped((f) => !f)}
      aria-label="Flip flashcard"
    >
      <div
        className="flashcard-inner"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}
      >
        <div className="flashcard-side">{spanish}</div>
        <div className="flashcard-side flashcard-back" data-testid="flashcard-back">
          {showBack ? english : ''}
        </div>
      </div>
    </div>
  );
};

export default Flashcard; 