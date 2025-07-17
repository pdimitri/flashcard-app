import React, { useState } from 'react';
import CategorySelection from './CategorySelection';
import { flashcards } from '../data/flashcards';
import Flashcard from '../components/Flashcard';
import HomeButton from '../components/HomeButton';

const Study: React.FC = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);

  if (!category) {
    return <CategorySelection onSelectCategory={setCategory} />;
  }

  const cards = flashcards.filter((c) => c.category === category);
  if (cards.length === 0) {
    return <div>Keine Karten in dieser Kategorie.</div>;
  }

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const handleBack = () => {
    setCategory(null);
    setCurrent(0);
  };

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
      <h2>Study Mode: {category}</h2>
      <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
        Karte {current + 1} von {cards.length}
      </div>
      <Flashcard
        spanish={cards[current].spanish}
        english={cards[current].english}
        resetTrigger={current}
      />
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
        <button onClick={handleNext} style={{ padding: '0.8rem 2rem' }}>Nächste Karte</button>
        <button onClick={handleBack} style={{ padding: '0.8rem 2rem' }}>Zurück zur Kategorieauswahl</button>
      </div>
    </div>
  );
};

export default Study; 