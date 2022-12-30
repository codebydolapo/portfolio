import { AcademicCapIcon, InformationCircleIcon, BriefcaseIcon, ExclamationTriangleIcon } from '@heroicons/react/outline'
import styles from '../styles/aboutitem.module.css'
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"


function AboutItem({ icon, header, desc }: {icon: string, header: string, desc: string}) {

    useEffect(()=>{
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className={`w-[95%] md:min-h-[10em] my-2 flex justify-center items-center rounded-xl xs:min-h-[5em] border-2 border-grey`}  data-aos = "flip-right">
            {/* <div className={`w-[10%] h-full flex items-center justify-center`}>
                {
                icon == 'smiley' ? <InformationCircleIcon className={`text-[#1877f2] ${styles.aboutIcon}`} /> : 
                icon == 'hire' ? <BriefcaseIcon className={`text-[#1877f2] ${styles.aboutIcon}`} /> : 
                icon == 'education' ? <AcademicCapIcon className={`text-[#1877f2] ${styles.aboutIcon}`} /> : 
                <ExclamationTriangleIcon className={`text-[#1877f2] ${styles.aboutIcon}`}/>
                }
            </div>
            <div className={`w-[90%] h-full px-5 flex flex-col items-start justify-center`}>
                <h1 className={`md:text-4xl font-extrabold my-2 xs:text-xl text-[#0078ff]`}>{header}</h1>
                <h3 className={`md:text-lg xs:text-sm`}>{desc}</h3>
            </div> */}
        </div>
    )
}

export default AboutItem