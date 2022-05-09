import { React, useState } from 'react';

const Palautekysely = () => {
    const [hyva, setHyva] = useState(0);
    const [kohtalainen, setKotalainen] = useState(0);
    const [huono, setHuono] = useState(0);

    return (
        <div>
            <h1>Opiskelijaravintola pääraide</h1>
            <p>Onko palvelumme ravintolassa ollut mielestäsi</p>
            <p>
                <button onClick={() => setHyva(hyva + 1)}>Hyvä</button>
                <button onClick={() => setKotalainen(kohtalainen + 1)}>
                    Kohtalainen
                </button>
                <button onClick={() => setHuono(huono + 1)}>Huono</button>
            </p>
            <h3>Palautteiden tilastotiedot</h3>

            <p>Hyvä: {hyva}</p>
            <p>Kohtalainen: {kohtalainen}</p>
            <p>Huono: {huono}</p>
            <p>Palautemäärä: {hyva + kohtalainen + huono}</p>
            <p>
                Keskiarvo:{' '}
                {Math.floor(((hyva + kohtalainen + huono) / 3) * 10) / 100}
            </p>
            <p>
                Positiivinen palaute:{' '}
                {Math.floor((hyva / (hyva + kohtalainen + huono)) * 100 * 10) /
                    10}{' '}
                %
            </p>
        </div>
    );
};

export default Palautekysely;
