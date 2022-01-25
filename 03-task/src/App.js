import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [lkm, asetaLkm] = useState(0);
  return (
    <div>
      <p>Olet painanut {lkm} kertaa</p>
      <button onClick={() => asetaLkm(lkm + 1)}>Lisää</button>
      <button onClick={() => asetaLkm(lkm - 1)}>Vähennä</button>
      <button onClick={() => asetaLkm(0)}>Nollaa</button>
    </div>
  );
}


export default App;