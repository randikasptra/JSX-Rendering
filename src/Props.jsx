// export default function Prop(Props) {
//     return (
//         <>
//             <h3>Hari : {Props.hari}</h3>
//             <h3>Mood : {Props.mood}</h3>
//             <h3>Bulan : {Props.bulan}</h3>


//         </>
//     )
// }

export default function Prop({hari, mood, bulan}) {
    return (
        <>
            <h3>Hari : {hari}</h3>
            <h3>Mood : {mood}</h3>
            <h3>Bulan : {bulan}</h3>
        </>

    )
}