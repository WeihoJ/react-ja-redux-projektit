import React, { useState } from "react";

let index = 0;

const Anecdote = () => {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
    ]

    const [activeAnecdote, setActiveAnecdote] = useState(anecdotes[index]);

    // function pickAnecdote() {
    //     setActiveAnecdote(anecdotes[Math.floor(Math.random() * anecdotes.length)])
    //     console.log(pickAnecdote())
    // }

    function nextAnecdote() {
        if (index >= anecdotes.length - 1) {
            index = 0;
        } else {
            index = index + 1;
        }
        setActiveAnecdote(anecdotes[index])
    }

    return (
        <div>
            <p>{activeAnecdote}</p>
            <div>
                <button onClick={nextAnecdote}>Seuraava anekdootti</button>
            </div>
        </div>
    )
};

export default Anecdote;