import React from 'react';
import HomeButton from '../components/HomeButton';

const categories = [
  { key: 'animals', label: 'Tiere' },
  { key: 'food', label: 'Essen' },
  { key: 'verbs', label: 'Verben' },
];

interface Props {
  onSelectCategory?: (category: string) => void;
}

const CategorySelection: React.FC<Props> = ({ onSelectCategory }) => {
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
      <h2>Kategorie wählen</h2>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}
            onClick={() => onSelectCategory?.(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection; 