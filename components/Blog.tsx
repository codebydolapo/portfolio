import BlogItem from "./BlogItem"
//import styles from '../styles/blog.module.css'

function Blog() {
    return (
        <div className={`w-full min-h-[100vh] mt-[50px] h-auto flex justify-center align-center`} id='blog'>
            <div className={`w-[90%] h-full`}>
                <div className={`w-full h-[15%] flex flex-row items-center justify-between px-[2em]`}>
                    <h1 className={`text-3xl font-extrabold`}>Blog</h1>
                </div>
                <div className = {`w-full h-[85%] flex flex-wrap flex-row items-start justify-between`}>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                </div>
            </div>
        </div>
    )
}

export default Blog