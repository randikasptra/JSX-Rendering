import {useState} from "react"


export default function Coba() {

    const [count, setCount] = useState(0);

    function Ternarywell(){
        console.log("Ini Ternary ya");
        return(count <=  10) ?  'Like kurang dari 10' : 'Mantap ! Like lebih dari 10';
    }
    let tampilPesan = Ternarywell();

    const StyleFood = {
        marginTop: "2rem",
        backgroundColor: "lightblue",
        padding: "10px",
        borderRadius: "10px",
        color: "black",
    }
    const StyleUS = {
        marginTop: "2rem",
        backgroundColor: "salmon",
        padding: "10px",
        borderRadius: "10px",
        color: "black",
    }
    return (
        <>
            <div style={StyleFood}>
                <h1>Menu Resto MouraFOOD</h1>
                <ul>
                    <li>Nasi Padang</li>
                    <li>Nasi Goreng</li>
                </ul>
            </div>

            <div className="" style={StyleUS}>
                <button onClick={() => setCount(count + 1)}>Click me {count}</button>
            </div>
            <div style={StyleFood}>
                {tampilPesan}
            </div>
        </>
    )
}