import React from 'react'
import { Link } from 'react-router-dom'

const CardMovie = ({item}) => {
    
    return (
        <Link to={`/movie/${item.id}`}>
            <div
                className="group
                relative
                cursor-pointer
                items-center
                justify-center
                overflow-hidden
                w-[280px]
                h-[280px]
                rounded-[15px]"
            >
                <div className="h-full w-full">
                    <img
                        className="h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700 group-hover:rotate-3
                        group-hover:scale-125"
                        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                        alt=""
                    />
                </div>
                <div
                    className="absolute
                    inset-0
                    md-max:bg-[#00000080]
                    group-hover:bg-[#00000080]"
                ></div>
                <div className="absolute
                    inset-0
                    flex
                    opacity-0
                    md-max:opacity-100
                    flex-col
                    items-center
                    justify-center
                    px-9
                    text-center
                    transition-opacity
                    duration-[1s]
                    group-hover:opacity-100"
                >
                    <h1 className="font-dmserif text-lg md-max:text-[20px] font-bold text-white">{item.title}</h1>
                    <p className="mb-3 text-xs md-max:text-[15px] italic text-white leading-[13px]">{item.overview}</p>
                </div>
            </div>
        </Link>
    )
}
export default CardMovie