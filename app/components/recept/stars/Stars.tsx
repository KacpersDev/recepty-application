interface Props {
    stars: number;
    time: number;
}

const renderStars = (stars: number) => {
    if (stars === 0 || stars === 5) {
        return <p className={stars === 0 ? "text-white opacity-30 text-[30px]" : "text-white text-[30px]"}>★★★★★</p>
    }
    
    return (
        <p className="text-white text-[30px]">{"★".repeat(stars)}
            <span className="text-white opacity-30">{"★".repeat(5 - stars)}</span>
        </p>
    );
}

const Stars = (props: Props) => {

    const { stars, time } = props;

    return(
        <div className="flex justify-center bg-[#ff00ff] space-x-[400px] h-[70px]">
            <div className="mt-[12px]">
                {renderStars(stars)}
            </div>
            <div>
                <p className="text-white text-[15px] mt-[24px] font-poppins_bold">{time} min.</p>
            </div>
        </div>
    )
}

export default Stars;