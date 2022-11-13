import BlogItem from "./BlogItem"
//import styles from '../styles/blog.module.css'
import { blogData } from "../data/blogData"
import { maxHeaderSize } from "http"

function Blog() {
    return (
        // <div className={`w-full min-h-[100vh] mt-[50px] h-auto flex justify-center align-center`} id='blog'>
            <div className={`w-[100%] min-h-[100vh] flex flex-col items-center mb-[3rem] `} id='blog'>
                <div className={`w-full h-[5rem] flex flex-row items-center justify-between px-[0.5rem] border-b-2 border-grey md:pl-10 xs:pl-2`}>
                    <h1 className={`md:text-5xl font-extrabold xs:text-4xl`}>Blog</h1>
                </div>
                <div className = {`w-full min-h-[50rem] flex flex-wrap items-start justify-around`}>
                    {blogData.map(({title, image, link, desc})=>{
                    return <BlogItem
                        title = {title}
                        image = {image}
                        desc = {desc}
                        key = {Math.floor(Math.random() * 1000000000)}
                    />
                    })}
                </div>
            </div>
        // </div>
    )
}

export default Blog