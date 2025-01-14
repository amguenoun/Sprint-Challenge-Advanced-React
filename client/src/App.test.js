import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);
})

test('App contains a header', () => {
  const { getByText } = render(<App />);
  getByText(/world cup player/i)
})

test('Alex Morgan should show up', async () => {
  const { findByText } = await render(<App />)
  findByText(/alex morgan/i)
})