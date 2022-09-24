import styles from '../styles/intro.module.css'
import { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect'

function Intro() {

    return (
        <div className={`w-full md:min-h-[100vh] flex justify-center align-center xs:min-h-[50vh]`} id='home'>
            <div className={`md:w-[95%] md:min-h-[100vh] xs:w-full xs:min-h-[50vh]`}>
                <div className={`w-full md:h-[60vh] flex flex-col justify-center md:items-center relative xs:h-[30vh] xs:items-start`}>
                    <div className={`w-full h-full overflow-hidden `}>
                        <img className={`w-full h-auto`} alt='' src='/images/bg.jpg' />
                    </div>
                    <img className={`md:w-[15rem] md:h-[15rem] rounded-full mx-2 absolute md:bottom-[-5rem] md:border-[7px] border-white xs:w-[10rem] xs:h-[10rem] xs:bottom-0`} alt='' src='/images/dp.png' />
                </div>
                <div className={`w-full md:h-[40vh] flex flex-col items-center justify-center mt-[4rem] xs:min-h-[30vh]`}>
                    <h1 className={`md:text-6xl font-extrabold text-black xs:text-4xl`}>Bashorun Dolapo</h1>
                    <h3 className={`text-xl font-bold my-[1rem]`} >
                        <Typewriter
                            options={{
                                strings: ["Web Developer", "Blockchain Jedi", "I/O Enthusiast", "Technical Writer"],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </h3>

                    <div className={`md:my-[1rem]`}>
                        <button className={`md:w-[13em] bg-[#1877f2] h-[2.5em] rounded-md text-white md:mx-[2rem] xs:w-[12rem] xs:mx-1`}>My Portfolio</button>
                        <button className={`md:w-[13em] bg-[#4b4f56] h-[2.5em] rounded-md text-white md:mx-[2rem] xs:w-[12rem] xs:mx-1`}>My Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro