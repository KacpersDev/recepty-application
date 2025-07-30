"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import ReceptIcon from "@/app/assets/images/recept-icon.png";
import Arrow from "@/app/assets/images/arrow.png";

interface Props {
    name: string;
}

const Header = (props: Props) => {

    const router = useRouter();
    const { name } = props;

    return(
        <div>
            <div className="flex justify-center space-x-[320px] mt-[15px] mb-[15px] max-[620px]:space-x-[100px] max-[370px]:space-x-[50px]">
                <div>
                    <Image className="w-[32px] hover:cursor-pointer" src={Arrow} alt="arrow" onClick={() => router.back()}/>
                    <Image className="w-[100px] ml-auto mr-auto mt-[10px]" src={ReceptIcon} alt="recept icon"/>
                </div>
                <div>
                    <p className="font-poppins_bold text-[20px] mt-[70px]">{name}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;