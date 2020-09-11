import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const app = render(<App />);
  const { getByText } = app;
  //const linkElement = getByText(/Conto alla rovescia/i);
  const linkElement = getByText(/Countdown 1.0.1/i);
  expect(linkElement).toBeInTheDocument();
});
