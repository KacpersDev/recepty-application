import { useState } from "react";
import Star from "./Star";

interface ViewProps {
    id: string;
}

const Rate = (props: ViewProps) => {

    const [stars, setStars] = useState(0);
    const [permStars, setPermStars] = useState(0);

    const StarsView = () => {

        const { id } = props;

        return (
            <div className="flex justify-center">
                <Star stars={stars} star={1} setStars={setStars} permStars={permStars} setPermStars={setPermStars} id={id}/>
                <Star stars={stars} star={2} setStars={setStars} permStars={permStars} setPermStars={setPermStars} id={id}/>
                <Star stars={stars} star={3} setStars={setStars} permStars={permStars} setPermStars={setPermStars} id={id}/>
                <Star stars={stars} star={4} setStars={setStars} permStars={permStars} setPermStars={setPermStars} id={id}/>
                <Star stars={stars} star={5} setStars={setStars} permStars={permStars} setPermStars={setPermStars} id={id}/>
            </div>
        )
    }

    const FixStars = () => {
        const left = 5 - stars;

        if (left === 0) {
            return(
                <p className="text-white text-center text-[50px]">{"★".repeat(5)}</p>
            )   
        } else {
            return(
                <p className="text-white text-center text-[50px]">{"★".repeat(stars)} 
                <span className="opacity-30">{"★".repeat(left)}</span></p>
            )
        }
    }

    return(
        <div className="bg-[#0000ff] mt-[100px] h-[200px]">
            <p className="text-center text-white font-poppins_bold text-[25px] pt-[45px]">Ohodnot tento recept</p>
            {permStars === 0 ? <StarsView/> : <FixStars />}
        </div>
    )
}

export default Rate;