import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentList from '../components/CommentList/CommentList';

const comments = [
  { name: 'A', date: '2023-01-01T00:00:00Z', text: 'First' },
  { name: 'B', date: '2023-01-02T00:00:00Z', text: 'Second' },
];

describe('CommentList', () => {
  test('renders list of comments', () => {
    render(<CommentList comments={comments} />);
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
});
