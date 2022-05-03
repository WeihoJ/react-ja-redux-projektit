import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';

const App = (props) => {
    const [persons, setPersons] = useState([props.persons]);
    const [newPerson, setNewPerson] = useState('');

    const handlePersonChange = (event) => {};

    const addPerson = (event) => {};

    return (
        <div>
            
        </div>
    );
};

export default App;
