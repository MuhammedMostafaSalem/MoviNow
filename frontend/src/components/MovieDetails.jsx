import React, { useState } from 'react'
import CircleRating from './circleRating/CircleRating';
import PlayIcon from './PlayIcon';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography
} from "@material-tailwind/react";
import { FaTimes } from 'react-icons/fa';

const MovieDetails = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <div className='w-full pt-[100px]'>
            <div className='w-full h-full absolute top-0 left-0 opacity-[0.1] overflow-hidden'>
                <img
                    className="posterImg w-full h-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[250px] gradient-background"></div>
            <div className='container mx-auto'>
                <div className="left flex relative flex-col gap-[25px] md:flex-row md:gap-[50px]">
                    <div className="shrink-0">
                        <img
                            className='w-full block rounded-[12px] md:max-w-[350px]'
                            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <div className="title text-[28px] leading-[40px] md:text-[34px] md:leading-[44px]">
                            name or title
                        </div>
                        <div className="subtitle text-[16px] leading-[24px] mb-[15px] italic opacity-[0.5] md:text-[20px] md:leading-[28px]">
                            subtitle
                        </div>

                        <div className="flex items-center gap-[25px] mb-[25px]">
                            <CircleRating
                                rating='3.5'
                            />
                            <div
                                className="playbtn flex items-center gap-[20px] cursor-pointer"
                            >
                                <PlayIcon onOpenDialog={handleOpen} />
                                <span className="text">
                                    Watch Now
                                </span>
                            </div>
                        </div>

                        <div className="overview mb-[25px] ">
                            <div className="heading text-[24px] mb-[10]">
                                Overview
                            </div>
                            <div className="description leading-[24px] md:pr-[100px]">
                                overview
                            </div>
                        </div>

                        <div className="info">
                            <div className="infoItem">
                                <span className="text bold">
                                    Status:{" "}
                                </span>
                                <span className="text">
                                    status
                                </span>
                            </div>
                            <div className="infoItem">
                                <span className="text bold">
                                    Release Date:{" "}
                                </span>
                                <span className="text">
                                    release_date
                                </span>
                            </div>
                            <div className="infoItem">
                                <span className="text bold">
                                    Runtime:{" "}
                                </span>
                                <span className="text">
                                    runtime
                                </span>
                            </div>
                        </div>

                        <div className="info">
                            <span className="text bold">
                                Director:{" "}
                            </span>
                            <span className="text">
                                <span>
                                    director
                                </span>
                            </span>
                        </div>

                        <div className="info">
                            <span className="text bold">
                                Writer:{" "}
                            </span>
                            <span className="text">
                                <span>
                                    writer
                                </span>
                            </span>
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