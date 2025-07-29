import Image from "next/image"
import ReceptIcon from "@/app/assets/images/recept-icon.png";

interface Recept {
    id: string,
    name: string,
    stars: number,
    time: number,
}

const renderStars = (stars: number) => {
    if (stars === 0 || stars === 5) {
        return <p className={stars === 0 ? "text-slate-400" : "text-[#ff00ff]"}>★★★★★</p>
    }
    return (
        <p className="text-[#ff00ff]">{"★".repeat(stars)}
            <span className="text-slate-400">{"★".repeat(5 - stars)}</span>
        </p>
    );
}

const Recept = (props: Recept) => {

    const {id, name, stars, time} = props;

    return(
        <div className="font-poppins">
           <div className="flex justify-center space-x-[100px] mt-[25px]">
                <div>
                    <Image className="w-[120px] rounded-xl" src={ReceptIcon} alt="recept-icon"/>
                </div>
                <div>
                    <p className="text-[#0000ff] font-poppins_bold text-[25px]">{name}</p>
                    {renderStars(stars)}
                    <p className="mt-[5px] text-[20px]">🕔 {time} min.</p>
                </div>
            </div>
            <div className="ml-auto mr-auto bg-slate-200 w-[500px] h-[1px] mt-[25px]"/>
        </div>
    )
}

export default Recept;