import { useState, SetStateAction, Dispatch } from "react";

import BodyInput from "./BodyInput";
import Image from "next/image";
import PlusPurple from "@/app/assets/images/plus-purple.png";

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
                <BodyInput placeholder="Název receptu" onChange={(event) => setName(event.target.value)}/>
                <BodyInput placeholder="Úvodní text" onChange={(event) => setText(event.target.value)}/>
                <div className="grid justify-center">
                    <p className="text-center mr-[650px] mt-[50px] font-poppins_bold text-[#0000ff]">INGREDIENCE</p>
                    <div className="grid justify-center">
                        {[...Array(clicks)].map((_, index) => (
                            <BodyInput key={index} placeholder="Váše ingredience" onChange={(event) => {
                                map.set(index, event.target.value);
                            }}/>
                        ))}
                    </div>
                    <div className="border-2 border-[#ff00ff] flex justify-center space-x-[10px] w-[100px] h-[35px] rounded-lg mt-[15px] hover:cursor-pointer hover:opacity-75" 
                            onClick={() => setClicks(clicks + 1)}>
                        <Image src={PlusPurple} alt="purple plus" className="w-[16px] h-[16px] mt-[7px]"/>
                        <p className="text-[#ff00ff] font-poppins_bold text-[15px] mt-[5px]">PŘIDAT</p>
                    </div>
                </div>
                <BodyInput placeholder="Postup" onChange={(event) => setGuide(event.target.value)}/>
                <BodyInput placeholder="Čas" onChange={(event) => setTime(event.target.value)}/>
            </form>
        </div>
    )
}

export default Body;