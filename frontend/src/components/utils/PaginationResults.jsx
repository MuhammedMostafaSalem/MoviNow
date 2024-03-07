import React, { useEffect, useState } from 'react'
import { IconButton, Typography } from "@material-tailwind/react";
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const PaginationResults = ({pageCount, totalPages, darkMode, keyword}) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const page = parseInt(localStorage.getItem('currentPage'))
    const [active, setActive] = useState(page || pageCount);
    const { language } = useSelector(state => state.lang);

    const next = () => {
        if (active === totalPages) return;
    
        setActive(active + 1);
        navigate(`/search/${keyword}/page/${active + 1}`);
    };
    
    const prev = () => {
        // if (active === 1) return;
        
        setActive(active - 1);
        navigate(`/search/${keyword}/page/${active - 1}`);
    };

    useEffect(() => {
        if(active < 1) {
            setTimeout(() => {
                navigate(`/`);
                window.location.reload();
            })
        }
    }, [active])

    useEffect(() => {
        localStorage.setItem('currentPage', active); // Update localStorage on state change
    }, [active]);

    return (
        <div className="flex justify-center items-center mt-6 gap-8">
            <IconButton
                size="sm"
                variant="outlined"
                onClick={prev}
                className={
                    `${darkMode ? 'text-[#f9f9f9e7] border-[#f9f9f9e7]' :
                    'text-[#222] border-[#222]'}`
                }
                // disabled={active === 1}
            >
                <HiOutlineArrowSmallLeft strokeWidth={2} className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </IconButton>
            <Typography color="gray" className={`font-normal flex gap-2 ${darkMode ? 'text-[#f9f9f9e7]' : 'text-[#222]'}`}>
                {t('Page')} <strong>{active}</strong> of{" "}
                <strong>{totalPages}</strong>
            </Typography>
            <IconButton
                size="sm"
                variant="outlined"
                onClick={next}
                className={
                    `${darkMode ? 'text-[#f9f9f9e7] border-[#f9f9f9e7]' :
                    'text-[#222] border-[#222]'}`
                }
                disabled={active === totalPages}
            >
                <HiOutlineArrowSmallRight strokeWidth={2} className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </IconButton>
        </div>
    )
}

export default PaginationResults