import styles from '../styles/portfolioitem.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"


interface Props {
    title: string,
    desc: string,
    images: string[],
    liveLink: string,
    repoLink: string,
    files: string | string[],
    type: string
}

function PortfolioItem({ title, desc, images, liveLink, repoLink, files, type }: Props) {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])


    const [pictureIndex, setPictureIndex] = useState(0)
    const [leftNavVisibility, setLeftNavVisibility] = useState(false)
    const [rightNavVisibility, setRightNavVisibility] = useState(true)


    // function handlePicture() {
    //     if (pictureIndex == images.length - 1) {
    //         setPictureIndex(0)
    //         setLeftNavVisibility(false)
    //         setRightNavVisibility(true)
    //     } else if (pictureIndex < images.length - 1) {
    //         setPictureIndex(() => { return pictureIndex + 1 })
    //         setLeftNavVisibility(true)
    //         setRightNavVisibility(false)
    //     }
    // }

    // Add a parameter to the handlePicture function
    function handlePicture(direction: string) {
        // Check the direction and update the pictureIndex accordingly
        if (direction === "left") {
            // If the user clicks on the left icon, decrease the pictureIndex by 1
            // If the pictureIndex is 0, set it to the last index of the images array
            setPictureIndex(pictureIndex === 0 ? images.length - 1 : pictureIndex - 1);
        } else if (direction === "right") {
            // If the user clicks on the right icon, increase the pictureIndex by 1
            // If the pictureIndex is the last index of the images array, set it to 0
            setPictureIndex(pictureIndex === images.length - 1 ? 0 : pictureIndex + 1);
        }

        // Set the left and right nav visibility based on the pictureIndex
        setLeftNavVisibility(pictureIndex > 0);
        setRightNavVisibility(pictureIndex < images.length - 1);
    }


    return (
        <div className={`min-h-[35vw] h-auto md:w-[48vw] flex flex-col md:mb-[5rem] rounded-lg xs:w-[97vw] xs:mb-[3rem]`} data-aos="flip-left">
            <div className={` rounded-lg mb-2`}>
                <div className={`w-full h-[3rem] flex flex-row justify-start items-center md:pl-3 xs:pl-1`}>
                    <img className={`w-[40px] h-[40px] rounded-full mr-3`} src='/images/dpx.png' alt='' />
                    <h1 className={`font-extrabold md:text-xl capitalize xs:text-lg text-[#11abc1]`}>{title}</h1>
                </div>
                <div className={`w-full h-[2rem] text-[1rem] md:pl-3 flex justify-start items-center overflow-hidden `}>
                    <p className={`md:text-base font-[300] font-opensans tracking-wide xs:text-sm`}>{desc}</p>
                </div>
            </div>
            {type == "video" ?

                <div className={`w-full md:min-h-[20rem] overflow-hidden h-[20rem] flex justify-center relative xs:min-h-[50vw]`}>
                    {leftNavVisibility &&
                        <div className={`w-[2.5rem] h-[2.5rem] absolute bg-white rounded-full top-[45%] left-2 flex justify-center items-center cursor-pointer z-[3] ${styles.directionDiv}`}>
                            {/* <ChevronLeftIcon className={`${styles.direction}`} onClick={handlePicture} /> */}
                            <ChevronLeftIcon className={`${styles.direction}`} onClick={() => handlePicture("left")} />
                        </div>
                    }


                    <video controls autoPlay preload="none" className={`w-auto h-full contain`}>
                    {/* <video width="320" height="240" controls preload="none" className={`w-full h-auto rounded-lg hover:scale-[105%] ease-in-out duration-[500ms]`}> */}
                        <source src={files[0]} type="video/mp4" />
                        {/* <track
                            src="/path/to/captions.vtt"
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                        /> */}
                        Your browser does not support the video tag.
                    </video>


                    {rightNavVisibility &&
                        <div className={`w-[2.5rem] h-[2.5rem] absolute bg-white rounded-full top-[45%] right-2 flex justify-center items-center cursor-pointer z-[3] ${styles.directionDiv}`}>
                            {/* <ChevronRightIcon className={`${styles.direction}`} onClick={handlePicture} /> */}
                            <ChevronRightIcon className={`${styles.direction}`} onClick={() => handlePicture("right")} />
                        </div>
                    }
                </div>
                :
                <div className={`w-full md:min-h-[20rem] overflow-hidden h-auto flex justify-center relative xs:min-h-[50vw]`}>
                    {leftNavVisibility &&
                        <div className={`w-[2.5rem] h-[2.5rem] absolute bg-white rounded-full top-[45%] left-2 flex justify-center items-center cursor-pointer z-[3] ${styles.directionDiv}`}>
                            {/* <ChevronLeftIcon className={`${styles.direction}`} onClick={handlePicture} /> */}
                            <ChevronLeftIcon className={`${styles.direction}`} onClick={() => handlePicture("left")} />
                        </div>
                    }
                    <img className={`w-full h-auto rounded-lg hover:scale-[105%] ease-in-out duration-[500ms]`} src={images[pictureIndex]} alt='' />

                    {rightNavVisibility &&
                        <div className={`w-[2.5rem] h-[2.5rem] absolute bg-white rounded-full top-[45%] right-2 flex justify-center items-center cursor-pointer z-[3] ${styles.directionDiv}`}>
                            {/* <ChevronRightIcon className={`${styles.direction}`} onClick={handlePicture} /> */}
                            <ChevronRightIcon className={`${styles.direction}`} onClick={() => handlePicture("right")} />
                        </div>
                    }
                </div>
            }

            <div className={`w-full md:h-[3.5rem] flex justify-start items-center xs:h-[2.5rem]`}>
                <Link href={liveLink} passHref={true}>
                    <button className={`w-[42%] md:h-[2.5rem] bg-[#000] rounded-md md:text-base text-white mx-3 xs:h-[2rem] xs:text-sm`}>View Live</button>
                </Link>
                <Link href={repoLink} passHref={true}>
                    <button className={`min-w-[42%] md:h-[2.5rem] border-[1px] border-[#0000006b] font-bold rounded-md md:text-base text-[#000] mx-3 xs:h-[2rem] xs:text-sm`}>See Repo</button>
                </Link>
            </div>
        </div>
    )
}

export default PortfolioItem