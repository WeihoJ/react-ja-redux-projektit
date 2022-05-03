import './App.css';
import { React, useState } from 'react';
import Note from './components/Note';

const App = (props) => {
    const [persons, setPersons] = useState(props.persons);
    const [newPerson, setNewPerson] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [newFilter, setNewFilter] = useState('');


    const handleNewPersonChange = (event) => {
        setNewPerson(event.target.value);
    }

    const handleNewNumberChange = (event) => {
        setNewNumber(event.target.value);
    }

    const handleNewFilterChange = (event) => {
        setNewFilter(event.target.value);
    }

    const addPerson = (event) => {
        event.preventDefault();
        const personObject = {
            name: newPerson,
            number: newNumber
        }
        const personAlreadyExists = persons.find(person => person.name.toLowerCase() === newPerson.toLowerCase());
        if (personAlreadyExists) {
            alert(`${newPerson} is already added to phonebook`);
            event.preventDefault();
            setNewPerson('');
            setNewNumber('');
        } else {
            setPersons(persons.concat(personObject));
            setNewPerson('');
            setNewNumber('');
        }
    }

    const personsToShow = () => {
        if (newFilter === '') {
            return persons;
        } else {
            return persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()));
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                Filter shown with: <input value={newFilter} onChange={handleNewFilterChange} />
            </div>
            <h2>Add a new contact</h2>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input value={newPerson} onChange={handleNewPersonChange} />
                </div>
                <div>
                    Number: <input value={newNumber} onChange={handleNewNumberChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {personsToShow().map(person =>
                    <Note
                        key={person.id} note={person}
                    />
                )}
            </ul>
        </div>
    );
}

export default App;
