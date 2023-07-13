import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('renders header with navigation links', () => {
  render(
    <Router basename="/">
      <Header />
    </Router>
  );

  const logoElement = screen.getByText(/LOGO/i);
  expect(logoElement).toBeInTheDocument();

  const pages = ['PROGRAM', 'MOVIE', 'BIDDER', 'CAMPAIGN', 'SHOP'];
  pages.forEach((page) => {
    const pageElements = screen.getAllByText(page);
    expect(pageElements.length).toBe(2);
    expect(pageElements[0]).toBeInTheDocument();
  });
});
