import './App.css';
import Form from './components/Form';
import View from './components/View';


const App = () => {
  return (
    <div className="App">
      <h1>Kutsutaan komponentista App komponenttia Form</h1>
      <Form />
      <View />
    </div>
  );
};

export default App;