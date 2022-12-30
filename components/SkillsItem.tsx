import styles from '../styles/skillsitem.module.css'
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

function SkillsItem({title, icon}: {title: string, icon: string}){

    useEffect(()=>{
        Aos.init({duration: 1500})
    }, [])

    return(
        <div className = {`md:w-[15rem] md:h-[20rem] md:mx-5 md:my-5 border-2 border-grey flex flex-col justify-center items-center rounded-xl relative xs:w-[47vw] xs:h-[60vw] xs:my-2 ${styles.skillsitem}`} data-aos = "flip-right">
           <img src = {icon} className = {`w-auto md:h-[7rem] mb-2 xs:h-[5rem]`} alt = ''/>
           <p className = {`text-base font-bold text-[#1877f2]`}>{title}</p>
           <img src = '/icons/medalIcon.png' className = {`w-auto md:h-[3rem] mb-2 absolute bottom-2 left-2 xs:h-[2rem]`} alt = ''/>

        </div>
    )
}

export default SkillsItem