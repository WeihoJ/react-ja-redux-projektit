import React, { useState } from "react";
import AnecdoteView from "AnecdoteView.js";

let index = 0;

const anecdotes = [
    ['If it hurts, do it more often.', 0],
    ['Adding manpower to a late software project makes it later!', 0],
    ['The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', 0],
    ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 0],
    ['Premature optimization is the root of all evil.', 0],
    ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 0],
    ['Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', 0]
]

const Anecdote = () => {
    const [activeAnecdote, setActiveAnecdote] = useState(anecdotes[index][0]);

    function pickAnecdote() {
        index = Math.floor(Math.random() * anecdotes.length)
        setActiveAnecdote(anecdotes[index][0])
    }

    function voteCurrent() {
        anecdotes[index][1]++;
        console.log(anecdotes[index][0] + '   ====   ' + anecdotes[index][1])
    }

    // function nextAnecdote() {
    //     if (index >= anecdotes.length - 1) {
    //         index = 0;
    //     } else {
    //         index = index + 1;
    //     }
    //     setActiveAnecdote(anecdotes[index])
    // }

    // anecdotes.forEach((anecdote) => {
    //     const votePlace = document.getElementById("anecdoteVotes");
    //     // console.log(anecdote[0])
    //     // div.innerText = anecdote[0]
    //     // votePlace.appendChild(div)
    //     const newDiv = document.createElement("div");
    //     const newContent = document.createTextNode(anecdote[0]);
    //     const newContent2 = document.createTextNode(anecdote[1]);
    //     newDiv.appendChild(newContent);
    //     newDiv.appendChild(newContent2);
    //     document.body.appendChild(newDiv);
    // });

    return (
        <div>
            <div className="anecdote">
                <p>{activeAnecdote}</p>
            </div>
            <div className="anecdoteBtn">
                {/* <button onClick={nextAnecdote}>Seuraava anekdootti</button> */}
                <button onClick={pickAnecdote}>Satunnainen anekdootti</button>
            </div>
            <div className="voteBtn">
                <button onClick={voteCurrent}>Äänestä tätä anekdoottia</button>
            </div>
            <div className="anecdoteVotes" id="anecdoteVotes">
                <AnecdoteView anecdotes={anecdotes}/>
            </div>
        </div>
    )
};

export default Anecdote;