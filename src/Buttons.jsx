import { useState } from 'react';

export default function Buttons() {

    const [count, setCount] = useState(0);
    console.log("Klik aku yang ke", count);
    return (
        <>
            <h1>Buttons Kurang Tambah {count}</h1>
            <button onClick={() => setCount(count-1)}>Klik untuk - ({count})</button>
            <button onClick={() => setCount(count + 1)}>Klik untuk + ({count})</button>
        </>
    )
}