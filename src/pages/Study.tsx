// Study page for selecting a category and studying flashcards
import React, { useState } from 'react';
import CategorySelection from './CategorySelection';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';
import HomeButton from '../components/HomeButton';

const Study: React.FC = () => {
  // State for the selected category
  const [category, setCategory] = useState<string | null>(null);
  // State for the current card index
  const [current, setCurrent] = useState(0);

  // Show category selection if no category is chosen
  if (!category) {
    return <CategorySelection onSelectCategory={setCategory} />;
  }

  // Filter cards by selected category
  const cards = flashcards.filter((c) => c.category === category);
  if (cards.length === 0) {
    return <div>Keine Karten in dieser Kategorie.</div>;
  }

  // Go to next card
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  // Go back to category selection
  const handleBack = () => {
    setCategory(null);
    setCurrent(0);
  };

  return (
    <div className="study-container">
      <HomeButton />
      <h2>Study Mode: {category}</h2>
      <div className="study-progress">
        Karte {current + 1} von {cards.length}
      </div>
      <Flashcard
        spanish={cards[current].spanish}
        english={cards[current].english}
        resetTrigger={current}
      />
      <div className="study-controls">
        <button onClick={handleNext} className="study-button">Nächste Karte</button>
        <button onClick={handleBack} className="study-button">Zurück zur Kategorieauswahl</button>
      </div>
    </div>
  );
};

export default Study; 