

export default function UseEffectt(){
    const [countLike, setCountLike] = useState(0);
    const[countDisLike,setCountDislike] = useState(0);

    useEffect(() => {
        console.log(`Like ${countLike} | DisLike ${countDisLike} | SetCount`);
    }, [countLike, countDisLike]);

    return(
        <>
        <button onClick={() => setLike(like + 1)}>Like</button>
        <button onClick={() => setDislike(disLike + 1)}>Dislike</button>
        </>
    )

}
