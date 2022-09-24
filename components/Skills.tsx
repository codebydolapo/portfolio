import styles from '../styles/skills.module.css'
import SkillsItem from './SkillsItem'
import { skillsData } from '../data/skillsdata'

function Skills(){
    return(
        // <div className = {`w-full min-h-[100vh] h-auto flex justify-center align-center mb-[3rem`}  id = 'skills'>
            <div className = {`w-[100%] min-h-[100vh] flex flex-col items-center mb-[3rem] `} id = 'skills'>
                <div className = {`w-full h-[5rem] flex flex-row items-center justify-between px-[0.5rem] border-b-2 border-grey md:pl-10 xs:pl-2`}>
                    <h1 className = {`md:text-5xl font-extrabold xs:text-4xl`}>My Skills</h1>
                    {/* <p className = {`text-[#3578e5]`}>See All</p> */}
                </div>
                <div className = {`w-full h-[90%] flex flex-wrap flex-row items-start justify-between md:px-10 xs:px-2 ${styles.skillsContainer}`}>
                    {
                        skillsData.map(({title, icon})=>{
                            return <SkillsItem
                            title = {title}
                            icon = {icon}
                            />
                        })
                    }
                </div>
            </div>
        // </div>
    )
}

export default Skills