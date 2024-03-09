import React from 'react'
import MovieList from '../../components/MovieList'
import HeadTitle from '../../components/HeadTitle'

const Home = ({darkMode}) => {
    return (
        <div className='pt-[70px]'>
            <HeadTitle title="MoviNow" />
            <MovieList darkMode={darkMode} />
        </div>
    )
}

export default Home