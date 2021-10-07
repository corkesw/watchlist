function Adder () {
    return <section className="adder">
        <form className="adder__form">
            <label className="adder__label" htmlFor="addItem">Add item:</label>
            <input className="adder__input" type="text" required/>
            <label className="adder__label" htmlFor="tv">TV</label>
            <input type="radio" name="format" id="tv"/>
            <label className="adder__label" htmlFor="film">Film</label>
            <input type="radio" name="format" id="film"/>
            <button className="adder__button" type="button">Add</button>
        </form>
    </section>
}

export default Adder