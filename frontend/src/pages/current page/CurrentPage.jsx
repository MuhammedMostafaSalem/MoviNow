import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CardMovie from '../../components/CardMovie';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesPage } from '../../store/actions/moviesAction';
import HeadTitle from '../../components/HeadTitle';

const CurrentPage = () => {
    const { page } = useParams();
    const dispatch = useDispatch()
    const { movies } = useSelector((state) => state.movies);
    const { language } = useSelector(state => state.lang);
    
    useEffect(() => {
        if(movies) {
            dispatch(getMoviesPage({ language, page}));
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
    
    return (
        <div className='container mx-auto pt-[70px]'>
            <HeadTitle title={"page " + page} />
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
        </div>
    )
}

export default CurrentPage