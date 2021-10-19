import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { POKEMONS } from './constants';

test('renders pokemon', () => {
  render(<App />);
  const pokemon = screen.getByText(POKEMONS[0]);
  expect(pokemon).toBeInTheDocument();
});
