import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';

describe('NavBar', () => {
  test('renders logo and links', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    expect(screen.getByText('BlogApp')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-links')).toBeInTheDocument();
  });

  test('toggles mobile menu', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );

    const hamburger = screen.getByTestId('hamburger');
    fireEvent.click(hamburger);
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();

    fireEvent.click(hamburger);
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument();
  });
});
