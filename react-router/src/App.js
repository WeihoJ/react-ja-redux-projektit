import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import React, { useState } from 'react';
import Nappi from './Nappi';
import Tulos from './Tulos';

const Tervehdys = (props) => {
  return (
    <div className="laatikko">
      <h3>{props.name}</h3>
      <h4>Title: {props.title}</h4>
      <h4>Age: {props.age}</h4>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Koti</Link>
          </li>
          <li>
            <Link to="/kolteht">Kolmas tehtävä</Link>
          </li>
          <li>
            <Link to="/ekateht">Ensimmäinen tehtävä</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Koti />} />
        <Route path="kolteht/*" element={<Kolmonen />} />
        <Route path="ekateht/*" element={<Eka />} />
      </Routes>

    </BrowserRouter>
  );
}

const Koti = () => {
  return (
    <div>
      <h2>Kotisivu</h2>
      <p>Tämä on kotisivu</p>
    </div>
  );
}

const Kolmonen = () => {
  const [arvo, setArvo] = useState(0)
 
  const aseta = uusiArvo => {
    setArvo(uusiArvo)
  }

  return (
    <div>
      <Tulos arvo={arvo} />
      <Nappi handleClick={() => aseta(arvo + 1)} teksti="+" />
      <Nappi handleClick={() => aseta(arvo - 1)} teksti="-" />
      <Nappi handleClick={() => aseta(0)} teksti="nollaa" />
    </div>
  )
}

const Eka = () => {
  return (
    <div>
      <div className="vierekkain">
        <Tervehdys name="Maria" title="CEO" age="29" />
        <Tervehdys name="Kati" title="Developer" age="25" />
        <Tervehdys name="Karin" title="Designer" age="45" />
      </div>
    </div>
  );
}

const OmaProfiili = () => <p>Oma profiili tiedot</p>;

export default App;