import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmationDialog from '../components/ConfirmationDialog/ConfirmationDialog';

describe('ConfirmationDialog', () => {
  const setup = (props) =>
    render(
      <ConfirmationDialog isOpen={true} onClose={props.onClose} onConfirm={props.onConfirm} />
    );

  test('renders when open', () => {
    setup({ onClose: jest.fn(), onConfirm: jest.fn() });
    expect(screen.getByText(/Are you sure/i)).toBeInTheDocument();
  });

  test('calls onConfirm when delete clicked', () => {
    const onConfirm = jest.fn();
    setup({ onClose: jest.fn(), onConfirm });
    fireEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when cancel clicked', () => {
    const onClose = jest.fn();
    setup({ onClose, onConfirm: jest.fn() });
    fireEvent.click(screen.getByRole('button', { name: /cancel/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when clicking overlay', () => {
    const onClose = jest.fn();
    render(
      <ConfirmationDialog isOpen={true} onClose={onClose} onConfirm={jest.fn()} />
    );
    fireEvent.mouseDown(screen.getByRole('dialog').parentElement);
    fireEvent.click(screen.getByRole('dialog').parentElement);
    expect(onClose).toHaveBeenCalled();
  });

  test('calls onClose on Escape key', () => {
    const onClose = jest.fn();
    render(
      <ConfirmationDialog isOpen={true} onClose={onClose} onConfirm={jest.fn()} />
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  test('returns null when not open', () => {
    const { container } = render(
      <ConfirmationDialog isOpen={false} onClose={jest.fn()} onConfirm={jest.fn()} />
    );
    expect(container.firstChild).toBeNull();
  });
});
