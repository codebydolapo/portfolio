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
                    <AboutItem
                        icon={'smiley'}
                        header={'Quick Facts'}
                        desc={"I'm a web and blockchain developer, avid technical writer and good-food enthusiast"}
                    />
                    <AboutItem
                    icon={'hire'}
                    header={'Why Hire Me?'}
                    desc={'I am committed, highly motivated and unwilling to rest until i get s*it done'}
                    />
                    <AboutItem
                    icon={'education'}
                    header={'Education'}
                    desc={'BSc (Electrical Engineering): Federal University Of Agriculture, Abeokuta, Ogun State, Nigeria'}/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio