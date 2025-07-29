interface Input {
    placeholder: string,
}

const BodyInput = (props: Input) => {

    const {placeholder} = props;
    
    return(
        <div className="grid justify-center mt-[35px]">
            <input className="outline-none w-[750px]" placeholder={placeholder}/>
            <div className={`w-[750px] h-[1px] bg-slate-200 mt-[2px]`}/>
        </div>
    )
}

export default BodyInput;