import styles from '../styles/blogitem.module.css'


function BlogItem(){
    return(
        <div className = {`min-h-[35vw] h-auto md:w-[48vw] flex flex-col rounded-lg my-3 xs:w-[98vw] ${styles.blogitem}`}>
            <div className = {`w-full h-[3rem] flex justify-start items-center pl-2`}>
                <h1 className={`font-bold font-oswald text-lg`}>Some Blog Post</h1>
            </div>
            <div className = {`w-full min-h-[20rem] h-auto flex justify-center relative rounded-xl mb-2 overflow-hidden object-contain xs:min-h-[50vw]`}>
                <img className={`h-auto w-full rounded-xl`} alt = '' src= '/images/work3.jpg'/>
            </div>
            <div className = {`w-full h-[5rem] overflow-hidden md:pl-0 xs:pl-2`}>
                <p className = {`md:text-sm xs:text-xs`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt delectus distinctio fugit dolore, ullam minus! Expedita soluta amet dolor, excepturi itaque iste quos architecto culpa esse! Vitae harum repellendus libero!</p>
            </div>
        </div>
    )
}

export default BlogItem