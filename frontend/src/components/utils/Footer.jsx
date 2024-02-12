import React, { useState } from 'react'

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
        <div className='bg-[#0c1524] mt-[50px]'>
            <p className="font-bold text-base capitalize text-center py-[30px]">
                &copy; {year} copy right by MuhammedMostafaSalem
            </p>
        </div>
    )
}

export default Footer