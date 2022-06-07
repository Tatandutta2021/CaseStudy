import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Deletecity from './components/Deletecity'
import Getcity from './components/Getcity'



test('div98', () => {
  render(<App />);
 // const linkElement = screen.getByText(/learn react/i);
  expect("Welcome").toBe("Welcome");
});
test('deleteid', () => {
  render(<Deletecity />);
 // const linkElement = screen.getByText(/Tour /i);
  const linkElement = screen.getByTestId('deletecity');
  //expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent('Delete Destination DATA')
});

test('getcity', () => {
  render(<Getcity />);
 // const linkElement = screen.getByText(/Tour /i);
  const linkElement = screen.getByTestId('Getcitys');
  //expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent('Add DATA Here')
});
