import styles from '../styles/intro.module.css'
import { useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'


function Intro() {

    return (
        <div className={`w-full md:min-h-[100vh] flex justify-center align-center xs:min-h-[50vh]`} id='home'>
            <div className={`md:w-[100%] md:min-h-[70vh] xs:w-full xs:min-h-[100vh]`}>
                <div className={`w-full md:h-[60vh] flex flex-col justify-center md:items-center relative xs:h-[30vh] xs:items-start`}>
                    <div className={`w-full h-full overflow-hidden `}>
                        <img className={`w-full h-auto`} alt='' src='/images/bg.jpeg' />
                    </div>
                    <img className={`md:w-[15rem] md:h-[15rem] rounded-full mx-2 absolute md:bottom-[-5rem] border-[7px] border-white xs:w-[10rem] xs:h-[10rem] xs:bottom-[-1rem]`} alt='' src='/images/dpx.png' />
                </div>

                <div className={`w-full md:h-[40vh] flex flex-col items-center justify-center mt-[4rem] xs:min-h-[60vh]`}>
                    <div className={`md:w-[70%] min-h-[5rem] flex items-center justify-center`}>
                        <h1 className={`md:text-[7rem] font-allura font-thin text-[#1877f2] xs:text-7xl text-center`}>Bashorun Dolapo</h1>
                        <img className={`md:w-[5rem] md:visible xs:invisible xs:w-[0rem]`} alt='' src='/icons/verified.jpg' />
                    </div>
                    <h3 className={`md:text-xl font-bold my-[1rem] xs:text-lg `} >
                        <Typewriter
                            options={{
                                strings: ["Web Developer", "Web3 Jedi", "I/O Enthusiast", "Technical Writer"],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </h3>

                    <div className={`md:my-[1rem]`}>
                        <Link href = "/#portfolio">
                        <button className={`md:w-[13em] bg-[#1877f2] h-[2.5em] rounded-md text-white md:mx-[1.9rem] xs:w-[47vw] xs:mx-1`}>My Portfolio</button>
                        </Link>
                            
                        <Link href = "https://drive.google.com/file/d/1ENwx15E2hzntxMTjfY17ohHE2pnfOj7h/view?usp=drivesdk" passHref = {true}>
                        <button className={`md:w-[13em] bg-[#4b4f56] h-[2.5em] rounded-md text-white md:mx-[1.9rem] xs:w-[47vw] xs:mx-1`}>My Resume</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro