import styles from '../styles/blogitem.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"



function BlogItem({ image, title, desc, link }: { image: string, title: string, desc: string, link: string }) {
    useEffect(()=>{
        Aos.init({duration: 1500})
    }, [])

    return (
        <div className={`min-h-[35vw] h-auto md:w-[48vw] rounded-lg flex flex-col my-[2rem] xs:w-[97vw] relative ${styles.blogitem}`} data-aos = "flip-left">
            <div className={`w-full min-h-[2rem] flex justify-start items-start pl-2 `}>
                <h1 className={`font-extrabold md:text-2xl capitalize xs:text-lg text-[#1877f2]`}>{title}</h1>
            </div>
            <Link href={link} passHref= {true}>
                <div className={`w-full md:min-h-[20rem] h-auto flex justify-center relative rounded-xl mb-2 overflow-hidden object-contain xs:min-h-[50vw]`}>
                    <img className={`h-auto w-full rounded-xl hover:scale-[105%] ease-in-out duration-[500ms]`} alt='' src={image} />
                </div>
            </Link>
            <div className={`w-full h-[3.5rem] overflow-hidden md:px-0 px-1 `}>
                <p className={`md:text-lg xs:text-sm font-[400] tracking-wide font-opensans`}>{desc}</p>
            </div>
        </div>
    )
}

export default BlogItem