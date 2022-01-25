import "./Form.css";
import View from "./View";

const Form = () => {
    return (
        <section className="Form">
            <p>Tämä on formin sisältö!</p>
            <h2>Lisätään tähän alapuolella lomakekentät</h2>
            <form>
                <div className="mb-3">
                    <label for="firstname" className="form-label">First name:</label>
                    <input id="firstname" type="text" className="form-control" aria-describedby="firstname"/>
                </div>
                <div className="mb-3">
                    <label for="lastname" className="form-label">Last name:</label>
                    <input id="lastname" type="text" className="form-control" aria-describedby="lastname"/>
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone:</label>
                    <input id="phone" type="text" className="form-control" aria-describedby="phone"/>
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Message:</label>
                    <input id="message" type="text" className="form-control" aria-describedby="message"/>
                </div>
            </form>
            <h2>Kutsutaan komponentista Form komponenttia View</h2>
        </section>
    )
}

export default Form;