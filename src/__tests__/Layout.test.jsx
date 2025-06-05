import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../components/Layout/Layout';

const Sample = () => <div>content</div>;

describe('Layout', () => {
  test('renders children with header and footer', () => {
    render(
      <BrowserRouter>
        <Layout onSearch={() => {}}>
          <Sample />
        </Layout>
      </BrowserRouter>
    );

    expect(screen.getByText('content')).toBeInTheDocument();
    expect(screen.getByText('BlogApp')).toBeInTheDocument();
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
  });
});
