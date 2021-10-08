function Lister ({list}) {
    return <section className="Lister">
        <p>{list.map((item) => {
            return item.name
        })}</p>
    </section>
}

export default Lister
