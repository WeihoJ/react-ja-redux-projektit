import React from 'react';

const Tapahtumat = () => {
    const [laskuri, setLaskuri] = React.useState(0);

    return (
        <>
            <h1 data-testid="laskuri">{laskuri}</h1>
            <button
                data-testid="nappi-ylos"
                onClick={() => setLaskuri(laskuri + 1)}
            >
                Ylös
            </button>
            <button
                data-testid="nappi-alas"
                onClick={() => setLaskuri(laskuri - 1)}
            >
                Alas
            </button>
        </>
    );
};

export default Tapahtumat;
