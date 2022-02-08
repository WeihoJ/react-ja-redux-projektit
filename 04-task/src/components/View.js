import "./View.css";

const View = (props) => {
    return (
        <section>
            <div className="view-tausta s-teksti view-section">
                <h2>This is your input:</h2>
                <p><span className="viewTeksti">First name: </span><span className="viewKentta">{props.firstName}</span></p>
                <p><span className="viewTeksti">Last name: </span><span className="viewKentta">{props.lastName}</span></p>
                <p><span className="viewTeksti">Phone: </span><span className="viewKentta">{props.phone}</span></p>
                <p><span className="viewTeksti">Message: </span><span className="viewKentta">{props.message}</span></p>
            </div>
        </section>
    )
}

export default View;