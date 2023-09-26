import { AcademicCapIcon, InformationCircleIcon, BriefcaseIcon, ExclamationTriangleIcon } from '@heroicons/react/outline'
import styles from '../styles/aboutitem.module.css'
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

interface Props{
    image: string;
    title: string;
    text: string
}


function AboutItem({image, title, text}: Props) {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])



    return (
        <div className={`md:w-[23%] md:h-[95%] md:min-w-[23%] md:min-h-[95%] rounded-xl flex flex-col items-center justify-around border-2 border-grey hover:scale-[110%] duration-[500ms] xs:min-w-[43vw] xs:min-h-[55vw] xs:w-[43vw] xs:h-[55vw] xs:mx-2 cursor-pointer`} data-aos="flip-right">
            <img className={`rounded-full h-[48%] w-auto`} alt={``} src={image} />
            <div className={`h-[48%] w-full flex flex-col justify-around items-center`}>
                <h1 className={`md:text-xl font-bold text-[#11abc1] xs:text-sm`}>{title}</h1>
                <p className={`text-center px-2 md:text-sm xs:text-xs`}>{text}</p>
            </div>
        </div>
    )
}

export default AboutItem