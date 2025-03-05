export default function TernaryOP(){
    const isMakanan = true;
    const styleTO = {
        marginTop: "2rem",
        backgroundColor: "salmon",
        padding: "10px",
        borderRadius: "10px",
        color: "aliceblue",
    }


    
    return (
        <div style={styleTO}>
            {(isMakanan == true) ? ("Ini Makanan") : ("Ini Minuman")}
        </div>
    )
}