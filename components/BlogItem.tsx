import styles from '../styles/blogitem.module.css'
import Link from 'next/link'
import { useEffect, useState} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"



function BlogItem({ image, title, desc, link }: { image: string, title: string, desc: string, link: string }) {
    useEffect(()=>{
        Aos.init({duration: 1500})
    }, [])

    const [_title, setTitle] = useState("")

    function truncateString(str: any, num: any) {
        // check if the string is longer than the number of characters
        if (str.length > num) {
          // return a substring of the string from the beginning to the number of characters, plus "..."
          return str.substring(0, num) + "..."
        } else {
          // return the string as it is
           return str
        }
      }
      

    return (
        <div className={`min-h-[35vw] md:w-[48vw] rounded-lg flex flex-col my-[1rem] xs:w-[97vw] xs:h-[] relative ${styles.blogitem}`} data-aos = "flip-left">
            <div className={`w-full min-h-[5rem] flex justify-start items-start pl-2`}>
                <h1 className={`font-extrabold md:text-2xl capitalize xs:text-lg text-[#11abc1]`}>{truncateString(title, 45)}</h1>
            </div>
            <Link href={link} passHref= {true}>
                <div className={`w-full md:min-h-[23rem] md:max-h-[22rem] h-[26rem] flex justify-center rounded-xl mb-2 overflow-hidden xs:min-h-[50vw] xs:h-auto`}>
                    <img className={`h-auto w-full rounded-xl hover:scale-[105%] ease-in-out duration-[500ms]`} alt='' src={image} />
                </div>
            </Link>
            <div className={`w-full h-[5rem] overflow-hidden md:px-0 px-1`}>
                <p className={`md:text-base xs:text-sm font-[400] tracking-wide font-opensans`}>{desc}</p>
            </div>
        </div>
    )
}

export default BlogItem