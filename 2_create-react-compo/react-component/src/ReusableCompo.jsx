function ReuseableItem() {

    let number = Math.random() * 100;
    return <div>
        <h1>Item is: {Math.round (number)}</h1>
    </div>
}

export default ReuseableItem;