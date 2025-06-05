import React from 'react';
import { render, screen } from '@testing-library/react';
import Comment from '../components/Comment/Comment';

describe('Comment', () => {
  test('renders name, formatted date and text', () => {
    const date = '2023-01-01T12:00:00Z';
    const expected = new Date(date).toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    render(
      <Comment name="John" date={date} text="Hello" avatar="avatar.png" />
    );
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText(expected)).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByAltText("John's avatar")).toBeInTheDocument();
  });
});
