import styles from '../styles/PortfolioItem.module.css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import {useState} from 'react'

interface Props{
    title: string,
    desc: string,
    images: string[],
    liveLink: string,
    repoLink: string
}

function PortfolioItem({title, desc, images, liveLink, repoLink}: Props){

    
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

    function handlePicture(){
        if(pictureIndex == images.length - 1){
            setPictureIndex(0)
            setLeftNavVisibility(false)
            setRightNavVisibility(true)
        }else if (pictureIndex < images.length - 1){
            setPictureIndex(()=> {return pictureIndex + 1})
            setLeftNavVisibility(true)
            setRightNavVisibility(false)
        }
    }


    return(
        <div className = {`min-h-[35vw] h-auto w-[40rem] my-[3rem] flex flex-col rounded-lg`}>
            <div className = {`w-full h-[3rem] flex flex-row justify-start items-center pl-3 `}>
                <img className = {`w-[40px] h-[40px] rounded-full mr-3`} src= '/images/work2.jpg' alt = ''/>
                <h1 className = {`font-extrabold text-xl uppercase`}>{title}</h1>
            </div>
            <div className = {`w-full h-[4rem] text-sm pl-3 pt-3 flex justify-start items-start `}>
                <p className = {``}>{desc}</p>
            </div>
            <div className = {`w-full min-h-[20rem] h-auto flex justify-center relative`}>
                {leftNavVisibility && <div className = {`w-[2.5rem] h-[2.5rem] absolute bg-white rounded-full top-[45%] left-2 flex justify-center items-center cursor-pointer ${styles.directionDiv}`}>
                    <ChevronLeftIcon className = {`${styles.direction}`} onClick = {handlePicture}/>
                </div>}
                <img className = {`w-full h-auto rounded-lg`} src= {images[pictureIndex]} alt = ''/>
                {rightNavVisibility && <div className = {`w-[2.5rem] h-[2.5rem] absolute bg-white rounded-full top-[45%] right-2 flex justify-center items-center cursor-pointer ${styles.directionDiv}`}>
                    <ChevronRightIcon className = {`${styles.direction}`} onClick = {handlePicture}/>
                </div>}
            </div>
            <div className = {`w-full h-[3.5rem] flex justify-start items-center `}>
                <Link href = {liveLink} className = {`w-auto h-auto border-2 border-grey`}>
                <button className = {`w-[42%] h-[2.5rem] bg-[#1877f2] rounded-md text-white mx-3`}>View Live</button>
                </Link>
                <Link href = {repoLink} className = {`w-auto h-auto`}>
                <button className = {`min-w-[42%] h-[2.5rem] bg-[#4b4f56] rounded-md text-white mx-3`}>See Repo</button>
                </Link>
            </div>
        </div>
    )
}

export default PortfolioItem