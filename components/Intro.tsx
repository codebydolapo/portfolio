import styles from '../styles/intro.module.css'
import { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect'

function Intro() {

    return (
        <div className={`w-full h-[100vh] flex justify-center align-center`} id='home'>
            <div className={`w-[95%] h-full`}>
                <div className={`w-full h-1/2 flex justify-center items-center relative ${styles.banner}`}>
                    <img className={`w-[15rem] h-[15rem] rounded-full absolute bottom-[-7rem] border-[5px] border-white`} alt='' src='/images/dp.png' />
                </div>
                <div className={`w-full h-1/2 flex flex-col items-center justify-center mt-[4rem]`}>
                    <h1 className={`text-6xl font-extrabold text-black`}>Bashorun Dolapo</h1>
                    <h3 className={`text-xl font-bold my-[1rem]`} >
                        <Typewriter
                            options={{
                                strings: ["Web Developer", "Blockchain Jedi", "I/O Enthusiast", "Technical Writer"],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </h3>

                    <div className={`my-[1rem]`}>
                        <button className={`w-[13em] bg-[#1877f2] h-[2.5em] rounded-md text-white mx-[2rem]`}>My Portfolio</button>
                        <button className={`w-[13em] bg-[#4b4f56] h-[2.5em] rounded-md text-white mx-[2rem`}>My Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro