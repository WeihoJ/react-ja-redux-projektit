const note = (props) => {
    return (
        <section>
            <li>{props.note.name}, puh. {props.note.number}</li>
        </section>
    )
};

export default note;