import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CommentForm from '../components/CommentForm/CommentForm';

describe('CommentForm', () => {
  test('renders fields and submits comment', () => {
    const onSubmit = jest.fn();
    render(<CommentForm onSubmit={onSubmit} />);
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/Comment/i), {
      target: { value: 'Nice post' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'John', text: 'Nice post' })
    );
  });

  test('pre-fills name when logged in', () => {
    render(<CommentForm onSubmit={jest.fn()} isLoggedIn userName="Alice" />);
    const nameInput = screen.getByLabelText(/Name/i);
    expect(nameInput).toHaveValue('Alice');
    expect(nameInput).toBeDisabled();
  });
});
