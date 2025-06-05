import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar/SearchBar';

describe('SearchBar', () => {
  test('calls onSearch when input changes', () => {
    const onSearch = jest.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByPlaceholderText(/search posts/i);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onSearch).toHaveBeenCalledWith('test');
  });
});
