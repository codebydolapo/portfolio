import {AcademicCapIcon} from '@heroicons/react/outline'
import styles from '../styles/aboutitem.module.css'

function AboutItem(){
    return(
        <div className= {`w-full h-[10em] my-2 flex`}>
            <div className={`w-[10em] h-full flex items-center justify-center`}>
                <AcademicCapIcon className = {`${styles.aboutIcon}`}/>
            </div>
            <div className={`w-auto h-full px-5 flex flex-col items-start justify-center`}>
                <h1 className={`text-4xl font-extrabold`}>Education</h1>
                <h3 className = {`text-xl`}>Federal University Of Agriculture, Abeokuta</h3>
            </div>
        </div>
    )
}

export default AboutItem