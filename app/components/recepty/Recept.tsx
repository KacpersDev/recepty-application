interface Recept {
    id: string,
    name: string,
    stars: number,
    time: number,
}

const Recept = (props: Recept) => {

    const {id, name, stars, time} = props;

    return(
        <div className="text-black">
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Stars: {stars}</p>
            <p>Time: {time}</p>
        </div>
    )
}

export default Recept;