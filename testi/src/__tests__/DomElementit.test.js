import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DomElementit from '../DomElementit';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('pitäisi olla 0', () => {
    const { getByTestId } = render(<DomElementit />);
    expect(getByTestId('laskuri')).toHaveTextContent(0);
});

it('pitäisi olla enabled', () => {
    const { getByTestId } = render(<DomElementit />);
    expect(getByTestId('nappi-ylos')).not.toHaveAttribute('disabled');
});

it('pitaisi olla disabled', () => {
    const { getByTestId } = render(<DomElementit />);
    expect(getByTestId('nappi-alas')).toBeDisabled();
});
