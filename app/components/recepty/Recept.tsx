interface Recepie {
    name: string,
    stars: number,
    time: string,
}

const Recept = (props: Recepie) => {
    const { name, stars, time } = props;

    return(
        <div>
            <p>{name}</p>
            <p>{stars}</p>
            <p>{time}</p>
        </div>
    )
}

export default Recept;