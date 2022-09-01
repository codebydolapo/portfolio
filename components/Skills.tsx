import styles from '../styles/skills.module.css'
import SkillsItem from './SkillsItem'

function Skills(){
    return(
        <div className = {`w-full h-[100vh] flex justify-center align-center`}  id = 'skills'>
            <div className = {`w-[90%] h-full`}>
                <div className = {`w-full h-[10%] flex flex-row items-center justify-between px-[2em]`}>
                    <h1 className = {`text-2xl font-extrabold`}>My Skills</h1>
                    {/* <p className = {`text-[#3578e5]`}>See All</p> */}
                </div>
                <div className = {`w-full h-[90%] flex flex-wrap flex-row items-start justify-center ${styles.skillsContainer}`}>
                    <SkillsItem/>
                    <SkillsItem/>
                    <SkillsItem/>
                    <SkillsItem/>
                    <SkillsItem/>
                    <SkillsItem/>
                    <SkillsItem/>
                    <SkillsItem/>
                </div>
            </div>
        </div>
    )
}

export default Skills