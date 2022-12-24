import AboutItem from "./AboutItem"
import styles from '../styles/about.module.css'

function Portfolio() {
    return (
        // <div className = {`w-full min-h-[80vh] h-auto flex justify-center align-center`}  id = 'about'>
        <div className={`w-[100%] min-h-[50vh] flex flex-col items-center mb-[3rem] `} id='about'>
            <div className={`w-full h-[5rem] flex flex-row items-center justify-between px-[0.5rem] border-b-2 border-grey md:pl-10 xs:pl-2`}>
                <h1 className={`md:text-5xl font-extrabold xs:text-4xl text-[#0078ff]`}>About Me</h1>
            </div>
            {/* <div className = {`w-full text-xl pl-10 mb-2`}>
                    A  few things about me you might find interesting or useful...
            </div> */}
            <div className={`w-full h-[90%] flex flex-wrap flex-row items-center justify-center ${styles.aboutContainer}`}>
                <AboutItem
                    icon={'smiley'}
                    header={'Quick Facts'}
                    desc={"Hello There! I'm Dolapo. Frontend Web Developer, Web3 Engineer and Technical Writer."}
                />
                <AboutItem
                    icon={'hire'}
                    header={'Why Hire Me?'}
                    desc={'I am a committed, highly motivated individual with an undying passion for learning'}
                />
                <AboutItem
                    icon={'education'}
                    header={'Education'}
                    desc={'BSc (Electrical Engineering): Federal University Of Agriculture, Abeokuta, Ogun State, Nigeria'} />
            </div>
        </div>
        // </div>
    )
}

export default Portfolio