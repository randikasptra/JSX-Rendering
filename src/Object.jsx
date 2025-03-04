export default function Object() {
    const StyleObject = {
        backgroundColor: 'blue',
        padding: '20px',
        borderRadius: '10px',
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    }
    const Menu = [
        'Ayam Bakar 🍗',
        'Nasi Goreng 🍘',
        'Sate 🍖',
    ]
    return (
        <div style={StyleObject}>
            {
                Menu.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item}</h1>
                        </div>
                    )
                })

            }

        </div>
    )
}