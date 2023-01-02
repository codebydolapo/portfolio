// import AboutItem from "./AboutItem"
// import styles from '../styles/about.module.css'
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function Portfolio() {

    useEffect(()=>{
        Aos.init({duration: 1500})
    }, [])

    return (
        // <div className = {`w-full min-h-[80vh] h-auto flex justify-center align-center`}  id = 'about'>
        <div className={`w-[100%] min-h-[50vh] flex flex-col items-center mb-[3rem] `} id='about'>
            <div className={`w-full h-[5rem] flex flex-row items-center justify-between px-[0.5rem] border-b-2 border-grey md:pl-10 xs:pl-2`}>
                <h1 className={`md:text-4xl font-extrabold xs:text-3xl text-[#0078ff]`}>About Me</h1>
            </div>

            <div className={`w-full h-[50vh] flex flex-row items-center md:justify-around md:overflow-x-hidden my-[2rem] xs:overflow-x-scroll`}>
                <div className={`md:w-[23%] md:h-[95%] md:min-w-[23%] md:min-h-[95%] md:mx-0 rounded-xl flex flex-col items-center justify-around  border-2 border-grey hover:scale-[105%] duration-[500ms] xs:min-w-[90vw] xs:min-h-[90vw] xs:w-[90vw] xs:h-[90vw] xs:mx-2`} data-aos = "flip-right">
                    <img className={`rounded-full h-[48%] w-auto`} alt={``} src={`/images/dpx.png`} />
                    <div className={`h-[48%] w-full flex flex-col justify-around items-center`}>
                        <h1 className={`text-xl font-bold text-[#1877f2]`}>About Me</h1>
                        <p className={`text-center px-2`}>Hello There! My name is Dolapo. Frontend Web Developer, Web3 Engineer and Technical Writer.</p>
                    </div>
                </div>
                <div className={`md:w-[23%] md:h-[95%] md:min-w-[23%] md:min-h-[95%] md:mx-0 rounded-xl flex flex-col items-center justify-around  border-2 border-grey hover:scale-[105%] duration-[500ms] xs:min-w-[90vw] xs:min-h-[90vw] xs:w-[90vw] xs:h-[90vw] xs:mx-2`} data-aos = "flip-right">
                    <img className={`rounded-full h-[48%] w-auto`} alt={``} src={`/images/work.png`} />
                    <div className={`h-[48%] w-full flex flex-col justify-around items-center`}>
                        <h1 className={`text-xl font-bold text-[#1877f2]`}>Why Hire Me?</h1>
                        <p className={`text-center px-2`}>I am a committed, highly motivated individual with an undying passion for learning.</p>
                    </div>
                </div>
                <div className={`md:w-[23%] md:h-[95%] md:min-w-[23%] md:min-h-[95%] md:mx-0 rounded-xl flex flex-col items-center justify-around  border-2 border-grey hover:scale-[105%] duration-[500ms] xs:min-w-[90vw] xs:min-h-[90vw] xs:w-[90vw] xs:h-[90vw] xs:mx-2 `} data-aos = "flip-right">
                    <img className={`rounded-full h-[48%] w-auto`} alt={``} src={`/images/education.png`} />
                    <div className={`h-[48%] w-full flex flex-col justify-around items-center`}>
                        <h1 className={`text-xl font-bold text-[#1877f2]`}>Education</h1>
                        <p className={`text-center px-2`}>BSc (Electrical Engineering): Federal University Of Agriculture, Abeokuta, Ogun State, Nigeria</p>
                    </div>
                </div>
                <div className={`md:w-[23%] md:h-[95%] md:min-w-[23%] md:min-h-[95%] md:mx-0 rounded-xl flex flex-col items-center justify-around  border-2 border-grey hover:scale-[105%] duration-[500ms] xs:min-w-[90vw] xs:min-h-[90vw] xs:w-[90vw] xs:h-[90vw] xs:mx-2`} data-aos = "flip-right">
                    <img className={`rounded-full h-[48%] w-auto`} alt={``} src={`/images/experience.png`} />
                    <div className={`h-[48%] w-full flex flex-col justify-around items-center`}>
                        <h1 className={`text-xl font-bold text-[#1877f2]`}>My Skills</h1>
                        <p className={`text-center px-2`}>I am experienced with a wide range of Web2/Web3 technologies and languages</p>
                    </div>
                </div>
            </div>
            {/* <div className={`w-full h-[90vh] flex flex-wrap flex-row items-center justify-center ${styles.aboutContainer}`}>
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
            </div> */}
        </div>
        // </div>
    )
}

export default Portfolio