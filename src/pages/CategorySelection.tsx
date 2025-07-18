// CategorySelection page for choosing a flashcard category
import React from 'react';
import HomeButton from '../components/HomeButton';
import { FLASHCARD_CATEGORIES, type FlashcardCategory } from '../data/flashcards';

// Mapping from category key to label
const categoryLabels: Record<FlashcardCategory, string> = {
  animals: 'Tiere',
  food: 'Essen',
  verbs: 'Verben',
};

interface Props {
  onSelectCategory?: (category: FlashcardCategory) => void;
}

const CategorySelection: React.FC<Props> = ({ onSelectCategory }) => {
  return (
    <div className="category-container">
      <HomeButton />
      <h2>Kategorie wählen</h2>
      <div className="category-list">
        {FLASHCARD_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className="category-button"
            onClick={() => onSelectCategory?.(cat)}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection; 