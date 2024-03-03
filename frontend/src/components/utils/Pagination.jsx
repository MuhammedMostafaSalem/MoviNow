import React, { useEffect, useState } from 'react'
import { IconButton, Typography } from '@material-tailwind/react';
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Pagination = ({ totalPages, darkMode }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const page = parseInt(localStorage.getItem('currentPage'))
    const [currentPage, setCurrentPage] = useState(page || 1);
    const { language } = useSelector(state => state.lang);

    const next = () => {
        if (currentPage >= totalPages) return;
    
        setCurrentPage(currentPage + 1);
        navigate(`/page/${currentPage + 1}`);
    }

    const prev = () => {
        if (currentPage === 1) return;
    
        setCurrentPage(currentPage - 1);
        navigate(`/page/${currentPage - 1}`);
    }
    useEffect(() => {
        if(currentPage === 1) {
            navigate(`/`);
        }
    }, [currentPage])

    useEffect(() => {
        localStorage.setItem('currentPage', currentPage); // Update localStorage on state change
    }, [currentPage]);
    // console.log(currentPage)

    // const handlePageChange = (page) => {
    //     navigate(`/page/${page}`);
    // };

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
                disabled={currentPage === 1}
            >
                <HiOutlineArrowSmallLeft strokeWidth={2} className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </IconButton>
            <Typography color="gray" className={`font-normal flex gap-2 ${darkMode ? 'text-[#f9f9f9e7]' : 'text-[#222]'}`}>
                {t('Page')} <strong>{currentPage}</strong><span>{t('of')}</span>
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
                disabled={currentPage === totalPages}
            >
                <HiOutlineArrowSmallRight strokeWidth={2} className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </IconButton>
        </div>

    )
}

export default Pagination