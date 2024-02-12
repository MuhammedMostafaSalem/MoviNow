import React from 'react'

const CardMovie = () => {
    return (
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
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
                <h1 className="font-dmserif text-3xl md-max:text-[20px] font-bold text-white">Beauty</h1>
                <p className="mb-3 text-lg md-max:text-[15px] italic text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
            </div>
        </div>
    )
}
export default CardMovie