import { Dispatch, SetStateAction } from "react";

interface Props {
    stars: number;
    star: number;
    setStars: Dispatch<SetStateAction<number>>;
    permStars: number;
    setPermStars: Dispatch<SetStateAction<number>>;
    id: string;
}

const Star = (props: Props) => {

    const { stars, star, setStars, permStars, setPermStars, id } = props;

    const handleRate = async () => {
        await fetch(`https://private-anon-96e21c7737-cookbook3.apiary-mock.com/api/v1/recipes/${id}/ratings`, {
            method: "POST",
            body: JSON.stringify({"score": permStars}),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    if (permStars === 0) {
        return(
            <p className={`text-white text-center text-[50px] hover:cursor-pointer ${star > stars ? "opacity-30" : "opacity-100"}`}
                onMouseEnter={() => setStars(star)} onMouseOut={() => setStars(0)} onClick={() => {
                    setPermStars(star);
                    handleRate();
                }}>★</p>
        )
    }
}

export default Star;