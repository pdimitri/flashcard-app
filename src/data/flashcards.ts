export type Flashcard = {
  category: 'animals' | 'food' | 'verbs';
  spanish: string;
  english: string;
  quiz: {
    type: 'multiple-choice';
    options: string[];
  };
};

export const flashcards: Flashcard[] = [
  // Tiere
  {
    category: 'animals',
    spanish: 'el gato',
    english: 'the cat',
    quiz: {
      type: 'multiple-choice',
      options: ['the dog', 'the house', 'the cat', 'the bird'],
    },
  },
  {
    category: 'animals',
    spanish: 'el perro',
    english: 'the dog',
    quiz: {
      type: 'multiple-choice',
      options: ['the cat', 'the dog', 'the fish', 'the cow'],
    },
  },
  {
    category: 'animals',
    spanish: 'el pájaro',
    english: 'the bird',
    quiz: {
      type: 'multiple-choice',
      options: ['the bird', 'the horse', 'the apple', 'the fish'],
    },
  },
  // Essen
  {
    category: 'food',
    spanish: 'la manzana',
    english: 'the apple',
    quiz: {
      type: 'multiple-choice',
      options: ['the apple', 'the bread', 'the cheese', 'the egg'],
    },
  },
  {
    category: 'food',
    spanish: 'el pan',
    english: 'the bread',
    quiz: {
      type: 'multiple-choice',
      options: ['the bread', 'the milk', 'the chicken', 'the apple'],
    },
  },
  {
    category: 'food',
    spanish: 'el queso',
    english: 'the cheese',
    quiz: {
      type: 'multiple-choice',
      options: ['the cheese', 'the egg', 'the fish', 'the bread'],
    },
  },
  // Verben
  {
    category: 'verbs',
    spanish: 'comer',
    english: 'to eat',
    quiz: {
      type: 'multiple-choice',
      options: ['to eat', 'to drink', 'to run', 'to sleep'],
    },
  },
  {
    category: 'verbs',
    spanish: 'beber',
    english: 'to drink',
    quiz: {
      type: 'multiple-choice',
      options: ['to drink', 'to eat', 'to write', 'to read'],
    },
  },
  {
    category: 'verbs',
    spanish: 'correr',
    english: 'to run',
    quiz: {
      type: 'multiple-choice',
      options: ['to run', 'to jump', 'to sleep', 'to eat'],
    },
  },
]; 