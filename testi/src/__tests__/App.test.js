import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('pitäis tehdä snapshot', () => {
    const { asFragment } = render(<App />);

    expect(asFragment(<App />)).toMatchSnapshot();
});
