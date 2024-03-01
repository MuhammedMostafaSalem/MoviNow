import React, { useEffect, useState } from 'react'
import CircleRating from './circleRating/CircleRating';
import PlayIcon from './PlayIcon';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Typography
} from "@material-tailwind/react";
import { FaTimes } from 'react-icons/fa';
import { ApiKey } from '../config/configToken';
import { useParams } from 'react-router-dom';
import baseURL from '../api/baseURL';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const MovieDetails = ({darkMode}) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const Param= useParams();
    const [movie, setMovie] = useState([])
    const { language } = item(state => state.lang);

    // get movie details with axios
    const getMovieDetails= async()=> {
        const res = await baseURL.get(`/movie/${Param.id}?api_key=${ApiKey}&language=${language}`)
        setMovie(res.data);
    }

    useEffect(() => {
        if(movie) {
            getMovieDetails();
        }
    }, [movie])

    let subtitle = []
    try {
        if(movie.genres) {
            subtitle = movie.genres;
        } else {
            subtitle
        }
    } catch(err) {}

    // get watch movie
    const [watchMovie, setWatchMovie] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await baseURL.get(`/movie/${Param.id}/watch/providers?api_key=${ApiKey}`);
            setWatchMovie(response.data.results);
        };
    
        fetchData();
    }, []);

    let viedoLink = []
    try {
        if(watchMovie.AR.link) {
            viedoLink = watchMovie.AR.link;
        } else {
            viedoLink
        }
    } catch(err) {}

    // open watch movie in new tap
    const videoNewTap = url => window.open(url)

    return (
        <div className='w-full pt-[100px]'>
            <div className='w-full h-full absolute top-0 left-0 opacity-[0.1] overflow-hidden'>
                <img
                    className="posterImg w-full h-full object-cover object-center"
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt=""
                />
            </div>
            <div className={`
                absolute bottom-0 left-0 w-full h-[250px]
                ${darkMode ? 'gradient-background-dark' : 'gradient-background-light'}
            `}></div>
            <div className='container mx-auto'>
                <div className="left flex relative flex-col gap-[25px] md:flex-row md:gap-[50px]">
                    <div className="shrink-0">
                        <img
                            className='w-full block rounded-[12px] md:max-w-[350px]'
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt=""
                        />
                    </div>
                    <div className={`
                        right
                        ${darkMode ? 'text-[#f9f9f9]' : 'text-[#222]'}
                    `}>
                        <div className='title text-[28px] leading-[40px] md:text-[34px] md:leading-[44px]'>
                            {movie.title}
                        </div>
                        <div className='flex gap-5'>
                            {
                                subtitle.map((item, index) => (
                                    <div className="subtitle text-[16px] leading-[24px] mb-[15px] italic opacity-[0.5] md:text-[20px] md:leading-[28px]" key={index}>
                                        {item.name}
                                    </div>
                                ))
                            }
                        </div>

                        <div className="flex items-center gap-[25px] mb-[25px]">
                            <CircleRating
                                rating={movie.vote_average}
                            />
                            <div
                                className={`
                                    ${darkMode ? 'playLightMode' : 'playDarkMode'}
                                    playbtn playLightMode flex items-center gap-[20px] cursor-pointer
                                `}
                                onClick={() => videoNewTap(viedoLink)}
                            >
                                <PlayIcon />
                                <span className="text">
                                {t('WatchNow')}
                                </span>
                            </div>
                        </div>

                        <div className="overview mb-[25px] ">
                            <div className="heading text-[24px] mb-[10]">
                                {t('Overview')}
                            </div>
                            <div className="description leading-[24px] md:pr-[100px]">
                                {movie.overview}
                            </div>
                        </div>

                        <div className="info">
                            <div className="infoItem">
                                <span className="text bold">
                                    {t('Status')}:
                                </span>
                                <span className="text">
                                    {movie.status}
                                </span>
                            </div>
                            <div className="infoItem">
                                <span className="text bold">
                                    {t('ReleaseDate')}:
                                </span>
                                <span className="text">
                                    {movie.release_date}
                                </span>
                            </div>
                            <div className="infoItem">
                                <span className="text bold">
                                    {t('Runtime')}:
                                </span>
                                <span className="text">
                                    {movie.runtime}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='modal-dialog'>
                <Dialog
                    open={open}
                    handler={handleOpen}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                    className='focus:outline-none bg-transparent'
                >
                    <DialogHeader className="justify-between">
                        <div>
                            <Typography className='text-gray-300' variant="paragraph">
                            Watch : movie name
                            </Typography>
                        </div>
                        <FaTimes className='text-gray-300 text-lg' onClick={handleOpen} />
                    </DialogHeader>
                    <DialogBody>
                        <video className="h-full w-full rounded-lg focus:outline-none" controls>
                            <source
                            src="https://docs.material-tailwind.com/demo.mp4"
                            type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </DialogBody>
                </Dialog>
            </div>
        </div>
    )
}

export default MovieDetails