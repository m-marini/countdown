import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
  const app = render((<App />));
  const { getByText } = app;
  const linkElement = getByText(/Countdown/i);
  expect(linkElement).toBeInTheDocument();
});
