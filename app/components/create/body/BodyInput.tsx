import { ChangeEventHandler } from "react";

interface Input {
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
}

const BodyInput = (props: Input) => {

    const {placeholder, onChange} = props;
    
    return(
        <div className="grid justify-center mt-[35px]">
            <input className="outline-none w-[750px] max-[800px]:w-[500px] max-[500px]:w-[300px]" placeholder={placeholder} onChange={onChange} required/>
            <div className={`w-[750px] h-[1px] bg-slate-200 mt-[2px] max-[800px]:w-[500px] max-[500px]:w-[300px]`}/>
        </div>
    )
}

export default BodyInput;