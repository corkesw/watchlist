import { useState } from "react"

function Adder ({setList}) {
    const [newItem, setNewItem] = useState("")
    console.log(newItem)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        setList((currList) => {
            const itemToAdd = {name: newItem, type:"tv"}
            return [...currList, itemToAdd]
        })
        setNewItem("")
    }
    return <section className="adder">
        <form onSubmit={handleSubmit} className="adder__form">
            <label className="adder__label" htmlFor="addItem">Add item:</label>
            <input className="adder__input" type="text" required value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
            <label className="adder__label" htmlFor="tv">TV</label>
            <input type="radio" name="format" id="tv"/>
            <label className="adder__label" htmlFor="film">Film</label>
            <input type="radio" name="format" id="film"/>
            <button className="adder__button" type="submit">Add</button>
        </form>
    </section>
}

export default Adder