import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { getMovieSearch } from '../../store/actions/moviesAction';
import CardMovie from '../../components/CardMovie';
import PaginationResults from '../../components/utils/PaginationResults';
import HeadTitle from '../../components/HeadTitle';

const Search = ({darkMode}) => {
    const dispatch = useDispatch();
    const { keyword, searchPage } = useParams();
    const { movies, pageCount } = useSelector((state) => state.movies);
    const { language } = useSelector(state => state.lang);
    const currenPage = parseInt(searchPage);
    
    useEffect(() => {
        if(movies) {
            dispatch(getMovieSearch({language, keyword, page: currenPage}));
        }
    }, [movies, dispatch]);

    let moviesData = []
    try {
        if(movies.results) {
            moviesData = movies.results;
        } else {
            moviesData = []
        }
    } catch(err) {}

    let moviesPages = []
    try {
        if(movies.total_pages) {
            moviesPages = movies.total_pages;
        } else {
            moviesPages = []
        }
    } catch(err) {}

    return (
        <div className='container mx-auto pt-[70px]'>
            <HeadTitle title={keyword} />
            <div
                className='w-full
                h-auto
                flex
                justify-center
                gap-4
                items-start
                flex-wrap
                overflow-y-auto 
                sm-max:px-2'
            >
                {
                    moviesData ?
                        (
                            moviesData.map((item, index) => (
                                <CardMovie key={index} item={item} />
                            ))
                        )
                    : (
                        <h2 className={`capitalize text-center ${darkMode ? 'text-[#f9f9f9e7]' : 'text-[#222]'} mt-5 p-5`}>there are no movies</h2>
                    )
                }
            </div>
            <PaginationResults pageCount={currenPage} totalPages={moviesPages} darkMode={darkMode} keyword={keyword} />
        </div>
    )
}

export default Search

