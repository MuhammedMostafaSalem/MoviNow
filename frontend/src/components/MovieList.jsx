import React from 'react'
import CardMovie from './CardMovie'

const MovieList = () => {
    return (
        <div className='container mx-auto'>
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
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
                <CardMovie />
            </div>
        </div>
    )
}

export default MovieList