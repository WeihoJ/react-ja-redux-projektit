import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Async from '../Async';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('odota 0.5s', async () => {
    const { getByTestId, getByText } = render(<Async />);

    fireEvent.click(getByTestId('nappi-ylos'));

    const laskuri = await waitFor(() => getByText('1'));

    expect(laskuri).toHaveTextContent('1');
});
