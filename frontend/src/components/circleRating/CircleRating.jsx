import React from 'react'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CircleRating = ({rating}) => {
    return (
        <div className="circleRating bg-[#04152d] rounded-[50%] p-[2px] w-[70px] md:w-[90px]">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    )
}

export default CircleRating