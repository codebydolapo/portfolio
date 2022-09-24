import styles from '../styles/skillsitem.module.css'

function SkillsItem({title, icon}: {title: string, icon: string}){
    return(
        <div className = {`md:w-[15rem] md:h-[20rem] md:mx-5 md:my-5 border-2 border-grey flex flex-col justify-center items-center rounded-xl relative xs:w-[47vw] xs:h-[60vw] xs:my-2 ${styles.skillsitem}`}>
           <img src = {icon} className = {`w-auto md:h-[7rem] mb-2 xs:h-[5rem]`} alt = ''/>
           <p className = {`text-base font-bold`}>{title}</p>
           <img src = '/icons/medalIcon.png' className = {`w-auto md:h-[3rem] mb-2 absolute bottom-2 left-2 xs:h-[2rem]`} alt = ''/>

        </div>
    )
}

export default SkillsItem