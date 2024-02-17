import React, { useState } from 'react'

const Footer = ({darkMode}) => {
    const [year, setYear] = useState(new Date().getFullYear());
console.log(darkMode)
    return (
        <div className={`
            ${darkMode ? 'bg-[#222] text-[#f9f9f9e7]' : 'bg-[#f9f9f9e7] text-[#222]'}
            border-t-2 mt-[50px]
            `}>
            <p className="font-bold text-base capitalize text-center py-[20px]">
                &copy; {year} copy right by MuhammedMostafaSalem
            </p>
        </div>
    )
}

export default Footer