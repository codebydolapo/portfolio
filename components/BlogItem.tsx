import styles from '../styles/blogitem.module.css'
import Link from 'next/link'


function BlogItem({ image, title, desc, link }: { image: string, title: string, desc: string, link: string }) {
    return (
        <div className={`min-h-[35vw] h-auto md:w-[48vw] flex flex-col rounded-lg my-[2rem] xs:w-[98vw] relative ${styles.blogitem}`}>
            <div className={`w-full min-h-[4rem] flex justify-start items-start pl-2`}>
                <h1 className={`font-extrabold md:text-xl uppercase xs:text-sm`}>{title}</h1>
            </div>
            <Link href={link} passHref= {true}>
                <div className={`w-full md:min-h-[20rem] h-auto flex justify-center relative rounded-xl mb-2 overflow-hidden object-contain xs:min-h-[50vw]`}>
                    <img className={`h-auto w-full rounded-xl hover:scale-[105%] ease-in-out duration-[500ms]`} alt='' src={image} />
                </div>
            </Link>
            <div className={`w-full min-h-[6rem] overflow-hidden md:pl-0 flex justify-center items-center`}>
                <p className={`md:text-[1rem] font-[500] xs:text-xs tracking-widest`}>{desc}</p>
            </div>
        </div>
    )
}

export default BlogItem