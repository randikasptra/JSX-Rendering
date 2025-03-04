import { useState } from "react";


function UseState() {
    const [count, setCount] = useState();

    function eventHandler() {
        setCount(count + 1);
        console.log("Klik aku yang ke", count);
    }

    let newCount = count + 1; 
    return (
        <>
            <h1>WEB Klik Tombol yang ke - {newCount}</h1>
            <button onClick={() => {eventHandler}}>Ini tombol ke - {newCount} </button>
        </>

    )
}

export default UseState;