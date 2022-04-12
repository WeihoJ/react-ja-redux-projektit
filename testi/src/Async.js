import React from 'react';

const Async = () => {
    const [laskuri, setLaskuri] = React.useState(0);

    const viivyta = () => {
        setTimeout(() => {
            setLaskuri(laskuri + 1);
        }, 500);
    };

    return (
        <>
            <h1 data-testid="laskuri">{laskuri}</h1>
            <button data-testid="nappi-ylos" onClick={viivyta}>
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

export default Async;
