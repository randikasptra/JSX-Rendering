import { useState,useMemo } from "react";


export default function UseMemo() {
    const [countLike, setCountLike] = useState(0);
    const [countSubscribe, setCountSubscribe] = useState(0);

    function pesanLike() {
        console.log("Pesan Terender !");
        return (countLike <= 10) ? 'Like Kurang dari 10' : 'Mantap ! like lebih dari 10';
    }

    const pLike = useMemo(() => pesanLike(), [countLike]);




    return (
        <>
            <button onClick={() => setCountLike(countLike + 1)}>Like 👍 {countLike}</button>
            <p>{pLike}</p>
            <button onClick={() => setCountSubscribe(countSubscribe + 1)}>Subscribe ▶️ {countSubscribe}</button>
            

        </>
    )
}