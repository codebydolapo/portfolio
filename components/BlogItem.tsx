import styles from '../styles/blogitem.module.css'


function BlogItem({image, title, desc, link}: {image: string, title: string, desc: string}){
    return(
        <div className = {`min-h-[35vw] h-auto md:w-[48vw] flex flex-col rounded-lg my-3 xs:w-[98vw] ${styles.blogitem}`}>
            <div className = {`w-full h-[3rem] flex justify-start items-center pl-2`}>
                <h1 className={`font-bold font-oswald text-lg`}>{title}</h1>
            </div>
            <div className = {`w-full md:min-h-[20rem] h-auto flex justify-center relative rounded-xl mb-2 overflow-hidden object-contain xs:min-h-[50vw]`}>
                <img className={`h-auto w-full rounded-xl`} alt = '' src= {image}/>
            </div>
            <div className = {`w-full h-[5rem] overflow-hidden md:pl-0 xs:pl-2`}>
                <p className = {`md:text-sm xs:text-xs`}>{desc}</p>
            </div>
        </div>
    )
}

export default BlogItem