import AboutItem from "./AboutItem"
// import styles from '../styles/about.module.css'
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { aboutData } from "../data/aboutData"

function Portfolio() {

    useEffect(()=>{
        Aos.init({duration: 1500})
    }, [])

    return (
        // <div className = {`w-full min-h-[80vh] h-auto flex justify-center align-center`}  id = 'about'>
        <div className={`w-[100%] min-h-[100vh] flex flex-col items-center`} id='about'>
            <div className={`w-full h-[5rem] flex flex-row items-center justify-between px-[0.5rem] border-b-2 border-grey md:pl-10 xs:pl-2`}>
                <h1 className={`md:text-4xl font-extrabold xs:text-3xl text-[#000000a6]`}>About Me</h1>
            </div>

            <div className={`w-full md:h-[50vh] md:mt-[5rem] flex flex-wrap items-center justify-around xs:h-[80vh]`}>
                {aboutData.map(({image, title, text}, index)=>{
                    return <AboutItem
                    image = {image}
                    title = {title}
                    text = {text}
                    key = {index}
                    />
                })}
            </div>
        </div>
    )
}

export default Portfolio