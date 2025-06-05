import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteButton from '../components/DeleteButton/DeleteButton';

describe('DeleteButton', () => {
  test('renders button and handles click', () => {
    const onClick = jest.fn();
    render(<DeleteButton onClick={onClick} />);
    const btn = screen.getByRole('button', { name: /delete/i });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
