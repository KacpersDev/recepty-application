"use client";
import Image from "next/image";

import PlusIcon from "@/app/assets/images/plus.png";
import ArrowIcon from "@/app/assets/images/arrow.png";

import { useRouter } from "next/navigation";
import HeaderProps from "./HeaderProps";

const Header = (props: HeaderProps) => {

    const { clicked, setClicked } = props;
    const router = useRouter();

    return(
        <div className="flex justify-center font-poppins space-x-[560px] mt-[25px]">
            <div className="flex space-x-[30px]">
                <Image 
                    className="w-[32px] hover:cursor-pointer hover:opacity-75" 
                    src={ArrowIcon} alt="arrow icon"
                    onClick={() => router.back()}
                />
                <p className="text-[18px] font-poppins_bold">Pridat recept</p>
            </div>
            <div>
                <Image 
                    className="w-[24px] h-[24px] hover:cursor-pointer hover:opacity-75" 
                    src={PlusIcon} 
                    alt="plus icon"
                    onClick={() => setClicked(true)}
                />
            </div>
        </div>
    )
}

export default Header;