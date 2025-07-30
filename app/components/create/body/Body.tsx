import BodyInput from "./BodyInput";
import {useState, SetStateAction, Dispatch} from "react";

interface BodyProps {
    setName: Dispatch<SetStateAction<string>>,
    setText: Dispatch<SetStateAction<string>>,
    setGuide: Dispatch<SetStateAction<string>>,
    setTime: Dispatch<SetStateAction<string>>,
    map: Map<number, string>,
}

const Body = (props: BodyProps) => {

    const {setName, setText, setGuide, setTime, map} = props;
    const [clicks, setClicks] = useState(1);

    return(
        <div className="mt-[50px] font-poppins">
            <form>
                <BodyInput placeholder="Nazev receptu" onChange={(event) => setName(event.target.value)}/>
                <BodyInput placeholder="Uvodni text" onChange={(event) => setText(event.target.value)}/>
                <div className="grid justify-center">
                    <p className="text-center mr-[650px] mt-[50px] font-poppins_bold text-[#0000ff]">INGREDIENCE</p>
                    <div className="grid justify-center">
                        {[...Array(clicks)].map((_, index) => (
                            <BodyInput key={index} placeholder="Vase Ingredience" onChange={(event) => {
                                map.set(index, event.target.value);
                            }}/>
                        ))}
                    </div>
                    <button className="w-[100px] h-[35px] mt-[35px] border-1 border-[#ff00ff] text-[#ff00ff] rounded-lg font-poppins_bold text-[15px] hover:cursor-pointer hover:opacity-75"
                            onClick={() => setClicks(clicks + 1)}>PRIDAT</button>
                </div>
                <BodyInput placeholder="Postup" onChange={(event) => setGuide(event.target.value)}/>
                <BodyInput placeholder="Cas" onChange={(event) => setTime(event.target.value)}/>
            </form>
        </div>
    )
}

export default Body;