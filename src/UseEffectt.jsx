

export default function UseEffectt() {
    const[countLike,setCountLike] = useState(0);
    const[countDislike,setCountDislike] = useState(0);

    useEffect(() => {
        console.log(`Like ${countLike} | Dislike ${countDislike} | SetCount`);
    }, [countLike, countDislike]);

    return (
        <>
        <button onClick={() => setCountLike(countLike + 1)}>Like</button>
        <button onClick={() => setCountDislike(countDislike + 1)}>Dislike</button>
        </>
    )
}