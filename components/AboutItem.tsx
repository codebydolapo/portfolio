import { AcademicCapIcon, InformationCircleIcon, BriefcaseIcon, ExclamationTriangleIcon } from '@heroicons/react/outline'
import styles from '../styles/aboutitem.module.css'

function AboutItem({ icon, header, desc }: {icon: string, header: string, desc: string}) {
    return (
        <div className={`w-full h-[10em] my-2 flex`}>
            <div className={`w-[10em] h-full flex items-center justify-center`}>
                {
                icon == 'smiley' ? <InformationCircleIcon className={`${styles.aboutIcon}`} /> : 
                icon == 'hire' ? <BriefcaseIcon className={`${styles.aboutIcon}`} /> : 
                icon == 'education' ? <AcademicCapIcon className={`${styles.aboutIcon}`} /> : 
                <ExclamationTriangleIcon className={`${styles.aboutIcon}`}/>
                }
            </div>
            <div className={`w-auto h-full px-5 flex flex-col items-start justify-center`}>
                <h1 className={`text-4xl font-extrabold my-2`}>{header}</h1>
                <h3 className={`text-xl capitalize`}>{desc}</h3>
            </div>
        </div>
    )
}

export default AboutItem