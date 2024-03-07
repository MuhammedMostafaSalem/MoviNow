import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/play-button.png'
import { Button, IconButton, Input } from '@material-tailwind/react'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = ({onToggleMode, darkMode, langs, handleChangeLang}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const { pageCount } = useSelector((state) => state.movies);

    const OnChangeKeyword = (e) => {
        setKeyword(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${keyword}/page/${pageCount}`)
    };

    return (
        <header className={`
            fixed
            top-0
            left-0
            w-full
            z-50
            transition-all
            duration-1000
            ${
                isScrolled ?
                    `${darkMode ? 'bg-[#222e]' : 'bg-[#f9f9f9e7]'}
                        py-[3px]
                    `
                : 'py-[10px] border-none'
            }
        `}>
            <div className='container mx-auto flex justify-between items-center sm-max2:px-2'>
                <a href="#" className='flex items-center gap-[5px]'>
                    <img src={logo} alt='logo' className='w-[50px] sm-max:w-[30px]' />
                    <h2 className='font-bold text-[18px] sm-max:text-[12px] text-[orange]'>
                    {t('logo')}
                    </h2>
                </a>
                <div className='flex items-center gap-[5px]'>
                    <div className="ml-auto flex gap-1 md:mr-4">
                        <IconButton className={`focus:outline-none ${darkMode ? 'text-[#f9f9f9e7]' : 'text-[#222]'}`} variant="text" onClick={onToggleMode}>
                            {
                                darkMode ?
                                    <MdOutlineLightMode className="h-4 w-4" />
                                : <MdOutlineDarkMode className="h-4 w-4" />
                            }
                        </IconButton>
                        {
                            langs === "en" ?
                                <IconButton className={`focus:outline-none ${darkMode ? 'text-[#f9f9f9e7]' : 'text-[#222]'}`} variant="text" onClick={() => handleChangeLang('ar')}>
                                    <div className="h-4 w-4">ar</div>
                                </IconButton>
                            :
                            <IconButton className={`focus:outline-none ${darkMode ? 'text-[#f9f9f9e7]' : 'text-[#222]'}`} variant="text" onClick={() => handleChangeLang('en')}>
                                <div className="h-4 w-4">en</div>
                            </IconButton>
                        }
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
                            value={keyword}
                            onChange={OnChangeKeyword}
                            color={darkMode ? 'white' : 'black'}
                            label={t('TypeHereSearch')}
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                        <Button
                            size="sm"
                            color={darkMode ? 'white' : 'black'}
                            className={`!absolute top-1 rounded ${langs === "en" ? 'right-1' : 'left-1'}`}
                            onClick={handleSearch}
                        >
                            {t('Search')}
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
            </div>
        </header>
    )
}

export default Header