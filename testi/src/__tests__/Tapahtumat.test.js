import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Tapahtumat from '../Tapahtumat';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('lisäys onnistuu', () => {
    const { getByTestId } = render(<Tapahtumat />);

    fireEvent.click(getByTestId('nappi-ylos'));

    expect(getByTestId('laskuri')).toHaveTextContent('1');
});

it('vähennys onnistuu', () => {
    const { getByTestId } = render(<Tapahtumat />);

    fireEvent.click(getByTestId('nappi-alas'));

    expect(getByTestId('laskuri')).toHaveTextContent('-1');
});
