// import styles from '../styles/about.module.css'
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Link from "next/link"

function About() {

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <div className={`md:min-w-[100%] md:min-h-[100vh] md:h-[100vh] md:mb-0 flex md:flex-row items-center xs:justify-center xs:min-h-[110vh] xs:h-auto xs:mb-[2rem] xs:flex-col-reverse`} id='about'>

            <div className={`md:w-[40%] md:h-full overflow-hidden flex items-center justify-center xs:w-[100%] xs:h-[50%]`}>
                <div className={`md:w-[30rem] md:h-[30rem] border-[5px] border-[#1DA1F2] rounded-full relative xs:w-[98%] xs:h-[50%] `}>
                    <img className={`w-inherit h-inherit rounded-full `} alt='' src='/images/me4.jpg' />
                    <img className={`md:w-[5rem] absolute bottom-5 right-5 rounded-full z-100 xs:w-[3rem]`} alt='' src='/icons/verified.jpg' />
                </div>

            </div>
            <div className={`md:w-[60%] md:h-full flex flex-col items-center justify-center xs:w-[100%] xs:h-[50%]`}>
                <div className={`md:w-[50%] flex flex-col xs:w-[98%]`}>
                    <h1 className={`text-center text-black my-2 text-4xl font-extrabold`}>E-Kààbo and Welcome!</h1>
                    <p className={`text-center text-black my-2`}>My name is <b className="text-[#1DA1F2]">Bashorun Dolapo</b>, a <b className="text-[#1DA1F2]">Product Manager</b> with a burning passion for <b className="text-[#1DA1F2]">building products</b> that help others and solve real world problems.</p>
                    <p className={`text-center text-black my-2`}>
                        I have a <b className="text-[#1DA1F2]">keen eye for detail</b> and am looking forward to <b className="text-[#1DA1F2]">meeting user needs</b> with intuitive and user-friendly experiences.</p>
                    {/* <p className={`text-center text-black my-2`}>
                        I am a strong advocate for <b className="text-[#1DA1F2]">collaboration and innovation</b>, and I ensure that products are not only functional, but also delightful to use</p> */}
                    <p className={`text-center text-black my-2`}>
                        When I'm not working on delivering great products, I enjoy Walks, Reading and Writing, Movies, Music and Weightlifting</p>

                </div>
                <div className={`md:w-[50%] flex items-start justify-around xs:w-[98%]`}>
                    <button className={`md:w-[12rem] md:h-[3rem] bg-[#1DA1F2] text-white rounded-lg my-3 xs:w-[10rem] xs:h-[3rem]`}>Let's Discuss!</button>
                    <button className={`md:w-[12rem] md:h-[3rem] border-2 border-black text-black rounded-lg my-3 font-bold xs:w-[10rem] xs:h-[3rem]`}>Read My Resume</button>
                </div>
                <div className={`my-[1rem] h-12 w-96 flex items-center justify-center mt-10`}>
                    <Link href="https://www.linkedin.com/in/bashorun-dolapo-8b5164225/" passHref={true}>
                        <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/linkedin.webp' />
                    </Link>
                    <Link href="https://github.com/codebydolapo" passHref={true}>
                        <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/git.png' />
                    </Link>
                    <Link href="https://twitter.com/the_transistorr" passHref={true}>
                        <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/twitter.png' />
                    </Link>
                    <Link href="https://web.facebook.com/bashorun.dolapo.3" passHref={true}>
                        <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/facebook.png' />
                    </Link>
                    <Link href="https://www.instagram.com/_0xdolapo/" passHref={true}>
                        <img className={`w-10 rounded-xl mx-3 cursor-pointer`} alt='' src='/icons/instagram.png' />
                    </Link>
                </div>

            </div>
            
        </div>
    )
}

export default About