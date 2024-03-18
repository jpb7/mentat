import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TitleBar from './TitleBar';

describe('TitleBar Component', () => {
  it('renders the title prop correctly', () => {
    const testTitle = 'Test Title';
    render(<TitleBar title={testTitle} />);

    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('title');
  });
});
