import PlusIcon from "@/app/assets/images/plus.png";
import Image from "next/image";

const Header = () => {
    return(
        <div className="flex justify-center font-poppins space-x-[350px] mt-[25px]">
            <p className="text-[18px]">Recepty</p>
            <Image className="w-[24px] h-[24px] hover:cursor-pointer hover:opacity-75" src={PlusIcon} alt="plus icon"/>
        </div>
    )
}

export default Header;