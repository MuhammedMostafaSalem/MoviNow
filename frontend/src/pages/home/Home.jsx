import React from 'react'
import MovieList from '../../components/MovieList'

const Home = ({darkMode}) => {
    return (
        <div className='pt-[70px]'>
            <MovieList darkMode={darkMode} />
        </div>
    )
}

export default Home