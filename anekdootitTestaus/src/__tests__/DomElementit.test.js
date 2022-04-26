import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Anecdote from '../components/Anecdote';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('pitäisi olla 0', () => {
    const { getByTestId } = render(<Anecdote />);
    expect(getByTestId('nappiJuttu')).toHaveTextContent('Otherwise press "Next Anecdote"');
});

it('pitäisi olla 0', () => {
    const { getByTestId } = render(<Anecdote />);
    expect(getByTestId('nappiJuttu2')).toHaveTextContent('Choose random Anecdote');
});