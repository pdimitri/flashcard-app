import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const categories = [
  { key: 'animals', label: 'Tiere' },
  { key: 'food', label: 'Essen' },
  { key: 'verbs', label: 'Verben' },
];

interface Props {
  onSelectCategory?: (category: string) => void;
}

const CategorySelection: React.FC<Props> = ({ onSelectCategory }) => {
  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
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
      <button
        style={{ marginTop: '3rem', padding: '0.8rem 2rem', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        onClick={() => navigate('/')}
        aria-label="Home"
      >
        <AiOutlineHome size={28} />
      </button>
    </div>
  );
};

export default CategorySelection; 