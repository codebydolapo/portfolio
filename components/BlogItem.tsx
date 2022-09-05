import styles from '../styles/blogitem.module.css'


function BlogItem(){
    return(
        <div className = {`w-[40vw] min-h-[25vw] h-auto my-[1rem] flex flex-col cursor-pointer ${styles.blogitem}`}>
            <div className = {`w-full h-[3rem] flex justify-start items-center pl-2`}>
                <h1 className={`font-bold font-oswald text-lg`}>Some Blog Post</h1>
            </div>
            <div className = {`w-full h-[70%]`}>
                <img className={`h-auto w-full`} alt = '' src= '/images/work1.jpg'/>
            </div>
            <div className = {`w-full h-[5rem] overflow-hidden`}>
                <p className = {`text-sm`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt delectus distinctio fugit dolore, ullam minus! Expedita soluta amet dolor, excepturi itaque iste quos architecto culpa esse! Vitae harum repellendus libero!</p>
            </div>
        </div>
    )
}

export default BlogItem