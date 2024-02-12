import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/play-button.png'
import { Button, IconButton, Input } from '@material-tailwind/react'
import { MdOutlineLightMode } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`
            fixed
            top-0
            left-0
            w-full
            z-50
            transition-all
            duration-1000
            ${isScrolled ? 'bg-[#0c152465] py-[10px] border-b-[1px]' : 'py-[20px]'}
        `}>
            <div className='container mx-auto flex justify-between items-center sm-max2:px-2'>
                <a href="#" className='flex items-center gap-[5px]'>
                    <img src={logo} alt='logo' className='w-[50px] sm-max:w-[30px]' />
                    <h2 className='font-bold text-[18px] sm-max:text-[12px] text-[orange]'>
                    Material Tailwind
                    </h2>
                </a>
                <div className="ml-auto flex gap-1 md:mr-4">
                    <IconButton variant="text" color="white">
                        <MdOutlineLightMode className="h-4 w-4" />
                    </IconButton>
                    <IconButton variant="text" color="white">
                        <div className="h-4 w-4">ar</div>
                    </IconButton>
                </div>
                
                <div
                    className={`relative
                    flex
                    w-full
                    gap-2
                    md:w-max
                    sm-max2:fixed
                    sm-max2:left-0
                    sm-max2:bg-[#0c1524]
                    sm-max2:py-[20px]
                    sm-max2:px-[20px]
                    sm-max2:duration-1000
                    ${isMenuOpen ? "sm-max2:top-[65px]" : "sm-max2:-top-[80px]"}
                    `}
                >
                    <Input
                        type="search"
                        color="white"
                        label="Type here..."
                        className="pr-20"
                        containerProps={{
                            className: "min-w-[288px]",
                        }}
                    />
                    <Button
                        size="sm"
                        color="white"
                        className="!absolute right-1 top-1 rounded"
                    >
                        Search
                    </Button>
                </div>

                <div className='hidden sm-max2:block text-xl' onClick={toggleMenu}>
                    {
                        !isMenuOpen ?
                            <FaBars />
                        : <FaTimes />
                    }
                </div>
            </div>
        </header>
    )
}

export default Header