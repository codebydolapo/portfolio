import PortfolioItem from "./PortfolioItem"
import styles from '../styles/portfolio.module.css'
import { portfolioData } from "../data/portfolioData"

function Portfolio(){
    return(
        // <div className = {`w-full min-h-[100vh] h-auto flex justify-center align-center`}  id = 'portfolio'>
            <div className = {`w-full min-h-[100vh]`} id = 'portfolio'>
                <div className = {`w-full h-[5rem] flex flex-row items-center justify-between px-[0.5rem] border-b-2 border-grey md:pl-10 xs:pl-2`}>
                    <h1 className = {`md:text-5xl font-extrabold xs:text-4xl`}>My Portfolio</h1>
                </div>
                <div className = {`w-full min-h-[50rem] flex flex-wrap items-start justify-around ${styles.portfolioContainer}`}>
                    {portfolioData.map(({title, desc, images, liveLink, repoLink})=>{
                        return <PortfolioItem
                            title = {title}
                            desc = {desc}
                            liveLink = {liveLink}
                            repoLink = {repoLink}
                            images= {images}
                        />
                    })}
                </div>
            </div>
        // </div>
    )
}

export default Portfolio