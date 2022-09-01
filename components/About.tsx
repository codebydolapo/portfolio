import AboutItem from "./AboutItem"
import styles from '../styles/about.module.css'

function Portfolio(){
    return(
        <div className = {`w-full min-h-[100vh] h-auto flex justify-center align-center`}  id = 'about'>
            <div className = {`w-[90%] h-full`}>
                <div className = {`w-full h-[10%] flex flex-row items-center justify-start px-[2em]`}>
                    <h1 className = {`text-2xl font-extrabold`}>About Me</h1>
                </div>
                <div className = {`w-full h-[90%] flex flex-wrap flex-row items-start justify-center ${styles.aboutContainer}`}>
                    <AboutItem/>
                    <AboutItem/>
                    <AboutItem/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio