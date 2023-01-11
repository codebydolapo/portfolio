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
    repoLink: string
}

function PortfolioItem({ title, desc, images, liveLink, repoLink }: Props) {

    useEffect(()=>{
        Aos.init({duration: 1500})
    }, [])


    const [pictureIndex, setPictureIndex] = useState(0)
    const [leftNavVisibility, setLeftNavVisibility] = useState(false)
    const [rightNavVisibility, setRightNavVisibility] = useState(true)


    // function handleNavVisibility(){
    //     if (pictureIndex == 0){
    //         setLeftNavVisibility(false)
    //         setRightNavVisibility(true)
    //     } 
    //     //else if (pictureIndex <  images.length - 1){
    //     //     setLeftNavVisibility(true)
    //     //     setRightNavVisibility(true)
    //      //} 
    //      else if (pictureIndex == images.length - 1){
    //         setLeftNavVisibility(true)
    //         setRightNavVisibility(false)
    //      }
    // }



    //function handleIndex(){
    //     if(pictureIndex == images.length - 1){
    //         setPictureIndex(0)
    //         setLeftNavVisibility(false)
    //         setRightNavVisibility(true)
    //     }else if (pictureIndex < images.length - 1){
    //         setPictureIndex(()=> {return pictureIndex + 1})
    //         setLeftNavVisibility(true)
    //         setRightNavVisibility(false)
    //     }
    // }

    function handlePicture() {
        if (pictureIndex == images.length - 1) {
            setPictureIndex(0)
            setLeftNavVisibility(false)
            setRightNavVisibility(true)
        } else if (pictureIndex < images.length - 1) {
            setPictureIndex(() => { return pictureIndex + 1 })
            setLeftNavVisibility(true)
            setRightNavVisibility(false)
        }
    }


    return (
        <div className={`min-h-[35vw] h-auto md:w-[48vw] flex flex-col md:mb-[5rem] rounded-lg xs:w-[97vw] xs:mb-[3rem]`} data-aos = "flip-left">
            <div className={` rounded-lg mb-2`}>
                <div className={`w-full h-[3rem] flex flex-row justify-start items-center md:pl-3 xs:pl-1`}>
                    <img className={`w-[40px] h-[40px] rounded-full mr-3`} src='/images/dpx.png' alt='' />
                    <h1 className={`font-extrabold md:text-xl capitalize xs:text-lg text-[#1877f2]`}>{title}</h1>
                </div>
                <div className={`w-full h-[2rem] text-[1rem] md:pl-3 pt-3 flex justify-start items-start overflow-hidden `}>
                    <p className={`md:text-base font-[300] font-opensans tracking-wide xs:text-sm`}>{desc}</p>
                </div> 
            </div>
            <div className={`w-full md:min-h-[20rem] h-auto flex justify-center relative xs:min-h-[50vw]`}>
                {leftNavVisibility && 
                <div className={`w-[2.5rem] h-[2.5rem] absolute bg-white rounded-full top-[45%] left-2 flex justify-center items-center cursor-pointer z-[3] ${styles.directionDiv}`}>
                    <ChevronLeftIcon className={`${styles.direction}`} onClick={handlePicture} />
                </div>}
                <img className={`w-full h-auto rounded-lg hover:scale-[105%] ease-in-out duration-[500ms]`} src={images[pictureIndex]} alt='' />
                {rightNavVisibility && <div className={`w-[2.5rem] h-[2.5rem] absolute bg-white rounded-full top-[45%] right-2 flex justify-center items-center cursor-pointer z-[3] ${styles.directionDiv}`}>
                    <ChevronRightIcon className={`${styles.direction}`} onClick={handlePicture} />
                </div>}
            </div>
            
            <div className={`w-full md:h-[3.5rem] flex justify-start items-center xs:h-[2.5rem]`}>
                <Link href={liveLink} passHref = {true}>
                    <button className={`w-[42%] md:h-[2.5rem] bg-[#1877f2] rounded-md md:text-base text-white mx-3 xs:h-[2rem] xs:text-sm`}>View Live</button>
                </Link>
                <Link href={repoLink} passHref={true}>
                    <button className={`min-w-[42%] md:h-[2.5rem] border-2 border-[#1877f2] font-bold rounded-md md:text-base text-[#4b4f56] mx-3 xs:h-[2rem] xs:text-sm`}>See Repo</button>
                </Link>
            </div>
        </div>
    )
}

export default PortfolioItem