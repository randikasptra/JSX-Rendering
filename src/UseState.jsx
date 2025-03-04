import { useState } from "react";

export default function UseState(){

    const[count,setCount] = useState(0);
    function eventHandler(){
        setCount(prevCount => {
            console.log("Klik aku yang ke -", count);
            return prevCount + 1;
        });
    }
    let jmlCount = 0;
    let klikCount = count + jmlCount;
    
    function eventHandler2(){
        setCount(count - 1);
        console.log("Klik aku yang ke -", count);
    }
    const styleUS = {
        backgroundColor: "lightblue",
        padding: "10px",
        fontFamily: "arial",
    }


    
    return(
        <>
        <h4 style={styleUS}>Ini adalah UseStatement di React Angka ke - {klikCount}</h4>
        <button onClick={eventHandler}>Klik aku untuk tambah - {klikCount}</button>
        <button onClick={eventHandler2}>Klik aku untuk kurang - {klikCount}</button>
        </>
    )
}