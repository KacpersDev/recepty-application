import { Dispatch, SetStateAction } from "react";

interface HeaderProps {
    clicked: boolean,
    setClicked: Dispatch<SetStateAction<boolean>>,
}

export default HeaderProps;